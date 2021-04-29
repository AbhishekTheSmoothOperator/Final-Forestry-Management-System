package com.cg.fms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.fms.entity.Admin;

@Repository
public interface AdminDao extends JpaRepository<Admin, String>{

	/**
	 * 
	 * @param adminName
	 * @return
	 */
	boolean existsByAdminName(String adminName);

	/**
	 * 
	 * @param adminName
	 * @return
	 */
	Admin findByAdminName(String adminName);

}
