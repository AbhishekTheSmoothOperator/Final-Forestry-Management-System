package com.cg.fms.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fms.dao.ContractDao;
import com.cg.fms.dao.CustomerDao;
import com.cg.fms.entity.Customer;
import com.cg.fms.entity.User;
import com.cg.fms.exception.AdminException;
import com.cg.fms.exception.ContractException;
import com.cg.fms.exception.CustomerException;
import com.cg.fms.exception.UserException;
import com.cg.fms.model.ContractModel;
import com.cg.fms.model.CustomerModel;
import com.cg.fms.model.UserModel;

@Service
public class CustomerServiceImpl implements ICustomerService {
	@Autowired
	private CustomerDao customerRepo;
	
	@Autowired
	private ContractDao contractRepo;
	
	@Autowired
	private EMParser parser;
	
	public CustomerServiceImpl() {
		/* default constructor */
	}
	/**
	 * 
	 * @param customerRepo
	 */
	public CustomerServiceImpl(CustomerDao customerRepo) {
		super();
		this.customerRepo = customerRepo;
		this.parser = new EMParser();
	}
	/**
	 * 
	 * @return
	 */
	public CustomerDao getCustomerRepo() {
		return customerRepo;
	}
	/**
	 * 
	 * @param customerRepo
	 */
	public void setCustomerRepo(CustomerDao customerRepo) {
		this.customerRepo = customerRepo;
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
		this.parser =new EMParser();
	}

	/**
	 * get customer by customer name
	 */
	@Override
	public CustomerModel getCustomerByCustomerName(String customerName) throws CustomerException {
		if (!customerRepo.existsByCustomerName(customerName))
			throw new CustomerException("No Customer found for the given Name");
		return parser.parse(customerRepo.findByCustomerName(customerName));
	}
	
	/**
	 * add contract
	 */
	@Override
	public boolean addContract(ContractModel contract,String customerId) throws ContractException, CustomerException{
		Customer customer=customerRepo.findById(customerId).orElse(null);
		boolean isAdded=false;
		if(contract==null) {
			throw new ContractException("Contract can not be null");
		}
		if(customerId==null) {
			throw new CustomerException("customer Id is null");
		}else if(customer == null){
			throw new CustomerException("Customer Id in null");
		}else {
			customer.addContranct(parser.parse(contract));
			customerRepo.save(customer);
			isAdded=true;
			System.out.println(isAdded);
			System.out.println(customer);
		}
		return isAdded;
	}

	/**
	 * get contract
	 */
	@Override
	public List<ContractModel> getContracts(String customerId) throws ContractException {
		Customer customer=customerRepo.findById(customerId).orElse(null);
		if(customer ==null) {
			throw new ContractException("No Customer Exists");
		}
		System.out.println(customer.getContracts());
		return customer.getContracts().stream().map(parser::parse).collect(Collectors.toList());
	}
	/**
	 * get customer
	 */
	@Override
	public CustomerModel getCustomer(String customerId) throws CustomerException {
		if (!customerRepo.existsById(customerId))
			throw new CustomerException("No Customer found for the given Id");
		return parser.parse(customerRepo.findById(customerId).orElse(null));
	}

	/**
	 * add customer
	 */
	@Override
	public CustomerModel addCustomer(CustomerModel customer) throws CustomerException {
		if(customer==null) {
			throw new CustomerException("customer should not be null");
		}
		else if (customer != null) {
			if (customerRepo.existsById(customer.getCustomerId())) {
				throw new CustomerException("Customer with this id already exists");
			}

			customer = parser.parse(customerRepo.save(parser.parse(customer)));
		}

		return customer;
	}
	

	/**
	 * sign in
	 */
	@Override
	public boolean signIn(CustomerModel customer) throws CustomerException {
		if(customer==null) {
			throw new CustomerException("SignIn details Cannot be Null");
		}
		Customer customerDetails=customerRepo.findByCustomerName(customer.getCustomerName());
		if(customerDetails==null) {
			throw new CustomerException("Customer Details doesnot Exists");
		}
		return customerDetails.getCustomerPassword().equals(customer.getCustomerPassword());
	}
	
	/**
	 * sign out
	 */
	@Override
	public boolean signOut(CustomerModel customer) throws CustomerException {
		
		return true;
	}
	/**
	 * delete customer
	 */
	@Override
	public void deleteCustomer(String customerId) {
		customerRepo.deleteById(customerId);
	}
	/**
	 * get all customer
	 */
	@Override
	public List<CustomerModel> getAllCustomers() {
		return customerRepo.findAll().stream().map(parser::parse).collect(Collectors.toList());
	}
	/**
	 * update customer
	 */
	@Override
	public Customer updateCustomer(String customerId, Customer customer) throws CustomerException {
		if (customer != null) {
			if (customerRepo.existsById(customer.getCustomerId())) {
				customer = customerRepo.save(customer);
			}
			else {
				throw new CustomerException("Customer not present in DB.");
			}
			
		}
		return customer;
	}
	/**
	 * exist by id
	 */

	@Override
	public boolean existsById(String customerId) throws CustomerException {
		if(customerId==null) {
			throw new CustomerException("Id can not be null");
		}
		return customerRepo.existsById(customerId);
	}
	/**
	 * exist by customer name
	 */
	@Override
	public boolean existsByCustomerName(String customerName) throws CustomerException{
		if(customerName == null) {
			throw new CustomerException("Name cannot be null");
		}
		return customerRepo.existsByCustomerName(customerName);
	}


	/**
	 * find by id
	 */
	@Override
	public CustomerModel findById(String customerId) throws CustomerException {
		if(customerId==null) {
			throw new CustomerException("CustomerId can not be null");
		}else if(!customerRepo.existsById(customerId)) {
			throw new CustomerException(customerId+" is not Exists");
		}
		return parser.parse(customerRepo.findById(customerId).orElse(null));
	}
	/**
	 * find by customer name
	 */
	@Override
	public CustomerModel findByCustomerName(String customerName) throws CustomerException {
		if(customerName==null) {
			throw new CustomerException("CustomerId can not be null");
		}else if(!customerRepo.existsById(customerName)) {
			throw new CustomerException(customerName+" is not Exists");
		}
		return parser.parse(customerRepo.findByCustomerName(customerName));
	}
	/**
	 * sign up
	 */
	@Override
	public CustomerModel signUp(CustomerModel customermodel) throws CustomerException {
		if(customermodel==null) {
			throw new CustomerException("SignUp details cannot be Null");
		}
		List<Customer> customers = customerRepo.findAll();
		for (Customer user : customers) {
		if (user.equals(customermodel)) {
           throw new CustomerException("Customer Already Exisits");
        }
		}
		customerRepo.save(parser.parse(customermodel));
		return customermodel;
	}



	

}
