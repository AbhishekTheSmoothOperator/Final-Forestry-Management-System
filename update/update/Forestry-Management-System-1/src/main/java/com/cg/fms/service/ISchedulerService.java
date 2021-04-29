package com.cg.fms.service;

import java.util.List;
import com.cg.fms.exception.SchedulerException;
import com.cg.fms.model.SchedulerModel;

public interface ISchedulerService {

	SchedulerModel getScheduler(String schedulerId) throws SchedulerException;

	void deleteScheduler(String schedulerId);

	List<SchedulerModel> getAllSchedulers();

	SchedulerModel updateScheduler(String schedulerId, SchedulerModel schedulerModel) throws SchedulerException;

	SchedulerModel addScheduler(SchedulerModel scheduler) throws SchedulerException;

	boolean existsById(String SchedulerId) throws SchedulerException;

	SchedulerModel findById(String SchedulerId) throws SchedulerException;
	

}
