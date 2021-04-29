package com.cg.fms.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="/")
public class DefaultController {
	/**
	 * first page
	 * @return
	 */
	@GetMapping
	public ResponseEntity<String> defaultAction() {
		return new ResponseEntity<>("Welcome to Forestry Management System", HttpStatus.OK);
	}
}