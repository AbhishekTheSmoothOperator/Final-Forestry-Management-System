package com.cg.fms.model;



import java.util.List;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;


public class CustomerModel {
	
	private String customerId;
	
	@NotEmpty(message="customerName  cannot be empty")
	@NotBlank(message="customerName cannot be omitted")
	private String customerName;
	
	@NotNull(message="password cannot be null")	
	@NotBlank(message="password cannot be blank")
	@Pattern(regexp="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\\\S+$).{8,30}$")
	@JsonProperty(access=Access.WRITE_ONLY)
	private String customerPassword;

	@Email(message="email must be a valid one")
	@NotBlank(message="email cannot be omitted")
	private String customerEmail;
	
	@NotEmpty(message="customerAddress  cannot be empty")
	@NotBlank(message="customerAddress cannot be omitted")
	private String customerAddress;
	
	@NotEmpty(message="customerTown  cannot be empty")
	@NotBlank(message="customerTown cannot be omitted")
	private String customerTown;	
	
	@NotEmpty(message="customerPostalCode  cannot be empty")
	@NotBlank(message="customerPostalCode cannot be omitted")
	private String customerPostalCode;
	
	@Pattern(regexp="[1-9][0-9]{9}", message="contact number is expected to be 10 digits and should not start with 0")
	@NotBlank(message="contact number cannot be omitted")
	private String customerContact;

	
	private List<String> contracts;

	
	private List<String> orders;
	
	public CustomerModel() {
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
	public CustomerModel(String customerId,
			@NotEmpty(message = "customerName  cannot be empty") @NotBlank(message = "customerName cannot be omitted") String customerName,
			@NotNull(message="password cannot be null")	
			@NotBlank(message="password cannot be blank")
			@Pattern(regexp="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\\\S+$).{8,30}$") String customerPassword,
			@Email(message = "email must be a valid one") @NotBlank(message = "email cannot be omitted") String customerEmail,
			@NotEmpty(message = "customerAddress  cannot be empty") @NotBlank(message = "customerAddress cannot be omitted") String customerAddress,
			@NotEmpty(message = "customerTown  cannot be empty") @NotBlank(message = "customerTown cannot be omitted") String customerTown,
			@NotEmpty(message = "customerPostalCode  cannot be empty") @NotBlank(message = "customerPostalCode cannot be omitted") String customerPostalCode,
			@Pattern(regexp = "[1-9][0-9]{9}", message = "contact number is expected to be 10 digits and should not start with 0") @NotBlank(message = "contact number cannot be omitted") String customerContact) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.customerPassword = customerPassword;
		this.customerEmail = customerEmail;
		this.customerAddress = customerAddress;
		this.customerTown = customerTown;
		this.customerPostalCode = customerPostalCode;
		this.customerContact = customerContact;
//		this.contractNumber = contractNumber;
//		this.orderNumber = orderNumber;
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
	
	
	public List<String> getContracts() {
		return contracts;
	}

	public void setContracts(List<String> epe) {
		this.contracts = epe;
	}

	public List<String> getOrders() {
		return orders;
	}

	public void setOrders(List<String> op) {
		this.orders = op;
	}

	@Override
	public String toString() {
		return "CustomerModel [customerId=" + customerId + ", customerName=" + customerName + ", customerPassword="
				+ customerPassword + ", customerEmail=" + customerEmail + ", customerAddress=" + customerAddress
				+ ", customerTown=" + customerTown + ", customerPostalCode=" + customerPostalCode + ", customerContact="
				+ customerContact +  "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((customerAddress == null) ? 0 : customerAddress.hashCode());
		result = prime * result + ((customerContact == null) ? 0 : customerContact.hashCode());
		result = prime * result + ((customerEmail == null) ? 0 : customerEmail.hashCode());
		result = prime * result + ((customerId == null) ? 0 : customerId.hashCode());
		result = prime * result + ((customerName == null) ? 0 : customerName.hashCode());
		result = prime * result + ((customerPassword == null) ? 0 : customerPassword.hashCode());
		result = prime * result + ((customerPostalCode == null) ? 0 : customerPostalCode.hashCode());
		result = prime * result + ((customerTown == null) ? 0 : customerTown.hashCode());
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
		CustomerModel other = (CustomerModel) obj;
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
		return true;
	}

	
	
}