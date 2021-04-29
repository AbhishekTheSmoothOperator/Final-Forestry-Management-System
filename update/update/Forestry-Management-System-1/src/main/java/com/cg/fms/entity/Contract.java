package com.cg.fms.entity;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="contracts")
public class Contract {
	@Id
	@Column(name="contract_number")
	private String contractNumber;
	
	@Column(name="delivery_place")
	private String deliveryPlace;

	@Column(name="delivery_date")
	private String deliveryDate;

	@Column(name="quantity")
	private String quantity;

	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="scheduler_id")
	private Scheduler scheduler;


	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="customer_id")
	private Customer customer;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="order_number")
	private Order order;
	
	public Contract() {
		/**
		 * no implementation
		 */
	}

	/**
	 * parameterized constructor
	 * @param contractNumber
	 * @param deliveryPlace
	 * @param deliveryDate
	 * @param quantity
	 * @param scheduler
	 * @param customer
	 * @param order
	 */
	public Contract(String contractNumber, String deliveryPlace, String deliveryDate, String quantity,
			Scheduler scheduler, Customer customer, Order order) {
		super();
		this.contractNumber = contractNumber;
		this.deliveryPlace = deliveryPlace;
		this.deliveryDate = deliveryDate;
		this.quantity = quantity;
		this.scheduler = scheduler;
		this.customer = customer;
		this.order = order;
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

	public Scheduler getScheduler() {
		return scheduler;
	}

	public void setScheduler(Scheduler scheduler) {
		this.scheduler = scheduler;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((contractNumber == null) ? 0 : contractNumber.hashCode());
		result = prime * result + ((customer == null) ? 0 : customer.hashCode());
		result = prime * result + ((deliveryDate == null) ? 0 : deliveryDate.hashCode());
		result = prime * result + ((deliveryPlace == null) ? 0 : deliveryPlace.hashCode());
		result = prime * result + ((order == null) ? 0 : order.hashCode());
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
		Contract other = (Contract) obj;
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
		if (order == null) {
			if (other.order != null)
				return false;
		} else if (!order.equals(other.order))
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
		return "Contract [contractNumber=" + contractNumber + ", deliveryPlace=" + deliveryPlace + ", deliveryDate="
				+ deliveryDate + ", quantity=" + quantity + ", scheduler=" + scheduler + ", customer=" + customer
				+ ", order=" + order + "]";
	}

	
}