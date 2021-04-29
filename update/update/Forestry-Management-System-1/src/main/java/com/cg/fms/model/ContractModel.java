package com.cg.fms.model;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;



public class ContractModel {
	
	private String contractNumber;
	
	@NotEmpty(message="deliveryPlace  cannot be empty")
	@NotBlank(message="deliveryPlace cannot be omitted")
	private String deliveryPlace;

	@NotEmpty(message="deliveryDate cannot be empty")
	@NotBlank(message="deliveryDate cannot be omitted")
	private String deliveryDate;

	@NotEmpty(message="quantity cannot be empty")
	@NotBlank(message="quantity cannot be omitted")
	private String quantity;

	private String scheduler;

	@NotEmpty(message="id cannot be empty")
	@NotBlank(message="id cannot be omitted")
	private String customer;
	
	private String Order;
	
	public ContractModel() {
		/**
		 * no implementation
		 */
	}

	/**
	 * 
	 * @param contractNumber
	 * @param deliveryPlace
	 * @param deliveryDate
	 * @param quantity
	 * @param scheduler
	 * @param customer
	 * @param order
	 */
	public ContractModel(String contractNumber,
			@NotEmpty(message = "deliveryPlace  cannot be empty") @NotBlank(message = "deliveryPlace cannot be omitted") String deliveryPlace,
			@NotEmpty(message = "deliveryDate cannot be empty") @NotBlank(message = "deliveryDate cannot be omitted") String deliveryDate,
			@NotEmpty(message = "quantity cannot be empty") @NotBlank(message = "quantity cannot be omitted") String quantity,
			String scheduler,
			@NotEmpty(message = "id cannot be empty") @NotBlank(message = "id cannot be omitted") String customer,
			String order) {
		super();
		this.contractNumber = contractNumber;
		this.deliveryPlace = deliveryPlace;
		this.deliveryDate = deliveryDate;
		this.quantity = quantity;
		this.scheduler = scheduler;
		this.customer = customer;
		Order = order;
	}

	public String getContractNumber() {
		return contractNumber;
	}

	public void setContractNumber(String contractNumber) {
		this.contractNumber = contractNumber;
	}

	public String getDeliveryPlace() {
		return deliveryPlace;
	}

	public void setDeliveryPlace(String deliveryPlace) {
		this.deliveryPlace = deliveryPlace;
	}

	public String getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(String deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getScheduler() {
		return scheduler;
	}

	public void setScheduler(String scheduler) {
		this.scheduler = scheduler;
	}

	public String getCustomer() {
		return customer;
	}

	public void setCustomer(String customer) {
		this.customer = customer;
	}

	public String getOrder() {
		return Order;
	}

	public void setOrder(String order) {
		Order = order;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((Order == null) ? 0 : Order.hashCode());
		result = prime * result + ((contractNumber == null) ? 0 : contractNumber.hashCode());
		result = prime * result + ((customer == null) ? 0 : customer.hashCode());
		result = prime * result + ((deliveryDate == null) ? 0 : deliveryDate.hashCode());
		result = prime * result + ((deliveryPlace == null) ? 0 : deliveryPlace.hashCode());
		result = prime * result + ((quantity == null) ? 0 : quantity.hashCode());
		result = prime * result + ((scheduler == null) ? 0 : scheduler.hashCode());
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
		ContractModel other = (ContractModel) obj;
		if (Order == null) {
			if (other.Order != null)
				return false;
		} else if (!Order.equals(other.Order))
			return false;
		if (contractNumber == null) {
			if (other.contractNumber != null)
				return false;
		} else if (!contractNumber.equals(other.contractNumber))
			return false;
		if (customer == null) {
			if (other.customer != null)
				return false;
		} else if (!customer.equals(other.customer))
			return false;
		if (deliveryDate == null) {
			if (other.deliveryDate != null)
				return false;
		} else if (!deliveryDate.equals(other.deliveryDate))
			return false;
		if (deliveryPlace == null) {
			if (other.deliveryPlace != null)
				return false;
		} else if (!deliveryPlace.equals(other.deliveryPlace))
			return false;
		if (quantity == null) {
			if (other.quantity != null)
				return false;
		} else if (!quantity.equals(other.quantity))
			return false;
		if (scheduler == null) {
			if (other.scheduler != null)
				return false;
		} else if (!scheduler.equals(other.scheduler))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ContractModel [contractNumber=" + contractNumber + ", deliveryPlace=" + deliveryPlace
				+ ", deliveryDate=" + deliveryDate + ", quantity=" + quantity + ", scheduler=" + scheduler
				+ ", customer=" + customer + ", Order=" + Order + "]";
	}
	
	

	
}