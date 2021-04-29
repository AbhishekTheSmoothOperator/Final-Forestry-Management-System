package com.cg.fms.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.cg.fms.exception.AdminException;
import com.cg.fms.exception.ContractException;
import com.cg.fms.exception.CustomerException;
import com.cg.fms.exception.LandException;
import com.cg.fms.exception.OrderException;
import com.cg.fms.exception.ProductException;
import com.cg.fms.exception.SchedulerException;
@CrossOrigin(origins = "*")
@RestControllerAdvice
public class ExceptionAdvisor {
	
    /**
     * admin exception
     * @param excep
     * @return
     */
	@ExceptionHandler(AdminException.class)
	public ResponseEntity<String> handleAdminExceptionAction(AdminException excep) {
		return new ResponseEntity<>(excep.getMessage(), HttpStatus.BAD_REQUEST);
	}
	
	/**
	 * contract exception
	 * @param excep
	 * @return
	 */
	@ExceptionHandler(ContractException.class)
	public ResponseEntity<String> handleContractExceptionAction(ContractException excep) {
		return new ResponseEntity<>(excep.getMessage(), HttpStatus.BAD_REQUEST);
	}
	
	/**
	 * internal server error
	 * @param excep
	 * @return
	 */
	@ExceptionHandler(Exception.class) 
	public ResponseEntity<String> handleExceptionAction(Exception excep) {
		return new ResponseEntity<>(excep.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	/**
	 * order exception
	 * @param excep
	 * @return
	 */
	@ExceptionHandler(OrderException.class)
	public ResponseEntity<String> handleOrderExceptionAction(OrderException excep) {
		return new ResponseEntity<>(excep.getMessage(), HttpStatus.BAD_REQUEST);
	}
	/**
	 * product exception
	 * @param excep
	 * @return
	 */
	@ExceptionHandler(ProductException.class)
	public ResponseEntity<String> handleProductExceptionAction(ProductException excep) {
		return new ResponseEntity<>(excep.getMessage(), HttpStatus.BAD_REQUEST);
	}
	
	/**
	 * scheduler exception
	 * @param excep
	 * @return
	 */
	@ExceptionHandler(SchedulerException.class)
	public ResponseEntity<String> handleSchedulerExceptionAction(SchedulerException excep) {
		return new ResponseEntity<>(excep.getMessage(), HttpStatus.BAD_REQUEST);
	}
	
	/**
	 * customer exception
	 * @param excep
	 * @return
	 */
	@ExceptionHandler(CustomerException.class)
	public ResponseEntity<String> handleCustomerExceptionAction(CustomerException excep) {
		return new ResponseEntity<>(excep.getMessage(), HttpStatus.BAD_REQUEST);
	}
	
	/**
	 * land exception
	 * @param excep
	 * @return
	 */
	@ExceptionHandler(LandException.class)
	public ResponseEntity<String> handleLandExceptionAction(LandException excep) {
		return new ResponseEntity<>(excep.getMessage(), HttpStatus.BAD_REQUEST);
	}
}