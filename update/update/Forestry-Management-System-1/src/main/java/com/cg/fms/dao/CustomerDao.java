package com.cg.fms.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.fms.entity.Customer;

public interface CustomerDao extends JpaRepository<Customer,String>{

	/**
	 * 
	 * @param customerName
	 * @return
	 */
	boolean existsByCustomerName(String customerName);

	/**
	 * 
	 * @param customerName
	 * @return
	 */
	Customer findByCustomerName(String customerName);

}
