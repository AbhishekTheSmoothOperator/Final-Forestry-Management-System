package com.cg.fms.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.fms.entity.Scheduler;

public interface SchedulerDao extends JpaRepository<Scheduler, String> {

}
