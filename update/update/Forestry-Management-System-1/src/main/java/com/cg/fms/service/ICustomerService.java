package com.cg.fms.service;

import java.util.List;

import com.cg.fms.entity.Customer;
import com.cg.fms.exception.ContractException;
import com.cg.fms.exception.CustomerException;
import com.cg.fms.model.ContractModel;
import com.cg.fms.model.CustomerModel;

public interface ICustomerService {

	Customer updateCustomer(String customerId, Customer customer) throws CustomerException;

	List<CustomerModel> getAllCustomers();

	void deleteCustomer(String customerId);

	CustomerModel getCustomer(String customerId) throws CustomerException;

	CustomerModel addCustomer(CustomerModel customer) throws CustomerException;

	boolean existsById(String customerId) throws CustomerException;

	CustomerModel findById(String customerId) throws CustomerException;

	boolean signIn(CustomerModel customer) throws CustomerException;

	boolean signOut(CustomerModel customer) throws CustomerException;

	CustomerModel signUp(CustomerModel customermodel) throws CustomerException;

	CustomerModel findByCustomerName(String customerName) throws CustomerException;
	
	boolean existsByCustomerName(String customerName) throws CustomerException;

	CustomerModel getCustomerByCustomerName(String customerName) throws CustomerException;

	List<ContractModel> getContracts(String customerId) throws ContractException;
	
	boolean addContract(ContractModel contract,String customerId) throws ContractException, CustomerException;

}
