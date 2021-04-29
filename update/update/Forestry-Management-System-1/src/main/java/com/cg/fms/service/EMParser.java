package com.cg.fms.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fms.dao.ContractDao;
import com.cg.fms.dao.CustomerDao;
import com.cg.fms.dao.OrderDao;
import com.cg.fms.dao.ProductDao;
import com.cg.fms.dao.SchedulerDao;
import com.cg.fms.entity.Admin;
import com.cg.fms.entity.Contract;
import com.cg.fms.entity.Customer;
import com.cg.fms.entity.Land;
import com.cg.fms.entity.Order;
import com.cg.fms.entity.Product;
import com.cg.fms.entity.Scheduler;
import com.cg.fms.entity.User;
import com.cg.fms.entity.UserType;
import com.cg.fms.model.AdminModel;
import com.cg.fms.model.ContractModel;
import com.cg.fms.model.CustomerModel;
import com.cg.fms.model.LandModel;
import com.cg.fms.model.OrderModel;
import com.cg.fms.model.ProductModel;
import com.cg.fms.model.SchedulerModel;
import com.cg.fms.model.SignUp;
import com.cg.fms.model.UserModel;

@Service
public class EMParser {
	
	
	@Autowired
	private CustomerDao customerRepo;
	
	@Autowired
	private ContractDao contractRepo;
	
	@Autowired
	private SchedulerDao schedulerRepo;
	
	@Autowired
	private OrderDao orderRepo;
	
	@Autowired 
	private ProductDao productRepo;
	
	/**
	 * 
	 * @param source
	 * @return
	 */
	
