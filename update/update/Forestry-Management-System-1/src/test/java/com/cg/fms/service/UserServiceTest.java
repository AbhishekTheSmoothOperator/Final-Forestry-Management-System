//package com.cg.fms.service;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertThrows;
//import static org.junit.jupiter.api.Assertions.assertTrue;
//
//import java.util.Arrays;
//import java.util.List;
//import java.util.Optional;
//
//import org.junit.jupiter.api.DisplayName;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//
//import com.cg.fms.dao.UserDao;
//import com.cg.fms.entity.User;
//import com.cg.fms.entity.UserType;
//import com.cg.fms.exception.UserException;
//import com.cg.fms.model.UserModel;
//
//public class UserServiceTest {
//	
//	@Mock
//	private UserDao loginRepo;
//	
//	@InjectMocks
//	private UserServiceImpl service;
//	
//	@Test
//	@DisplayName("UserServiceImpl :: All Login Details should be retrieve")
//	void testGetAll() {
//		
//		List<User> testData=Arrays.asList(new User[] {
//				new User("U101","Avinash@123",UserType.CUSTOMER),
//				new User("U102","Bhargav@1345",UserType.CUSTOMER)
//		});
//		
//		Mockito.when(loginRepo.findAll()).thenReturn(testData);
//		
//		List<UserModel> expected=Arrays.asList(new UserModel[] {
//				new UserModel("U101","Avinash@123","CUSTOMER"),
//				new UserModel("U102","Bhargav@1345","CUSTOMER")
//		});
//		
//		List<UserModel> actual = service.findAll();
//		
//		assertEquals(expected,actual);
//
//	}
//	
//	@Test
//	@DisplayName("UserServiceImpl :: Get Login Details when user Id is Given ")
//	void testGetById () throws UserException {
//		User testdata=new User("U101","Avinash@123",UserType.CUSTOMER);
//		
//		UserModel expected=new UserModel("U101","Avinash@123","CUSTOMER");
//		
//		Mockito.when(loginRepo.findById(testdata.getUserName())).thenReturn(Optional.of(testdata));
//		Mockito.when(loginRepo.existsById(testdata.getUserName())).thenReturn(true);
//		
//	
//		UserModel actual=service.findById(testdata.getUserName());
//		
//		assertEquals(expected,actual);
//	}
//	
//	@Test
//	@DisplayName("UserServiceImpl :: SignIn ")
//	void testSignIn () throws UserException {
//		User testdata=new User("U101","Avinash@123",UserType.CUSTOMER);
//				
//		Mockito.when(loginRepo.findById(testdata.getUserName())).thenReturn(Optional.of(testdata));
//		
//		boolean signIn=service.signIn(service.getParser().parse(testdata));
//		
//		assertTrue(signIn);
//	}
//	@Test
//	@DisplayName("UserServiceImpl :: SignIn Exception because null data as signIn ")
//	void testSignInException () throws UserException {
//		assertThrows(UserException.class, () -> {
//			service.signIn(null);
//		});
//	}
//	@Test
//	@DisplayName("UserServiceImpl :: SignUp Exception because null data as signup ")
//	void testSignUpException () throws UserException {
//		assertThrows(UserException.class, () -> {
//			service.signUp(null);
//		});
//	}
//	@Test
//	@DisplayName("UserServiceImpl :: Find User Who is not Exists return exception")
//	void testFindUserNotExistsException () throws UserException {
//		assertThrows(UserException.class, () -> {
//			service.findById("U102");
//		});
//	}
//
//}
