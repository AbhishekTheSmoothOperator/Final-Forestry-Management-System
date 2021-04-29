package com.cg.fms.service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fms.dao.CustomerDao;
import com.cg.fms.dao.OrderDao;
import com.cg.fms.entity.Contract;
import com.cg.fms.entity.Customer;
import com.cg.fms.entity.Order;
import com.cg.fms.exception.OrderException;
import com.cg.fms.exception.ProductException;
import com.cg.fms.model.ContractModel;
import com.cg.fms.model.OrderModel;
import com.cg.fms.model.ProductModel;

@Service
public class OrderServiceImpl implements IOrderService{
	
	@Autowired
	private OrderDao orderRepo;
	
	@Autowired
	private CustomerDao customerRepo;
	
	@Autowired
	private EMParser parser;
	
	public OrderServiceImpl() {
		/**
		 *  default constructor
		 */
	}
	/**
	 * 
	 * @param orderRepo
	 */
	public OrderServiceImpl(OrderDao orderRepo) {
		super();
		this.orderRepo = orderRepo;
		this.parser =new EMParser();
	}
	
	

	public OrderDao getOrderRepo() {
		return orderRepo;
	}



	public void setOrderRepo(OrderDao orderRepo) {
		this.orderRepo = orderRepo;
	}



	public EMParser getParser() {
		return parser;
	}



	public void setParser(EMParser parser) {
		this.parser = parser;
	}

	/**
	 * get order
	 */
	@Override
	public OrderModel getOrder(String orderNumber) throws OrderException {
		if (!orderRepo.existsById(orderNumber))
			throw new OrderException("No order found for the given Id");
		return parser.parse(orderRepo.findById(orderNumber).get());
	}

	/**
	 * add order
	 */
	@Override
	public OrderModel addOrder(OrderModel order) throws OrderException{
		if(order==null) {
			throw new OrderException("order should not be null");
		}
		else if ( order!= null) {
			if (orderRepo.existsById(order.getOrderNumber())) {
				throw new OrderException("Order with this id already exists");
			}

			order = parser.parse(orderRepo.save(parser.parse(order)));
			
		}
		

		return order;
	}
	/**
	 * update order
	 */
	@Override
	public OrderModel updateOrder(OrderModel orderModel) {
		if (orderModel != null) {
			if (orderRepo.existsById(orderModel.getOrderNumber())) {
				orderModel = parser.parse(orderRepo.save(parser.parse(orderModel)));
			}
			
		}
		return orderModel;
	}

	/**
	 * delete order
	 */
	@Override
	public void deleteOrder(String orderNumber) {
		if(orderNumber==null) {
			throw new OrderException("Order number should not be null");
		}else if (!orderRepo.existsById(orderNumber)) {
			throw new OrderException("Order Number"+orderNumber+" does not exists");
		}else {
			orderRepo.deleteById(orderNumber);
		}
	}
	/**
	 * get all order
	 */
	@Override
	public List<OrderModel> getAllOrders() {
		return orderRepo.findAll().stream().map(parser::parse).collect(Collectors.toList());
	}
	/**
	 * find by id
	 */
	@Override
	public OrderModel findById(String orderNumber) throws OrderException {
		if(orderNumber==null) {
			throw new OrderException("Order number should not be null");
		}else if (!orderRepo.existsById(orderNumber)) {
			throw new OrderException("Order Number"+orderNumber+" does not exists");
		}else {
			return parser.parse(orderRepo.findById(orderNumber).orElse(null));
		}
	}
	/**
	 * exist by id
	 */
	@Override
	public boolean existsById(String orderNumber) throws OrderException {
		if(orderNumber==null) {
			throw new OrderException("Order Number should not be null");
		}
		return orderRepo.existsById(orderNumber);
	}
	/**
	 * add product
	 */
	@Override
	@Transactional
	public boolean addProduct(ProductModel product,String orderNumber) throws ProductException, OrderException{
		Order order=orderRepo.findById(orderNumber).orElse(null);
		boolean isAdded=false;
		if(product==null) {
			throw new ProductException("Product can not be null");
		}
		if(orderNumber==null) {
			throw new OrderException("Order Number cannot be  null");
		}else if(order == null){
			throw new OrderException("Order Cannot be null");
		}else {
			order.getProduct().add(parser.parse(product));
			order.setProduct(order.getProduct());
			orderRepo.save(order);
			isAdded=true;
		}
		return isAdded;
	}
	/**
	 * find all by customer id
	 */
	@Override
	public List<OrderModel> findAllByCustomerId(String customerId){
		Optional<Customer> customerOptional = customerRepo.findById(customerId);	
		List<Order> orders = customerOptional.get().getOrders();	
		return orders.stream().map(parser::parse).collect(Collectors.toList());
	}
}
