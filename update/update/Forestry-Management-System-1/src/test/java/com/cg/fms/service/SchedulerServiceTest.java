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

import com.cg.fms.dao.SchedulerDao;
import com.cg.fms.entity.Order;
import com.cg.fms.entity.Scheduler;
import com.cg.fms.exception.ContractException;
import com.cg.fms.exception.CustomerException;
import com.cg.fms.exception.SchedulerException;
import com.cg.fms.model.SchedulerModel;

@ExtendWith(MockitoExtension.class)
public class SchedulerServiceTest {
	
	@Mock
	private SchedulerDao schedulerDao;
	
	@InjectMocks
	private SchedulerServiceImpl service;
	
	@Test
	@DisplayName("SchedulerServiceImpl :: Return Null When Adding Scheduler with Null")
	void testAddCreditCardWithNull() throws SchedulerException {
		assertThrows(SchedulerException.class, () -> {
			service.addScheduler(null);
		});	}
	
	@Test
	@DisplayName("SchedulerServiceImpl :: Throw Exception When Try to Delete Scheduler with Null")
	void testDeleteCreditCardWithNull() throws SchedulerException {
		assertThrows(SchedulerException.class, () -> {
			service.deleteScheduler(null);
		});
	}
	
	@Test
	@DisplayName("SchedulerServiceImpl :: Get Scheduler Details when Scheduler id is Given")
	void testGetById () throws SchedulerException {
		Scheduler testdata=new Scheduler("1","abhishek","9632587741","TN-A2-021", new Order());
		
		SchedulerModel expected=new SchedulerModel("1","abhishek","9632587741","TN-A2-021", new Order().getOrderNumber());
		
		
		Mockito.when(schedulerDao.findById(testdata.getSchedulerId())).thenReturn(Optional.of(testdata));
		Mockito.when(schedulerDao.existsById(testdata.getSchedulerId())).thenReturn(true);
	
		SchedulerModel actual=service.findById(testdata.getSchedulerId());
		
		assertEquals(expected,actual);
	}
	
	@Test
	@DisplayName("SchedulerServiceImpl :: Return Null for Scheduler Details when Scheduler ID not Exists")
	void testGetByIdNull() throws SchedulerException {		
		
		Mockito.when(schedulerDao.findById("1")).thenReturn(Optional.empty());
		Mockito.when(schedulerDao.existsById("1")).thenReturn(true);
		
		SchedulerModel actual = service.findById("1");
		assertNull(actual);
	}

}
