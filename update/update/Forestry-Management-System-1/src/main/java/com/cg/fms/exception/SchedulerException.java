package com.cg.fms.exception;

public class SchedulerException extends RuntimeException{
private static final long serialVersionUID = 1L;
	/**
	 * 
	 * @param errorMessage
	 */
	public SchedulerException(String errorMessage) {
		super(errorMessage);
	}

}
