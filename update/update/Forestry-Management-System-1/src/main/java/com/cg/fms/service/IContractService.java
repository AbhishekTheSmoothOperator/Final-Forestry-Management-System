package com.cg.fms.service;

import java.util.List;
import java.util.Set;

import com.cg.fms.exception.ContractException;
import com.cg.fms.exception.CustomerException;
import com.cg.fms.model.ContractModel;

public interface IContractService {

	
	public ContractModel updateContract(ContractModel contractModel)throws ContractException ;
	public void deleteContract(String contractNumber);
	public List<ContractModel> getAllContracts();
	public ContractModel getContarctByContractNumber(String contractNumber) throws ContractException;
	ContractModel addContract(ContractModel contract) throws ContractException;
	boolean existsById(String contractNumber) throws ContractException;
	ContractModel findById(String contractNumber) throws ContractException;
//	Set<ContractModel> findAllByCustomerId(String customerId) throws CustomerException;
	ContractModel addByCustomer(ContractModel contract, String customerId) throws ContractException, CustomerException;
//	ContractModel findByCustomerId(String customerId) throws ContractException;
//	boolean existsByCustomerId(String customerId) throws ContractException;
	List<ContractModel> findAllByCustomerId(String customerId);
	
}
