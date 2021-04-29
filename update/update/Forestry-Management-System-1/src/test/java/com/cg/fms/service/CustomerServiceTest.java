package com.cg.fms.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import com.cg.fms.dao.CustomerDao;
import com.cg.fms.entity.Customer;
import com.cg.fms.exception.CustomerException;
import com.cg.fms.model.CustomerModel;

@ExtendWith(MockitoExtension.class)
public class CustomerServiceTest {
	@Mock
	private CustomerDao customerDao;
	
	@InjectMocks
	private CustomerServiceImpl service;
	
	/*
	 * @Test
	 * 
	 * @DisplayName("CustomerServiceImplTest :: Customer Details Should be Added")
	 * void testAdd() throws CustomerException { Customer testdata=new
	 * Customer("1","abhishek","123456789","abhishekkvs1000@gmail.com","street A"
	 * ,"Chennai","600062","9632587411");
	 * 
	 * Mockito.when(customerDao.save(testdata)).thenReturn(testdata);
	 * 
	 * CustomerModel expected=new CustomerModel("1","abhishek","123456789",
	 * "abhishekkvs1000@gmail.com","street A","Chennai","600062","9632587411");
	 * 
	 * CustomerModel actual =
	 * service.addCustomer(service.getParser().parse(testdata));
	 * 
	 * assertEquals(expected,actual);
	 * 
	 * }
	 */
	
	/*
	 * @Test
	 * 
	 * @DisplayName("CustomerServiceImplTest :: Customer Details should be delete")
	 * void testDelete() throws CustomerException { Customer testdata=new
	 * Customer("1","abhishek","123456789","abhishekkvs1000@gmail.com","street A"
	 * ,"Chennai","600062","9632587411");
	 * 
	 * Mockito.when(customerDao.save(testdata)).thenReturn(testdata);
	 * 
	 * CustomerModel expected=new CustomerModel("1","abhishek","123456789",
	 * "abhishekkvs1000@gmail.com","street A","Chennai","600062","9632587411");
	 * 
	 * CustomerModel added =
	 * service.addCustomer(service.getParser().parse(testdata));
	 * 
	 * assertEquals(expected,added);
	 * 
	 * Mockito.doNothing().when(customerDao).deleteById(added.getCustomerId());
	 * 
	 * Mockito.when(customerDao.existsById(added.getCustomerId())).thenReturn(true);
	 * 
	 * service.deleteCustomer(added.getCustomerId());
	 * 
	 * Mockito.when(customerDao.existsById(added.getCustomerId())).thenReturn(false)
	 * ; boolean test=service.existsById(added.getCustomerId());
	 * 
	 * assertFalse(test); }
	 */	
	@Test
	@DisplayName("CustomerServiceImplTest :: Customer Details should be retrieve by customer Id ")
	void testGetById () throws CustomerException {
		Customer testdata=new Customer("1","abhishek","123456789","abhishekkvs1000@gmail.com","street 101","Chennai","600062","9632587411");
		
		CustomerModel expected=new CustomerModel("1","abhishek","123456789","abhishekkvs1000@gmail.com","street 101","Chennai","600062","9632587411");
		
		
		Mockito.when(customerDao.findById(testdata.getCustomerId())).thenReturn(Optional.of(testdata));
		Mockito.when(customerDao.existsById(testdata.getCustomerId())).thenReturn(true);
	
		
		CustomerModel actual = service.findById(expected.getCustomerId());
		assertEquals(expected,actual);
	}
	
	/*
	 * @Test
	 * 
	 * @DisplayName("CustomerServiceImplTest :: Return exception when customer Id is not exists"
	 * ) void testGetByIdNull() throws CustomerException {
	 * 
	 * Mockito.when(customerDao.findById("1")).thenReturn(Optional.empty());
	 * Mockito.when(customerDao.existsById("1")).thenReturn(true);
	 * 
	 * CustomerModel actual = service.findById("1"); assertNull(actual); }
	 */
	
	@Test
	@DisplayName("CustomerServiceImplTest :: Throw Exception when finding by Customer id given as null")
	void testGetByIdException() throws CustomerException {		
		
		assertThrows(CustomerException.class, () -> {
			service.findById(null);
		});
	}
	
	

}