	public AdminModel parse(Admin source) {
		return source==null?null:
			new AdminModel(source.getAdminId(),
						source.getAdminName(),
						source.getAdminPassword());
			
	}
	/**
	 * 
	 * @param source
	 * @return
	 */
	public Admin parse(AdminModel source) {
		return source==null?null:
			new Admin(source.getAdminId(),
						source.getAdminName(),
						source.getAdminPassword());

	}
	/**
	 * 
	 * @param source
	 * @return
	 */
	public ContractModel parse(Contract source) {
		return source==null?null : 
			new ContractModel (source.getContractNumber(),
					source.getDeliveryDate(),source.getDeliveryPlace(),source.getQuantity(),
					source.getScheduler().getSchedulerId(),
					source.getCustomer().getCustomerId(),
					source.getOrder().getOrderNumber());
		
	}
	/**
	 * 
	 * @param source
	 * @return
	 */
	public Contract parse(ContractModel source) {
		return source==null?null : 
			new Contract (source.getContractNumber(),
					source.getDeliveryDate(),source.getDeliveryPlace(),source.getQuantity(),
					schedulerRepo.findById(source.getScheduler()).orElse(null), 
					customerRepo.findById(source.getCustomer()).orElse(null),
					orderRepo.findById(source.getOrder()).orElse(null));
		
	}
	/**
	 * 
	 * @param source
	 * @return
	 */
	public CustomerModel parse(Customer source) {
		List<String> epe = new ArrayList<>();
		if(source.getContracts() != null) {
		for(Contract l : source.getContracts()) {
			epe.add(l.getContractNumber());
			epe.add(l.getDeliveryDate());
			epe.add(l.getDeliveryPlace());
			epe.add(l.getQuantity());
		}
		}
		List<String> op = new ArrayList<>();
		if(source.getOrders() != null) {
		for(Order ol : source.getOrders()) {
			op.add(ol.getOrderNumber());
			op.add(ol.getDeliveryDate());
			op.add(ol.getDeliveryPlace());
		}
		}
		CustomerModel cm = new CustomerModel (source.getCustomerId(),
				source.getCustomerName(),source.getCustomerPassword(),source.getCustomerEmail(),
				source.getCustomerAddress(),
				source.getCustomerTown(),
				source.getCustomerPostalCode(),
				source.getCustomerContact());
		cm.setContracts(epe);
		cm.setOrders(op);
		return source==null?null : 
			cm;
	}
	/**
	 * 
	 * @param source
	 * @return
	 */
	public Customer parse(CustomerModel source) {
		List<Contract> epe = new ArrayList<>();
		if(source.getContracts()!=null) {
			for(String l: source.getContracts()) {
				Contract c=contractRepo.findById(l).get();
				epe.add(c);
			}
		}
		List<Order> o = new ArrayList<>();
		if(source.getOrders()!=null) {
			for(String lo: source.getOrders()) {
				Order oc=orderRepo.findById(lo).get();
				o.add(oc);
			}
		}
		Customer cc= new Customer (source.getCustomerId(),source.getCustomerName(),source.getCustomerPassword(),source.getCustomerEmail(),
				source.getCustomerAddress(),
				source.getCustomerTown(),
				source.getCustomerPostalCode(),
				source.getCustomerContact());
		cc.setContracts(epe);
		cc.setOrders(o);
		return source==null?null : 
			cc;
	}
	/**
	 * 
	 * @param source
	 * @return
	 */
	public OrderModel parse(Order source) {
		List<String> epe = new ArrayList<>();
		if(source.getProduct() != null) {
		for(Product l : source.getProduct()) {
			epe.add(l.getProductId());
		}
		}
		OrderModel om=new OrderModel(source.getOrderNumber(),source.getDeliveryDate(),source.getDeliveryPlace(),
				source.getQuantity(),source.getCustomer().getCustomerId());
		om.setProduct(epe);
		return source == null?null:
			om;
	}
	/**
	 * 
	 * @param source
	 * @return
	 */
	public Order parse (OrderModel source) {
		List<Product> epe = new ArrayList<>();
		int qty=0;
		if(source.getProduct()!=null) {
			for(String l: source.getProduct()) {
				Product p= productRepo.findById(l).get();
				qty++;
				epe.add(p);
			}
		}
		Order o=new Order(source.getOrderNumber(),source.getDeliveryDate(),source.getDeliveryPlace(),
				source.getQuantity(),
				customerRepo.findById(source.getCustomerId()).orElse(null));
		o.setProduct(epe);
		return source == null?null:
			o;
	}
	/**
	 * 
	 * @param source
	 * @return
	 */
	public ProductModel parse(Product source) {
		OrderModel order = new OrderModel();
		order.setQuantity(source.getProductQuantity());
		return source == null?null:
			new ProductModel(source.getProductId(),source.getProductName(),source.getProductDescription(),source.getProductPrice(),
					source.getProductQuantity());
	}
	/**
	 * 
	 * @param source
	 * @return
	 */
	public Product parse(ProductModel source) {
		return source == null?null:
			new Product(source.getProductId(),source.getProductName(),source.getProductDescription(),source.getProductPrice(),
					source.getProductQuantity());
	}
	/**
	 * 
	 * @param source
	 * @return
	 */
	public SchedulerModel parse(Scheduler source) {
		return source == null?null:
			new SchedulerModel(source.getSchedulerId(),source.getSchedulerName(),source.getSchedulerContact(),
					source.getTruckNumber(),
					source.getOrder().getOrderNumber());
	}
	/**
	 * 
	 * @param source
	 * @return
	 */
	public Scheduler parse(SchedulerModel source) {
		return source == null?null:
			new Scheduler(source.getSchedulerId(),source.getSchedulerName(),
					source.getSchedulerContact(),source.getTruckNumber(),
					orderRepo.findById(source.getOrderNumber()).orElse(null));
	}
	/**
	 * 
	 * @param source
	 * @return
	 */
	public LandModel parse(Land source) {
		return source == null ? null:
			new LandModel(source.getLandId(),source.getLandArea(),source.getOwnerName(),
					source.getSurveyNumber());
	}
	/**
	 * 
	 * @param source
	 * @return
	 */
	public Land parse(LandModel source) {
		return source == null ? null:
			new Land(source.getLandId(),source.getLandArea(),source.getOwnerName(),
					source.getSurveyNumber());
	}
	/**
	 * 
	 * @param source
	 * @return
	 */
	public UserModel parse(User source) {
		return source == null?null:
			new UserModel(source.getUserName(),
					source.getUserPassword(),source.getUserType().name());
	}
	/**
	 * 
	 * @param source
	 * @return
	 */
	public User parse(UserModel source) {
		return source == null?null:
			new User(source.getUserName(),
					source.getUserPassword(),
					UserType.valueOf(source.getUserType()));
	}

	
}
