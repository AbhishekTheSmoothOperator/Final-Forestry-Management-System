package com.cg.fms.service;

import java.util.List;
import com.cg.fms.exception.OrderException;
import com.cg.fms.exception.ProductException;
import com.cg.fms.model.OrderModel;
import com.cg.fms.model.ProductModel;

public interface IOrderService {

	OrderModel updateOrder(OrderModel orderModel);

	void deleteOrder(String orderNumber);

	List<OrderModel> getAllOrders();

	OrderModel getOrder(String orderNumber) throws OrderException;

	OrderModel addOrder(OrderModel expected) throws OrderException;

	boolean existsById(String orderNumber) throws OrderException;

	OrderModel findById(String orderNumber) throws OrderException;

	boolean addProduct(ProductModel product, String orderNumber) throws ProductException, OrderException;

	List<OrderModel> findAllByCustomerId(String customerId);

}
