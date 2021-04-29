package com.cg.fms.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import com.cg.fms.dao.AdminDao;
import com.cg.fms.entity.Admin;
import com.cg.fms.exception.AdminException;
import com.cg.fms.model.AdminModel;

@ExtendWith(MockitoExtension.class)
public class AdminServiceTest {
	
	
	@Mock
	private AdminDao adminDao;
	
	@InjectMocks
	private AdminServiceImpl service;
	@Test
	@DisplayName("AdminServiceImpl :: All Admin Details should be retrieve")
	void testGetAll() {
		List<Admin> testData=Arrays.asList(new Admin[] {
				new Admin("1","abhishek","123456789"),
				new Admin("2","paresh","123456789"),
				new Admin("3","avinash","12397897")
		});
		
		Mockito.when(adminDao.findAll()).thenReturn(testData);
		
		List<AdminModel> expected=Arrays.asList(new AdminModel[] {
				new AdminModel("1","abhishek","123456789"),
				new AdminModel("2","paresh","123456789"),
				new AdminModel("3","avinash","12397897")
		});
		
		List<AdminModel> actual = service.getAllAdmins();
		
		assertEquals(expected,actual);

	}
	
	@Test
	@DisplayName("AdminServiceImpl: Admin Details Should be added")
	void testAdd() throws AdminException {
		Admin admin1=new Admin("1","abhishek","123456789");
		
		Mockito.when(adminDao.save(admin1)).thenReturn(admin1);

		AdminModel expected=new AdminModel("1","abhishek","123456789");
		
		AdminModel actual = service.addAdmin(expected);
		
		assertEquals(expected,actual);

	}

	
	@Test
	@DisplayName("get by Id ")
	void testGetById () throws AdminException {
		Admin testdata=new Admin("1","abhishek","123456789");
		
		AdminModel expected=new AdminModel("1","abhishek","123456789");
		
		Mockito.when(adminDao.existsById(testdata.getAdminId())).thenReturn(true);
		Mockito.when(adminDao.findById(testdata.getAdminId())).thenReturn(Optional.of(testdata));
		
		
		AdminModel actual=service.getAdmin(expected.getAdminId());
		assertEquals(expected,actual);
	}
	
	@Test
	@DisplayName("AdminServiceImpl :: Admin Details should Throw Exception if Already Exists")
	void testAddException() throws AdminException {
		Admin admin1=new Admin("1","abhishek","123456789");
		
		Mockito.when(adminDao.save(admin1)).thenReturn(admin1);

		service.addAdmin(service.getParser().parse(admin1));
		
		AdminModel admin2=new AdminModel("1","abhishek","123456789");
		
		Mockito.when(adminDao.existsById(admin2.getAdminId())).thenReturn(true);
		assertThrows(AdminException.class, () -> {
			service.addAdmin(admin2);
		});
	}
	
	@Test
	@DisplayName("AdminServiceImpl :: Admin Details should to be delete by Admin Id")
	void testDelete() throws AdminException {
		Admin admin1=new Admin("1","abhishek","123456789");
		
		Mockito.when(adminDao.save(admin1)).thenReturn(admin1);

		AdminModel added = service.addAdmin(service.getParser().parse(admin1));
		
		Mockito.doNothing().when(adminDao).deleteById(added.getAdminId());
		Mockito.when(adminDao.existsById(admin1.getAdminId())).thenReturn(true);
		service.deleteAdmin(added.getAdminId());
		boolean test=service.existsById(added.getAdminId());
		
		assertTrue(test);
		
	}
	
	@Test
	@DisplayName("AdminServiceImpl :: Admin Details should return Null when Admin Id not Exists")
	void testGetByIdNull() throws AdminException {		
		
		Mockito.when(adminDao.findById("1")).thenReturn(Optional.empty());
		Mockito.when(adminDao.existsById("1")).thenReturn(true);
		
		AdminModel actual = service.findById("1");
		assertNull(actual);
	}
	
	@Test
	@DisplayName("AdminServiceImplTest :: Throw Exception when finding by Admin id given as null")
	void testGetByIdException() throws AdminException {		
		
		assertThrows(AdminException.class, () -> {
			service.findById(null);
		});
	}
}