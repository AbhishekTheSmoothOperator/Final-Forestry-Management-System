package com.cg.fms.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fms.dao.SchedulerDao;

import com.cg.fms.exception.SchedulerException;
import com.cg.fms.model.SchedulerModel;

@Service
public class SchedulerServiceImpl implements ISchedulerService {


	@Autowired
	private SchedulerDao schedulerRepo;
	
	@Autowired
	private EMParser parser;
	
	public SchedulerServiceImpl() {
		/**
		 *  default constructor
		 */
	}
	
		
	/**
	 * The @param tag provides the name, type, and description of a function parameter.
	 * @param schedulerRepo
	 */
	public SchedulerServiceImpl(SchedulerDao schedulerRepo) {
		this.schedulerRepo = schedulerRepo;
		this.parser =new EMParser();
	}
	/**
	 * 
	 * @return
	 */
	public SchedulerDao getSchedulerRepo() {
		return schedulerRepo;
	}

	/**
	 * 
	 * @param schedulerRepo
	 */
	public void setSchedulerRepo(SchedulerDao schedulerRepo) {
		this.schedulerRepo = schedulerRepo;
	}

	/**
	 * 
	 * @return
	 */
	public EMParser getParser() {
		return parser;
	}
	
	/**
	 * 
	 * @param parser
	 */
	public void setParser(EMParser parser) {
		this.parser = parser;
	}
	
	/**
	 * get scheduler
	 */

	@Override
	public SchedulerModel getScheduler(String schedulerId) throws SchedulerException {
		if (!schedulerRepo.existsById(schedulerId))
			throw new SchedulerException("No Scheduler found for the given Id");
		return parser.parse(schedulerRepo.findById(schedulerId).get());
	}

	/**
	 * add scheduler
	 */
	@Override
	public SchedulerModel addScheduler(SchedulerModel scheduler) throws SchedulerException {
		if(scheduler==null) {
			throw new SchedulerException("scheduler should not be null");
		}
		else if (scheduler != null) {
			if (schedulerRepo.existsById(scheduler.getSchedulerId())) {
				throw new SchedulerException("Scheduler with this id already exists");
			}

			scheduler = parser.parse(schedulerRepo.save(parser.parse(scheduler)));
		}

		return scheduler;
	}


	/**
	 * delete scheduler
	 */
	@Override
	public void deleteScheduler(String schedulerId) {
		if(schedulerId==null) {
			throw new SchedulerException("Scheduler id should not be null");
		}else if (!schedulerRepo.existsById(schedulerId)) {
			throw new SchedulerException("Scheduler id"+schedulerId+" does not exists");
		}else {
			schedulerRepo.deleteById(schedulerId);
		}
		schedulerRepo.deleteById(schedulerId);
	}

	/**
	 * get all scheduler
	 */
	@Override
	public List<SchedulerModel> getAllSchedulers() {
		return schedulerRepo.findAll().stream().map(parser::parse).collect(Collectors.toList());
	}
	
	/**
	 * update scheduler
	 */
	@Override
	public SchedulerModel updateScheduler(String schedulerId, SchedulerModel schedulerModel) throws SchedulerException {
		if (schedulerModel != null) {
			if (schedulerRepo.existsById(schedulerModel.getSchedulerId())) {
				schedulerModel = parser.parse(schedulerRepo.save(parser.parse(schedulerModel)));
			}
			
		}
		return schedulerModel;
	}
	
	/**
	 * find by id
	 */
	@Override
	public SchedulerModel findById(String SchedulerId) throws SchedulerException {
		if(SchedulerId==null) {
			throw new SchedulerException("Scheduler Id should not be null");
		}else if(!this.existsById(SchedulerId)) {
			throw new SchedulerException("Scheduler Does not Exists");
		}
		return parser.parse(schedulerRepo.findById(SchedulerId).orElse(null));
	}
	/**
	 * exist by id
	 */
	@Override
	public boolean existsById(String SchedulerId) throws SchedulerException {
		if(SchedulerId==null) {
			throw new SchedulerException("Scheduler Id  can not be Null");
		}
		return schedulerRepo.existsById(SchedulerId);
	}

}
