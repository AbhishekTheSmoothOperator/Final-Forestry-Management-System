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

import com.cg.fms.entity.Customer;
import com.cg.fms.exception.ContractException;
import com.cg.fms.exception.CustomerException;
import com.cg.fms.exception.UserException;
import com.cg.fms.model.ContractModel;
import com.cg.fms.model.CustomerModel;
import com.cg.fms.model.UserModel;
import com.cg.fms.service.ICustomerService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="/customers")
public class CustomerAPI {
	
	@Autowired
	private ICustomerService customerService;
	/**
	 * get customer by customer name
	 * @param customerName
	 * @return
	 * @throws CustomerException
	 */
	@GetMapping("/getcustomerByCustomerName/{customerName}")
	public ResponseEntity<CustomerModel> getcustomerByCustomerName(@PathVariable("customerName") String customerName) throws  CustomerException{
		return ResponseEntity.ok(customerService.getCustomerByCustomerName(customerName));
	}
	
	/**
	 * get customer
	 * @param customerId
	 * @return
	 * @throws CustomerException
	 */
	@GetMapping("/getcustomer/{customerId}")
	public ResponseEntity<CustomerModel> getCustomer(@PathVariable("customerId") String customerId) throws  CustomerException{
		return ResponseEntity.ok(customerService.getCustomer(customerId));
	}
	/**
	 * get contracts
	 * @param customerId
	 * @return
	 * @throws CustomerException
	 */
	
	@GetMapping("/getcontracts/{customerId}")
	public ResponseEntity<List<ContractModel>> getContracts(@PathVariable("customerId") String customerId) throws  CustomerException{
		return ResponseEntity.ok(customerService.getContracts(customerId));
	}
	
	/**
	 * add contracts
	 * @param contract
	 * @param customerId
	 * @return
	 * @throws ContractException
	 * @throws CustomerException
	 */
	
	@PostMapping("/addcontract/{customerId}")
	public ResponseEntity<String> addcontract(@RequestBody ContractModel contract,@PathVariable("customerId") String customerId) throws ContractException, CustomerException{
		ResponseEntity<String> response=null;
		if(customerService.addContract(contract, customerId)) {
			response = new ResponseEntity<>("Contract is Added",HttpStatus.CREATED);
		}else {
			response= new ResponseEntity<>("Contract is not Added",HttpStatus.NOT_ACCEPTABLE);
		}
		return response;
	}
	
	
	/**
	 * get all customers
	 * @return
	 * @throws ContractException
	 */
	@GetMapping("/getallcustomers")
	public ResponseEntity<List<CustomerModel>> getAll() throws ContractException{
		return ResponseEntity.ok(customerService.getAllCustomers());
	}
	

	/**
	 * add customer
	 * @param customer
	 * @return
	 * @throws CustomerException
	 */
	@PostMapping("/addcustomer")
	public ResponseEntity<CustomerModel> createAdmin(@RequestBody CustomerModel customer) throws CustomerException {
		customer = customerService.addCustomer(customer);
		return new ResponseEntity<>(customer, HttpStatus.CREATED);
	}
	/**
	 * sign in
	 * @param customer
	 * @return
	 * @throws CustomerException
	 */
	
	@PostMapping("/signIn")
	public ResponseEntity<CustomerModel> signIn(@RequestBody CustomerModel customer) throws CustomerException{
		ResponseEntity<CustomerModel> response1=null;

		if(customerService.existsByCustomerName(customer.getCustomerName())) {
			if(customerService.signIn(customer)) {
				response1=new ResponseEntity<>(customer,HttpStatus.ACCEPTED);
			}else {
				response1=new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
			}		
		}else {
			response1=new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return response1;
	
	}
	
	/**
	 * update customer
	 * @param customer
	 * @param customerId
	 * @return
	 * @throws ContractException
	 * @throws CustomerException
	 */
	@PutMapping("/updatecustomer/{customerId}")
	public ResponseEntity<Customer> updateContract(@RequestBody Customer customer,@PathVariable("customerId")String customerId) throws ContractException, CustomerException{
		customer = customerService.updateCustomer(customerId, customer);
		return new ResponseEntity<>(customer, HttpStatus.OK);
	}
	

	/**
	 * delete customer
	 * @param customerId
	 * @return
	 * @throws CustomerException
	 */
	@DeleteMapping("/deletecustomer/{customerId}")
	public ResponseEntity<String> deleteContract(@PathVariable("customerId") String customerId) throws CustomerException {
		ResponseEntity<String> response = null;
		CustomerModel customer = customerService.getCustomer(customerId);
		if (customer == null) {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			customerService.deleteCustomer(customerId);
			response = new ResponseEntity<>("Customer is deleted successsfully", HttpStatus.OK);
		}
		return response;
	}
	/**
	 * sign up
	 * @param signUp
	 * @return
	 * @throws CustomerException
	 */
	@PostMapping("/signUp")
	public ResponseEntity<CustomerModel> signUp(@RequestBody CustomerModel signUp ) throws CustomerException {
		ResponseEntity<CustomerModel> response=null;
		if(signUp !=null) {
			signUp=customerService.signUp(signUp);
			response=new ResponseEntity<>(signUp,HttpStatus.ACCEPTED);
		}else {
			response=new ResponseEntity<>(HttpStatus.NO_CONTENT);	
		}
		return response;
	}

}
