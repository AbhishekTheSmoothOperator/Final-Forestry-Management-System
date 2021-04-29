package com.cg.fms.model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;



public class ChangePassword {
	
	@NotNull(message="user name cannot be null")	
	@NotBlank(message="user name cannot be blank")
	@Pattern(regexp="^[A-Za-z][A-Za-z0-9]{3,20}$",message="UserName should be Alphanumeric of min length of 4")
	private String userName;
	
	@NotNull(message="password cannot be null")	
	@NotBlank(message="password cannot be blank")
	@Pattern(regexp="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\S+$).{8,30}$",message="Password should contain atleast one Capital, Lower, Numeric and special charecters with min length of 8")
	private String currentPassword;
	
	@NotNull(message="password cannot be null")	
	@NotBlank(message="password cannot be blank")
	@Pattern(regexp="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\S+$).{8,30}$",message="Password should contain atleast one Capital, Lower, Numeric and special charecters with min length of 8")
	private String newPassword;
	
	@NotNull(message="password cannot be null")	
	@NotBlank(message="password cannot be blank")
	@Pattern(regexp="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\S+$).{8,30}$",message="Password should contain atleast one Capital, Lower, Numeric and special charecters with min length of 8")
	private String confirmPassword;
	
	public ChangePassword() {
		/**
		 * no implementation
		 */
	}

	/**
	 * 
	 * @param userName
	 * @param currentPassword
	 * @param newPassword
	 * @param confirmPassword
	 */
	public ChangePassword(
			@NotNull(message = "user name cannot be null") @NotBlank(message = "user name cannot be blank") @Pattern(regexp = "^[A-Za-z][A-Za-z0-9]{3,20}$", message = "UserName should be Alphanumeric of min length of 4") String userName,
			@NotNull(message = "password cannot be null") @NotBlank(message = "password cannot be blank") @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\S+$).{8,30}$", message = "Password should contain atleast one Capital, Lower, Numeric and special charecters with min length of 8") String currentPassword,
			@NotNull(message = "password cannot be null") @NotBlank(message = "password cannot be blank") @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\S+$).{8,30}$", message = "Password should contain atleast one Capital, Lower, Numeric and special charecters with min length of 8") String newPassword,
			@NotNull(message = "password cannot be null") @NotBlank(message = "password cannot be blank") @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\S+$).{8,30}$", message = "Password should contain atleast one Capital, Lower, Numeric and special charecters with min length of 8") String confirmPassword) {
		super();
		this.userName = userName;
		this.currentPassword = currentPassword;
		this.newPassword = newPassword;
		this.confirmPassword = confirmPassword;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getCurrentPassword() {
		return currentPassword;
	}

	public void setCurrentPassword(String currentPassword) {
		this.currentPassword = currentPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((confirmPassword == null) ? 0 : confirmPassword.hashCode());
		result = prime * result + ((currentPassword == null) ? 0 : currentPassword.hashCode());
		result = prime * result + ((newPassword == null) ? 0 : newPassword.hashCode());
		result = prime * result + ((userName == null) ? 0 : userName.hashCode());
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
		ChangePassword other = (ChangePassword) obj;
		if (confirmPassword == null) {
			if (other.confirmPassword != null)
				return false;
		} else if (!confirmPassword.equals(other.confirmPassword))
			return false;
		if (currentPassword == null) {
			if (other.currentPassword != null)
				return false;
		} else if (!currentPassword.equals(other.currentPassword))
			return false;
		if (newPassword == null) {
			if (other.newPassword != null)
				return false;
		} else if (!newPassword.equals(other.newPassword))
			return false;
		if (userName == null) {
			if (other.userName != null)
				return false;
		} else if (!userName.equals(other.userName))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ChangePassword [userName=" + userName + ", currentPassword=" + currentPassword + ", newPassword="
				+ newPassword + ", confirmPassword=" + confirmPassword + "]";
	}
	
	

}
