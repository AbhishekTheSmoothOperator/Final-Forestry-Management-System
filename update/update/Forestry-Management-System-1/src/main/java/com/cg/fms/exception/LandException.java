package com.cg.fms.exception;
public class LandException  extends RuntimeException{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * 
	 * @param errorMessage
	 */
	public LandException(String errorMessage) {
		super(errorMessage);
	}

}