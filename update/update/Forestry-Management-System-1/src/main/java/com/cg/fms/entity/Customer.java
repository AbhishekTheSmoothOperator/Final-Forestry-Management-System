package com.cg.fms.entity;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name="customers")
public class Customer {
	@Id
	@Column(name="customer_id")
	private String customerId;
	
	@Column(name="customer_name")
	private String customerName;

	@Column(name="customer_password")
	private String customerPassword;

	@Column(name="customer_email")
	private String customerEmail;
	
	@Column(name="customer_address")
	private String customerAddress;

	@Column(name="customer_town")
	private String customerTown;	

	@Column(name="customer_postal_code")
	private String customerPostalCode;
	
	@Column(name="customer_contact")
	private String customerContact;

	 @OneToMany(mappedBy = "customer",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	 @Fetch(FetchMode.SELECT)
	    private List<Contract> contracts=new ArrayList<Contract>();

	@OneToMany(mappedBy="customer1",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@Fetch(FetchMode.SELECT)
	private List<Order> orders;
	
	public Customer() {
		/**
		 * no implementation
		 */
	}

	/**
	 *
	 * @param customerId
	 * @param customerName
	 * @param customerPassword
	 * @param customerEmail
	 * @param customerAddress
	 * @param customerTown
	 * @param customerPostalCode
	 * @param customerContact
	 */
	public Customer(String customerId, String customerName, String customerPassword, String customerEmail,
			String customerAddress, String customerTown, String customerPostalCode,String customerContact) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.customerPassword = customerPassword;
		this.customerEmail = customerEmail;
		this.customerAddress = customerAddress;
		this.customerTown = customerTown;
		this.customerPostalCode = customerPostalCode;
		this.customerContact=customerContact;
	}
	
	 public void addContranct(Contract contract) {
	        contracts.add(contract);
	        contract.setCustomer(this);
	    }

	    public void removeContranct(Contract contract) {
	        contracts.remove(contract);
	        contract.setCustomer(null);
	    }

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerPassword() {
		return customerPassword;
	}

	public void setCustomerPassword(String customerPassword) {
		this.customerPassword = customerPassword;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public String getCustomerAddress() {
		return customerAddress;
	}

	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}

	public String getCustomerTown() {
		return customerTown;
	}

	public void setCustomerTown(String customerTown) {
		this.customerTown = customerTown;
	}

	public String getCustomerPostalCode() {
		return customerPostalCode;
	}

	public void setCustomerPostalCode(String customerPostalCode) {
		this.customerPostalCode = customerPostalCode;
	}
	
	public String getCustomerContact() {
		return customerContact;
	}

	public void setCustomerContact(String customerContact) {
		this.customerContact = customerContact;
	}
	
	

	public List<Contract> getContracts() {
		return contracts;
	}

	public void setContracts(List<Contract> contracts) {
		this.contracts = contracts;
	}

	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((contracts == null) ? 0 : contracts.hashCode());
		result = prime * result + ((customerAddress == null) ? 0 : customerAddress.hashCode());
		result = prime * result + ((customerContact == null) ? 0 : customerContact.hashCode());
		result = prime * result + ((customerEmail == null) ? 0 : customerEmail.hashCode());
		result = prime * result + ((customerId == null) ? 0 : customerId.hashCode());
		result = prime * result + ((customerName == null) ? 0 : customerName.hashCode());
		result = prime * result + ((customerPassword == null) ? 0 : customerPassword.hashCode());
		result = prime * result + ((customerPostalCode == null) ? 0 : customerPostalCode.hashCode());
		result = prime * result + ((customerTown == null) ? 0 : customerTown.hashCode());
		result = prime * result + ((orders == null) ? 0 : orders.hashCode());
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
		Customer other = (Customer) obj;
		if (contracts == null) {
			if (other.contracts != null)
				return false;
		} else if (!contracts.equals(other.contracts))
			return false;
		if (customerAddress == null) {
			if (other.customerAddress != null)
				return false;
		} else if (!customerAddress.equals(other.customerAddress))
			return false;
		if (customerContact == null) {
			if (other.customerContact != null)
				return false;
		} else if (!customerContact.equals(other.customerContact))
			return false;
		if (customerEmail == null) {
			if (other.customerEmail != null)
				return false;
		} else if (!customerEmail.equals(other.customerEmail))
			return false;
		if (customerId == null) {
			if (other.customerId != null)
				return false;
		} else if (!customerId.equals(other.customerId))
			return false;
		if (customerName == null) {
			if (other.customerName != null)
				return false;
		} else if (!customerName.equals(other.customerName))
			return false;
		if (customerPassword == null) {
			if (other.customerPassword != null)
				return false;
		} else if (!customerPassword.equals(other.customerPassword))
			return false;
		if (customerPostalCode == null) {
			if (other.customerPostalCode != null)
				return false;
		} else if (!customerPostalCode.equals(other.customerPostalCode))
			return false;
		if (customerTown == null) {
			if (other.customerTown != null)
				return false;
		} else if (!customerTown.equals(other.customerTown))
			return false;
		if (orders == null) {
			if (other.orders != null)
				return false;
		} else if (!orders.equals(other.orders))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Customer [customerId=" + customerId + ", customerName=" + customerName + ", customerPassword="
				+ customerPassword + ", customerEmail=" + customerEmail + ", customerAddress=" + customerAddress
				+ ", customerTown=" + customerTown + ", customerPostalCode=" + customerPostalCode + ", customerContact="
				+ customerContact + ", contracts=" + contracts + ", orders=" + orders + "]";
	}

	

	
	
}