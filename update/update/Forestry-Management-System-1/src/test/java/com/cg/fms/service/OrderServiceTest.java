package com.cg.fms.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
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

import com.cg.fms.dao.OrderDao;
import com.cg.fms.entity.Contract;
import com.cg.fms.entity.Customer;
import com.cg.fms.entity.Land;
import com.cg.fms.entity.Order;
import com.cg.fms.entity.Product;
import com.cg.fms.exception.OrderException;
import com.cg.fms.exception.SchedulerException;
import com.cg.fms.model.LandModel;
import com.cg.fms.model.OrderModel;

@ExtendWith(MockitoExtension.class)
public class OrderServiceTest {
	@Mock
	private OrderDao orderDao;
	
	@InjectMocks
	private OrderServiceImpl service;
	
	@Test
	@DisplayName("OrderServiceImpl :: Return Null When Adding Order with Null")
	void testAddWithNull() throws OrderException {
		assertThrows(OrderException.class, () -> {
			service.addOrder(null);
		});	
	}
	
	@Test
	@DisplayName("OrderServiceImpl :: Return Null When deleting Order with Null")
	void testDelete() throws OrderException {
		assertThrows(OrderException.class, () -> {
			service.deleteOrder(null);
		});
	}
	
	
	/*
	 * @Test
	 * 
	 * @DisplayName("OrderServiceImpl :: Get Order Details when Order Number is Given "
	 * ) void testGetById () throws OrderException { Order testdata=new
	 * Order("1","2020-11-11","Chennai",100,new Customer());
	 * 
	 * OrderModel expected=new OrderModel("1","Chennai","2020-11-11",100,new
	 * Customer().getCustomerId());
	 * 
	 * 
	 * Mockito.when(orderDao.findById(testdata.getOrderNumber())).thenReturn(
	 * Optional.of(testdata));
	 * Mockito.when(orderDao.existsById(testdata.getOrderNumber())).thenReturn(true)
	 * ;
	 * 
	 * OrderModel actual=service.findById(testdata.getOrderNumber());
	 * 
	 * assertEquals(expected,actual); }
	 */
	
	/*
	 * @Test
	 * 
	 * @DisplayName("OrderServiceImpl :: Return Null for Order Details when Order Number not Exists"
	 * ) void testGetByIdNull() throws OrderException {
	 * 
	 * Mockito.when(orderDao.findById("1")).thenReturn(Optional.empty());
	 * Mockito.when(orderDao.existsById("1")).thenReturn(true);
	 * 
	 * OrderModel actual = service.findById("1"); assertNull(actual); }
	 */
	
	
	
	
	

}
