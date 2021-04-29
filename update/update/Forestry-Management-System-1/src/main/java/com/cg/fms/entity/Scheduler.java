package com.cg.fms.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="schedulers")
public class Scheduler {
	@Id
	@Column(name="scheduler_id")
	private String schedulerId;
	
	@Column(name="scheduler_Name", nullable=false)
	private String schedulerName;
	
	@Column(name="scheduler_contact", nullable=false)
	private String schedulerContact;

	@Column(name="truck_number", nullable=false)
	private String truckNumber;
	
	
	@OneToMany(mappedBy="scheduler",cascade = CascadeType.ALL)
	private Set<Contract> contracts;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="order_number")
	private Order order;
	
	public Scheduler() {
		/**
		 * no implementation
		 */
	}

	/**
	 * 
	 * @param schedulerId
	 * @param schedulerName
	 * @param schedulerContact
	 * @param truckNumber
	 * @param order
	 */
	public Scheduler(String schedulerId, String schedulerName, String schedulerContact, String truckNumber,
			Order order) {
		super();
		this.schedulerId = schedulerId;
		this.schedulerName = schedulerName;
		this.schedulerContact = schedulerContact;
		this.truckNumber = truckNumber;
		this.order = order;
	}

	public String getSchedulerId() {
		return schedulerId;
	}

	public void setSchedulerId(String schedulerId) {
		this.schedulerId = schedulerId;
	}

	public String getSchedulerName() {
		return schedulerName;
	}

	public void setSchedulerName(String schedulerName) {
		this.schedulerName = schedulerName;
	}

	public String getSchedulerContact() {
		return schedulerContact;
	}

	public void setSchedulerContact(String schedulerContact) {
		this.schedulerContact = schedulerContact;
	}

	public String getTruckNumber() {
		return truckNumber;
	}

	public void setTruckNumber(String truckNumber) {
		this.truckNumber = truckNumber;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	

	
}