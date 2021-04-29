package com.cg.fms.model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class UserModel {
	
	
	@NotNull(message="user name cannot be null")	
	@NotBlank(message="user name cannot be blank")
	private String userName;
	
	@NotNull(message="password cannot be null")	
	@NotBlank(message="password cannot be blank")
	@Pattern(regexp="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\\\S+$).{8,30}$")
	@JsonProperty(access=Access.WRITE_ONLY)
	private String userPassword;
	
	@NotNull(message="user type cannot be null")	
	@NotBlank(message="user type cannot be blank")
	private String userType;

	public UserModel() {
		super();
	}
	
	/**
	 * 
	 * @param userName
	 * @param userPassword
	 * @param userType
	 */
	public UserModel( String userName, String userPassword, String userType) {
		super();
		this.userName = userName;
		this.userPassword = userPassword;
		this.userType = userType;
	}


	
	

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	
//	@JsonIgnore
	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}


	@Override
	public String toString() {
		return "UserModel []";
	}
}
