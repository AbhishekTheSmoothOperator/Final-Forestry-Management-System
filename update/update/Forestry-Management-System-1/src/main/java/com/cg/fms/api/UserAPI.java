package com.cg.fms.api;

import java.util.List;

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

import com.cg.fms.exception.UserException;
import com.cg.fms.model.ChangePassword;
import com.cg.fms.model.SignUp;
import com.cg.fms.model.UserModel;
import com.cg.fms.service.IUserService;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserAPI {

	@Autowired
	private IUserService userService;
	
	/**
	 * get all users
	 * @return
	 */
	@GetMapping("/getallusers")
	public ResponseEntity<List<UserModel>> getAll() {
		return ResponseEntity.ok(userService.getAll());
	}
	
	/**
	 * get user by name
	 * @param userName
	 * @return
	 * @throws UserException
	 */
	@GetMapping("/getuser/{userName}")
	public ResponseEntity<UserModel> getUser(@PathVariable("userName") String userName) throws UserException{
		return ResponseEntity.ok(userService.getUser(userName));
	}
	
	/**
	 * sign in
	 * @param user
	 * @return
	 * @throws UserException
	 */
	@PostMapping("/signIn")
	public ResponseEntity<UserModel> signIn(@RequestBody UserModel user) throws UserException{
		ResponseEntity<UserModel> response1=null;

		if(userService.existsById(user.getUserName())) {
			if(userService.signIn(user)) {
				response1=new ResponseEntity<>(user,HttpStatus.ACCEPTED);
			}else {
				response1=new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
			}		
		}else {
			response1=new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return response1;
	
	}
	
	/**
	 * add user
	 * @param user
	 * @return
	 * @throws UserException
	 */
	@PostMapping("/adduser")
	public ResponseEntity<UserModel> add(@RequestBody UserModel user) throws UserException{
		user = userService.add(user);
		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}
	
	/**
	 * delete user by name
	 * @param userName
	 * @return
	 * @throws UserException
	 */
	@DeleteMapping("/deleteuser/{userName}")
	public ResponseEntity<Void> deleteUser(@PathVariable("userName") String userName) throws UserException {
		ResponseEntity<Void> response=null;
		UserModel user=userService.getUser(userName);
		if(user==null) {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}else {
			userService.deleteUser(userName);
		}
		return response;
	}
	
	/**
	 * update user
	 * @param userModel
	 * @return
	 * @throws UserException
	 */
	@PutMapping("/updateuser/{userName}")
	public ResponseEntity<UserModel> updateUser(@RequestBody UserModel userModel) throws UserException{
		userModel =userService.updateUser(userModel);
		return new ResponseEntity<>(userModel, HttpStatus.OK);
	}
	
	/**
	 * change password
	 * @param changePassword
	 * @return
	 * @throws UserException
	 */
	@PutMapping("/changePassword")
	public ResponseEntity<String> updateUser(@RequestBody ChangePassword changePassword ) throws UserException {
		ResponseEntity<String> response=null;
		UserModel user=(userService).findById(changePassword.getUserName());
		if(user!=null) {
			if(userService.changePassword(changePassword)) {
				response=new ResponseEntity<>("Password Changed Succesfull!",HttpStatus.ACCEPTED);
			}else {
				response=new ResponseEntity<>("Password not Changed",HttpStatus.NOT_ACCEPTABLE);
			}
		}else {
			response=new ResponseEntity<>(HttpStatus.NO_CONTENT);	
		}
		return response;
	}
	
	/**
	 * sign up
	 * @param signUp
	 * @return
	 * @throws UserException
	 */
	@PostMapping("/signUp")
	public ResponseEntity<UserModel> signUp(@RequestBody UserModel signUp ) throws UserException {
		ResponseEntity<UserModel> response=null;
		if(signUp !=null) {
			signUp=userService.signUp(signUp);
			response=new ResponseEntity<>(signUp,HttpStatus.ACCEPTED);
		}else {
			response=new ResponseEntity<>(HttpStatus.NO_CONTENT);	
		}
		return response;
	}
}
