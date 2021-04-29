package com.cg.fms.api;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cg.fms.exception.AdminException;
import com.cg.fms.exception.UserException;
import com.cg.fms.model.AdminModel;
import com.cg.fms.model.UserModel;
import com.cg.fms.service.IAdminService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="/admins")
public class AdminAPI {
	
	
	@Autowired
	private IAdminService adminService;
	
	/**
	 * add admin
	 * @param adminModel
	 * @return
	 * @throws AdminException
	 */
	@PostMapping("/addadmin")
	public ResponseEntity<AdminModel> createAdmin(@RequestBody AdminModel adminModel) throws AdminException {
		adminModel = adminService.addAdmin(adminModel);
		return new ResponseEntity<>(adminModel, HttpStatus.CREATED);
	}
	
	/**
	 * signIn
	 * @param adminModel
	 * @return
	 * @throws AdminException
	 */
	@PostMapping("/signIn")
	public ResponseEntity<AdminModel> signIn(@RequestBody AdminModel adminModel) throws AdminException{
		ResponseEntity<AdminModel> response1=null;
		if(adminService.existsByAdminName(adminModel.getAdminName())) {
			if(adminService.signIn(adminModel)) {
				response1=new ResponseEntity<>(adminModel,HttpStatus.ACCEPTED);
			}else {
				response1=new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
			}		
		}else {
			response1=new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return response1;
	
	}
	

	/**
	 * update admin
	 * @param admin
	 * @param adminId
	 * @return
	 * @throws AdminException
	 */
	@PutMapping("/updateadmin/{adminId}")
	public ResponseEntity<AdminModel> updateAdmin(@RequestBody AdminModel admin,@PathVariable("adminId")String adminId) throws AdminException{
		admin = adminService.updateAdmin(admin.getAdminId(),admin);
		return new ResponseEntity<>(admin, HttpStatus.OK);
	}
	
	/**
	 * get all admins
	 * @return
	 * @throws AdminException
	 */
	@GetMapping("/getalladmins")
	public ResponseEntity<List<AdminModel>> getAll() throws AdminException{
		return ResponseEntity.ok(adminService.getAllAdmins());
	}
	
	/**
	 * get admin by name
	 * @param adminName
	 * @return
	 * @throws AdminException
	 */
	@GetMapping("/getAdminByAdminName/{adminName}")
	public ResponseEntity<AdminModel> getAdminByAdminName(@PathVariable("adminName") String adminName) throws AdminException{
		return ResponseEntity.ok(adminService.getAdminByAdminName(adminName));
	}
	
	/**
	 * get admin by id
	 * @param adminId
	 * @return
	 * @throws AdminException
	 */
	@GetMapping("/getAdmin/{adminId}")
	public ResponseEntity<AdminModel> getAdmin(@PathVariable("adminId") String adminId) throws AdminException{
		return ResponseEntity.ok(adminService.getAdmin(adminId));
	}
	
	
	
	/**
	 * delete admin
	 * @param adminId
	 * @return
	 * @throws AdminException
	 */
	@DeleteMapping("/deleteadmin/{adminId}")
	public ResponseEntity<String> deleteAdmin(@PathVariable("adminId") String adminId) throws AdminException {
		ResponseEntity<String> response = null;
		AdminModel admin = adminService.getAdmin(adminId);
		if (admin == null) {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			adminService.deleteAdmin(adminId);
			response = new ResponseEntity<>("Admin is deleted successsfully", HttpStatus.OK);
		}
		return response;
	}
	
	/**
	 * sign up
	 * @param signUp
	 * @return
	 * @throws AdminException
	 */
	@PostMapping("/signUp")
	public ResponseEntity<AdminModel> signUp(@RequestBody AdminModel signUp ) throws AdminException {
		ResponseEntity<AdminModel> response=null;
		if(signUp !=null) {
			signUp=adminService.signUp(signUp);
			response=new ResponseEntity<>(signUp,HttpStatus.ACCEPTED);
		}else {
			response=new ResponseEntity<>(HttpStatus.NO_CONTENT);	
		}
		return response;
	}
	
}