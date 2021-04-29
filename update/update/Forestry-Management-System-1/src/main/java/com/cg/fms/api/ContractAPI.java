package com.cg.fms.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cg.fms.exception.ContractException;
import com.cg.fms.model.ContractModel;
import com.cg.fms.service.IContractService;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="/contracts")
public class ContractAPI {
	
	@Autowired
	private IContractService contractService;
	/**
	 * get contract by contractNumber
	 * @param contractNumber
	 * @return
	 * @throws ContractException
	 */
	@GetMapping("/getContractByContractNumber/{contractNumber}")
	public ResponseEntity<ContractModel> getContarctByContractNumber(@PathVariable("contractNumber") String contractNumber) throws  ContractException{
		return ResponseEntity.ok(contractService.getContarctByContractNumber(contractNumber));
	}
	

	/**
	 * get all contracts
	 * @return
	 * @throws ContractException
	 */
	@GetMapping("/getallContracts")
	public ResponseEntity<List<ContractModel>> getAll() throws ContractException{
		return ResponseEntity.ok(contractService.getAllContracts());
	}
	
	/**
	 * get contract by customer id
	 * @param customerId
	 * @return
	 * @throws ContractException
	 */
	@GetMapping("/getcontractbycustomerid/{customerId}")
	public ResponseEntity<List<ContractModel>> findAllByCustomerId(@PathVariable(name = "customerId") String customerId)throws ContractException {
		ResponseEntity<ContractModel> response = null;
		List<ContractModel> order = contractService.findAllByCustomerId(customerId);

		return new ResponseEntity<>(contractService.findAllByCustomerId(customerId), HttpStatus.OK); 
		
	}
	


	/**
	 * add contract
	 * @param contract
	 * @return
	 * @throws ContractException
	 */
	@PostMapping("/addcontract")
	public ResponseEntity<ContractModel> addAdmin(@RequestBody ContractModel contract) throws ContractException {
		contract = contractService.addContract(contract);
		return new ResponseEntity<>(contract, HttpStatus.CREATED);
	}
	

	/**
	 * update contract
	 * @param contractModel
	 * @param contractNumber
	 * @return
	 * @throws ContractException
	 */
	@PutMapping("/updatecontract/{contractNumber}")
	public ResponseEntity<ContractModel> updateContract(@RequestBody ContractModel contractModel,@PathVariable("contractNumber")String contractNumber) throws ContractException{
		contractModel = contractService.updateContract(contractModel);
		return new ResponseEntity<>(contractModel, HttpStatus.OK);
	}
	

	/**
	 * delete contract
	 * @param contractNumber
	 * @return
	 * @throws ContractException
	 */
	@DeleteMapping("/deletecontract/{contractNumber}")
	public ResponseEntity<String> deleteContract(@PathVariable("contractNumber") String contractNumber) throws ContractException {
		ResponseEntity<String> response = null;
		ContractModel contract = contractService.getContarctByContractNumber(contractNumber);
		if (contract == null) {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			contractService.deleteContract(contractNumber);
			response = new ResponseEntity<>("Contract is deleted successsfully", HttpStatus.OK);
		}
		return response;
	}
	
}
