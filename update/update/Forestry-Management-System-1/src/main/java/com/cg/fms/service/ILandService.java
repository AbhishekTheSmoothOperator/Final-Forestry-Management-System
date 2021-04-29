package com.cg.fms.service;

import java.util.List;

import com.cg.fms.entity.Land;
import com.cg.fms.exception.LandException;
import com.cg.fms.model.LandModel;

public interface ILandService {
	public LandModel getLand(String landId) throws LandException;

	public LandModel addLand(LandModel land) throws LandException;

	public Land updateLand(Land land)throws LandException ;

	public void removeLandDetails(String surveyNumber)throws LandException ;
	
	public List<Land> getAllLands();

	LandModel findById(String landId) throws LandException;

	boolean existsById(String landId) throws LandException;

	List<LandModel> findAll();
}