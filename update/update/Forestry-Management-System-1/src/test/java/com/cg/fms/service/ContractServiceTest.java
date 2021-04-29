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

import com.cg.fms.dao.ContractDao;
import com.cg.fms.entity.Contract;
import com.cg.fms.entity.Customer;
import com.cg.fms.entity.Order;
import com.cg.fms.entity.Scheduler;
import com.cg.fms.exception.ContractException;
import com.cg.fms.exception.SchedulerException;
import com.cg.fms.model.ContractModel;

@ExtendWith(MockitoExtension.class)
public class ContractServiceTest {
	@Mock
	private ContractDao contractDao;
	
	@InjectMocks
	private ContractServiceImpl service;
	
	@Test
	@DisplayName("ContractServiceImpl :: Return Null When Adding Contract with Null")
	void testAdd() throws ContractException {
		assertThrows(ContractException.class, () -> {
			service.addContract(null);
		});
	}
	
	@Test
	@DisplayName("ContractServiceImpl :: Return Null When deleting Contract with Null")
	void testDelete() throws ContractException {
		assertThrows(ContractException.class, () -> {
			service.deleteContract(null);
		});
	}
	
	
	@Test
	@DisplayName("ContractServiceImpl :: Get Contract Details when Contract Number is Given")
	void testGetById () throws ContractException {
		Contract testdata=new Contract("1","2020-11-23","chennai","100",new Scheduler(),new Customer(),new Order());
		
		ContractModel expected=new ContractModel("1","chennai","2020-11-23","100",new Scheduler().getSchedulerId(),new Customer().getCustomerId(),new Order().getOrderNumber());
		
		
		Mockito.when(contractDao.findById(testdata.getContractNumber())).thenReturn(Optional.of(testdata));
		Mockito.when(contractDao.existsById(testdata.getContractNumber())).thenReturn(true);
	
		ContractModel actual=service.findById(testdata.getContractNumber());
		
		assertEquals(expected,actual);
	}
	
	@Test
	@DisplayName("ContractServiceImpl :: Return Null for Contract Details when Contract Number not Exists")
	void testGetByIdNull() throws ContractException {		
		
		Mockito.when(contractDao.findById("19")).thenReturn(Optional.empty());
		Mockito.when(contractDao.existsById("19")).thenReturn(true);
		
		ContractModel actual = service.findById("19");
		assertNull(actual);
	}
	
	
}
