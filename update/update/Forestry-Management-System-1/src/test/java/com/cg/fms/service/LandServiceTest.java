package com.cg.fms.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
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

import com.cg.fms.dao.LandDao;
import com.cg.fms.entity.Land;
import com.cg.fms.exception.ContractException;
import com.cg.fms.exception.LandException;
import com.cg.fms.model.LandModel;

@ExtendWith(MockitoExtension.class)
public class LandServiceTest {
	@Mock
	private LandDao landDao;
	
	@InjectMocks
	private LandServiceImpl service;
	
	
	@Test
	@DisplayName("LandServiceImpl :: All Land Details should be retrieve")
	void testGetAll() {
		List<Land> testData=Arrays.asList(new Land[] {
				new Land("1","100000","abhishek","1"),
				new Land("2","1000","paresh","20"),
				new Land("3","20000","avinash","10")
		});
		
		Mockito.when(landDao.findAll()).thenReturn(testData);
		
		List<LandModel> expected=Arrays.asList(new LandModel[] {
				new LandModel("1","1","abhishek","100000"),
				new LandModel("2","20","paresh","1000"),
				new LandModel("3","10","avinash","20000")
		});
		
		List<LandModel> actual = service.findAll();
		
		assertEquals(expected,actual);

	}
	
	@Test
	@DisplayName("LandServiceImpl :: Land Details should be Added")
	void testAdd() throws ContractException, LandException {
		Land testdata=new Land("1","100000","abhishek","1");
		
		Mockito.when(landDao.save(testdata)).thenReturn(testdata);

		LandModel expected=new LandModel("1","1","abhishek","100000");
		
		LandModel actual =service.addLand(service.getParser().parse(testdata));
		
		assertEquals(expected,actual);

	}
	
	@Test
	@DisplayName("LandServiceImpl :: Land Details should to be delete by Land Id")
	void testDelete() throws ContractException, LandException {
		Land testdata=new Land("1","1","abhishek","100000");
		
		Mockito.when(landDao.save(testdata)).thenReturn(testdata);

		LandModel expected=new LandModel("1","1","abhishek","100000");
		
		LandModel added = service.addLand(service.getParser().parse(testdata));
		
		Mockito.doNothing().when(landDao).deleteById(added.getLandId());
		Mockito.when(landDao.existsById(testdata.getLandId())).thenReturn(true);
		service.removeLandDetails(added.getLandId());
		boolean test=service.existsById(added.getLandId());
		
		assertTrue(test);
	}
	
	
	@Test
	@DisplayName("LandServiceImpl :: Land Details should retrieve by using Land Id ")
	void testGetById () throws LandException {
		Land testdata=new Land("1","100000","abhishek","1");
		
		LandModel expected=new LandModel("1","1","abhishek","100000");
		
		Mockito.when(landDao.existsById(testdata.getLandId())).thenReturn(true);
		Mockito.when(landDao.findById(testdata.getLandId())).thenReturn(Optional.of(testdata));
	
		LandModel actual= service.getLand(expected.getLandId());
		
		assertEquals(expected,actual);
	}
	
	@Test
	@DisplayName("LandServiceImpl :: Land Details should return Null when Land Id not Exists")
	void testGetByIdNull() throws LandException {		
		
		Mockito.when(landDao.existsById("1")).thenReturn(true);
		Mockito.when(landDao.findById("1")).thenReturn(Optional.empty());
		
		LandModel actual = service.findById("1");
		assertNull(actual);
	}
	

}
