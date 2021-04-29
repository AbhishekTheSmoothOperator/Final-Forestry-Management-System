package com.cg.fms.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fms.dao.LandDao;
import com.cg.fms.entity.Land;
import com.cg.fms.exception.AdminException;
import com.cg.fms.exception.LandException;
import com.cg.fms.model.LandModel;

@Service
public class LandServiceImpl implements ILandService {

	@Autowired
	private LandDao landDao;
	
	@Autowired
	private EMParser parser;
	
	public LandServiceImpl() {
		/**
		 * default constructor
		 */
	}
	/**
	 * 
	 * @param landDao
	 */
	public LandServiceImpl(LandDao landDao) {
		
		
		super();
		this.landDao= landDao;
		this.parser =new EMParser();
	}
	
	

	public LandDao getLandDao() {
		return landDao;
	}

	public void setLandDao(LandDao landDao) {
		this.landDao = landDao;
	}

	public EMParser getParser() {
		return parser;
	}

	public void setParser(EMParser parser) {
		this.parser = parser;
	}
	/**
	 * get land
	 */
	@Override
	public LandModel getLand(String landId) throws LandException {
		if (!landDao.existsById(landId))
			throw new LandException("No land found for the given number");
		return parser.parse(landDao.findById(landId).get());
	}

	/**
	 * add land
	 */
	@Override
	public LandModel addLand(LandModel land) throws LandException {
		if(land==null) {
			throw new LandException("land should not be null");
		}
		else if (land!= null) {
			if (landDao.existsById(land.getLandId())) {
				throw new LandException("land with this number already exists");
			}

			land = parser.parse(landDao.save(parser.parse(land)));
		}

		return land;
	}

	/**
	 * update land
	 */
	@Override
	public Land updateLand(Land land) throws LandException {
		if ( land!= null) {
			if (landDao.existsById(land.getLandId())) {
				
				land = landDao.save(land);
			}
			else {
				throw new LandException("land with this doesnot exisit");
			}

			
		}

		return land;
	}

	/**
	 * get all land
	 */
	@Override
	public List<Land> getAllLands() {
		return landDao.findAll();
	}

	/**
	 * delete land
	 */
	@Override
	public void removeLandDetails(String landId) throws LandException {
		landDao.deleteById(landId);
		
	}

	/**
	 * exist by id
	 */
	@Override
	public boolean existsById(String landId) throws LandException {
		if(landId==null) {
			throw new LandException("Land Id  can not be Null");
		}
		return landDao.existsById(landId);
	}
	/**
	 * find by id
	 */
	@Override
	public LandModel findById(String landId) throws LandException {
		if(landId==null) {
			throw new LandException("Land should not be null");
		}else if(!this.existsById(landId)) {
			throw new LandException("Land Does not Exists");
		}
		return parser.parse(landDao.findById(landId).orElse(null));
	}
	/**
	 * find all
	 */
	@Override
	public List<LandModel> findAll() {
		return landDao.findAll().stream().map(parser::parse).collect(Collectors.toList());
	}

	


}