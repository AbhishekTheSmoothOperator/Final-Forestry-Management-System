package com.cg.fms.model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class AdminModel{

	private String adminId;
	
	@NotEmpty(message="admin name cannot be empty")
	@NotBlank(message="admin name cannot be omitted")
	private String adminName;
	
	@NotNull(message="password cannot be null")	
	@NotBlank(message="password cannot be blank")
	@Pattern(regexp="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\\\S+$).{8,30}$")
	@JsonProperty(access=Access.WRITE_ONLY)
	private String adminPassword;
	
	public AdminModel() {
		/**
		 * no implementation
		 */
	}

	/**
	 * 
	 * @param adminId
	 * @param adminName
	 * @param adminPassword
	 */
	public AdminModel(String adminId,
			@NotEmpty(message = "admin name cannot be empty") @NotBlank(message = "admin name cannot be omitted") String adminName,
			@NotNull(message="password cannot be null")	
			@NotBlank(message="password cannot be blank")
			@Pattern(regexp="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\\\S+$).{8,30}$") String adminPassword) {
		super();
		this.adminId = adminId;
		this.adminName = adminName;
		this.adminPassword = adminPassword;
	}

	public String getAdminId() {
		return adminId;
	}

	public void setAdminId(String adminId) {
		this.adminId = adminId;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((adminId == null) ? 0 : adminId.hashCode());
		result = prime * result + ((adminName == null) ? 0 : adminName.hashCode());
		result = prime * result + ((adminPassword == null) ? 0 : adminPassword.hashCode());
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
		AdminModel other = (AdminModel) obj;
		if (adminId == null) {
			if (other.adminId != null)
				return false;
		} else if (!adminId.equals(other.adminId))
			return false;
		if (adminName == null) {
			if (other.adminName != null)
				return false;
		} else if (!adminName.equals(other.adminName))
			return false;
		if (adminPassword == null) {
			if (other.adminPassword != null)
				return false;
		} else if (!adminPassword.equals(other.adminPassword))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "AdminModel [adminId=" + adminId + ", adminName=" + adminName + ", adminPassword=" + adminPassword + "]";
	}

	
	
}
