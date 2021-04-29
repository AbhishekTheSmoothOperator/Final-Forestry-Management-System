package com.cg.fms.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import com.cg.fms.dao.ProductDao;
import com.cg.fms.entity.Order;
import com.cg.fms.entity.Product;
import com.cg.fms.exception.CustomerException;
import com.cg.fms.exception.OrderException;
import com.cg.fms.exception.ProductException;
import com.cg.fms.model.ProductModel;

@ExtendWith(MockitoExtension.class)
public class ProductServiceTest {
	@Mock
	private ProductDao productDao;
	
	@InjectMocks
	private ProductServiceImpl service;
	
	
	@Test
	@DisplayName("ProductServiceImpl :: Return Null When Adding product with Null")
	void testAddWithNull() throws ProductException {
		assertThrows(ProductException.class, () -> {
			service.addProduct(null);
		});	
	}
	
	@Test
	@DisplayName("ProductServiceImpl :: Return Null When deleting product with Null")
	void testDelete() throws ProductException {
		assertThrows(ProductException.class, () -> {
			service.deleteProduct(null);
		});
	}
	@Test
	@DisplayName("ProductServiceImpl :: Return Product Details when product Id is given")
	void testGetById () throws ProductException {
		Product testdata=new Product("1","timber wood","best timber wood",500.0, 100);
		
		ProductModel expected=new ProductModel("1","timber wood","best timber wood",500.0,100);
		
		Mockito.when(productDao.existsById(testdata.getProductId())).thenReturn(true);
		Mockito.when(productDao.findById(testdata.getProductId())).thenReturn(Optional.of(testdata));
	
		ProductModel actual=service.findById(testdata.getProductId());
		
		assertEquals(expected,actual);
	}
	
	/*
	 * @Test
	 * 
	 * @DisplayName("ProductServiceImpl :: Return Null When product Id is not present"
	 * ) void testGetByIdNull() throws ProductException {
	 * 
	 * Mockito.when(productDao.existsById("1")).thenReturn(true);
	 * Mockito.when(productDao.findById("1")).thenReturn(Optional.empty());
	 * 
	 * ProductModel actual = service.findById("1"); assertNull(actual); }
	 */
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
