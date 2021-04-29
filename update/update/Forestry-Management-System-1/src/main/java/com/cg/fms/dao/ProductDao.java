package com.cg.fms.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.fms.entity.Product;

public interface ProductDao extends JpaRepository<Product, String>{

}
