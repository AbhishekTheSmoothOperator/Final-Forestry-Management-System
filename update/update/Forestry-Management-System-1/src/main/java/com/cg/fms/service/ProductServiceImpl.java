package com.cg.fms.service;


import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fms.dao.ProductDao;
import com.cg.fms.exception.OrderException;
import com.cg.fms.exception.ProductException;
import com.cg.fms.model.ProductModel;

@Service
public class ProductServiceImpl implements IProductService{

	@Autowired
	private ProductDao productRepo;
	
	@Autowired
	private EMParser parser;
	
	public ProductServiceImpl() {
		/**
		 * default constructor
		 */
	}
	/**
	 * 
	 * @param productRepo
	 */
	public ProductServiceImpl(ProductDao productRepo) {
		super();
		this.productRepo = productRepo;
		this.parser =new EMParser();
	}
	
	

	public ProductDao getProductRepo() {
		return productRepo;
	}



	public void setProductRepo(ProductDao orderRepo) {
		this.productRepo = orderRepo;
	}



	public EMParser getParser() {
		return parser;
	}



	public void setParser(EMParser parser) {
		this.parser = parser;
	}


	/**
	 * get product by product id
	 */
	@Override
	public ProductModel getProductByProductId(String productId) throws ProductException {
		if (!productRepo.existsById(productId))
			throw new ProductException("No product found for the given Id");
		return parser.parse(productRepo.findById(productId).get());
	}

	/**
	 * add product
	 */
	@Override
	public ProductModel addProduct(ProductModel product) throws ProductException{
		if(product==null) {
			throw new ProductException("product should not be null");
		}
		else if ( product!= null) {
			if (productRepo.existsById(product.getProductId())) {
				throw new ProductException("Product with this id already exists");
			}

			product = parser.parse(productRepo.save(parser.parse(product)));
		}

		return product;
	}
	/**
	 * update product
	 */
	@Override
	public ProductModel updateProduct(ProductModel productModel) {
		if (productModel != null) {
			if (productRepo.existsById(productModel.getProductId())) {
				productModel = parser.parse(productRepo.save(parser.parse(productModel)));
			}
			
		}
		return productModel;
	}

	/**
	 * delete product
	 */
	@Override
	public void deleteProduct(String productId) {
		if(productId==null) {
			throw new ProductException("Product Id should not be null");
		}else if (!productRepo.existsById(productId)) {
			throw new ProductException("Product Id"+productId+" does not exists");
		}else {
			productRepo.deleteById(productId);
		}
	}
	/**
	 * get all product
	 */
	@Override
	public List<ProductModel> getAllProducts() {
		return productRepo.findAll().stream().map(parser::parse).collect(Collectors.toList());
	}

	/**
	 * exist by id
	 */
	@Override
	public boolean existsById(String productId) throws ProductException {
		if(productId==null) {
			throw new ProductException("Product Id can not be Null");
		}
		return productRepo.existsById(productId);
	}

	/**
	 * find by id
	 */
	@Override
	public ProductModel findById(String productId) throws ProductException {
		if(productId==null) {
			throw new ProductException("Product Id should not be null");
		}else if(!this.existsById(productId)) {
			throw new ProductException("Product Does not Exists");
		}
		return parser.parse(productRepo.findById(productId).orElse(null));
	}


	
	

}
