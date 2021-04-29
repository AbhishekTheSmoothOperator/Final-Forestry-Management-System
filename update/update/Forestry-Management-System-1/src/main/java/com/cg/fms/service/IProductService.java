package com.cg.fms.service;

import java.util.List;
import com.cg.fms.exception.ProductException;
import com.cg.fms.model.ProductModel;

public interface IProductService {

	void deleteProduct(String productId);

	List<ProductModel> getAllProducts();

	ProductModel updateProduct(ProductModel productModel);

//	List<ProductModel> getProductByContractNumber(String contractNumber) throws ProductException;
	
	ProductModel addProduct(ProductModel expected) throws ProductException;

	ProductModel getProductByProductId(String productId) throws ProductException;

	boolean existsById(String productId) throws ProductException;

	ProductModel findById(String productId) throws ProductException;


}
