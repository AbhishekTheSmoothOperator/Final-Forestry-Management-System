package com.cg.fms.model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;


public class ProductModel{
	
	private String productId;

	@NotEmpty(message="productName  cannot be empty")
	@NotBlank(message="productName cannot be omitted")
	private String productName;

	@NotEmpty(message="productDescription  cannot be empty")
	@NotBlank(message="productDescription cannot be omitted")
	private String productDescription;
		
	@NotBlank(message="productDescription cannot be omitted")
	private Double productPrice;
	

	@NotEmpty(message="productQuantity  cannot be empty")
	@NotBlank(message="productQuantity cannot be omitted")
	private @NotEmpty(message = "productQuantity  cannot be empty") @NotBlank(message = "productQuantity cannot be omitted") int productQuantity;

	public ProductModel() {
		/**
		 * no implementation
		 */
	}

	/**
	 * 
	 * @param productId
	 * @param productName
	 * @param productDescription
	 * @param productPrice
	 * @param productQuantity
	 */
	public ProductModel(String productId,
			@NotEmpty(message = "productName  cannot be empty") @NotBlank(message = "productName cannot be omitted") String productName,
			@NotEmpty(message = "productDescription  cannot be empty") @NotBlank(message = "productDescription cannot be omitted") String productDescription,
			@NotBlank(message = "productDescription cannot be omitted") Double productPrice,
			@NotEmpty(message = "productQuantity  cannot be empty") @NotBlank(message = "productQuantity cannot be omitted") int productQuantity) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productDescription = productDescription;
		this.productPrice = productPrice;
		this.productQuantity = productQuantity;
	}

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public Double getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(Double productPrice) {
		this.productPrice = productPrice;
	}

	public int getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((productDescription == null) ? 0 : productDescription.hashCode());
		result = prime * result + ((productId == null) ? 0 : productId.hashCode());
		result = prime * result + ((productName == null) ? 0 : productName.hashCode());
		result = prime * result + ((productPrice == null) ? 0 : productPrice.hashCode());
		result = prime * result + productQuantity;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ProductModel other = (ProductModel) obj;
		if (productDescription == null) {
			if (other.productDescription != null)
				return false;
		} else if (!productDescription.equals(other.productDescription))
			return false;
		if (productId == null) {
			if (other.productId != null)
				return false;
		} else if (!productId.equals(other.productId))
			return false;
		if (productName == null) {
			if (other.productName != null)
				return false;
		} else if (!productName.equals(other.productName))
			return false;
		if (productPrice == null) {
			if (other.productPrice != null)
				return false;
		} else if (!productPrice.equals(other.productPrice))
			return false;
		if (productQuantity != other.productQuantity)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ProductModel [productId=" + productId + ", productName=" + productName + ", productDescription="
				+ productDescription + ", productPrice=" + productPrice + ", productQuantity=" + productQuantity + "]";
	}

}