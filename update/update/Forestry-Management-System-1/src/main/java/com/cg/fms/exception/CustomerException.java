package com.cg.fms.exception;

public class CustomerException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	/**
	 * 
	 * @param errorMessage
	 */
	public CustomerException(String errorMessage) {
		super(errorMessage);
	}
}


