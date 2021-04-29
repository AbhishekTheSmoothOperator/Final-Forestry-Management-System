package com.cg.fms.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.fms.entity.Order;

public interface OrderDao extends JpaRepository<Order,String>{

}
