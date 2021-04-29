package com.cg.fms.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.fms.entity.Land;
import com.cg.fms.exception.LandException;
import com.cg.fms.model.LandModel;
import com.cg.fms.service.ILandService;
@CrossOrigin(origins="*")
@RestController
@RequestMapping(path="/lands")
public class LandAPI {
	
	@Autowired
	private ILandService landService;
	
	/* Adding the land details into the database */
	@PostMapping("/addland")
	public ResponseEntity<LandModel> addLand(@RequestBody LandModel land) throws LandException {
		land = landService.addLand(land);
		return new ResponseEntity<>(land, HttpStatus.CREATED);
	}
	
	/* Update the land details */
	@PutMapping("/updateland/{landId}")
	public ResponseEntity<Land> updateLand(@RequestBody Land land) throws LandException {
		land = landService.updateLand(land);
		return new ResponseEntity<>(land, HttpStatus.OK);
	}
	
	
	/* Display all the land details present in the database */
	@GetMapping("/getalllands")
	public ResponseEntity<List<Land>> getAll() throws LandException{
		return ResponseEntity.ok(landService.getAllLands());
	}
	
	/* Display the particular land details present in the database using LandId*/
	@GetMapping("/getland/{landId}")
	public ResponseEntity<LandModel> getByLand(@PathVariable("landId") String landId) throws LandException{
		return ResponseEntity.ok(landService.getLand(landId));
	}
	
	
	/* Delete the particular land details present in the database using LandId*/
	@RequestMapping("/deleteland/{landId}")
	public ResponseEntity<String> deleteLand(@PathVariable("landId") String landId) throws LandException {
		ResponseEntity<String> response = null;
		LandModel land = landService.getLand(landId);
		if (land == null) {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			landService.removeLandDetails(landId);
			response = new ResponseEntity<>("Land deleted successfully",HttpStatus.OK);
		}
		return response;
	}

}