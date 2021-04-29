package com.cg.fms.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fms.dao.UserDao;
import com.cg.fms.entity.User;
import com.cg.fms.exception.SchedulerException;
import com.cg.fms.exception.UserException;
import com.cg.fms.model.ChangePassword;
import com.cg.fms.model.SignUp;
import com.cg.fms.model.UserModel;

@Service
public class UserServiceImpl implements IUserService {
	
	@Autowired
	private UserDao userRepo;

	@Autowired
	private EMParser parser;
	
	/**
	 * 
	 * @param userRepo
	 */
	public UserServiceImpl(UserDao userRepo) {
		super();
		this.userRepo = userRepo;
		this.parser = new EMParser();
	}

	
	public UserDao getUserRepo() {
		return userRepo;
	}

	public void setUserRepo(UserDao userRepo) {
		this.userRepo = userRepo;
	}

	public EMParser getParser() {
		return parser;
	}

	public void setParser(EMParser parser) {
		this.parser = parser;
	}
	/**
	 * add user 
	 */
	@Override
	public UserModel add(UserModel user) throws UserException {
		if(user==null) {
			throw new UserException("user should not be null");
		}
		if(user !=null) {
		if(userRepo.existsById(user.getUserName())) {
			throw new UserException("User "+user.getUserName()+" is already Exists");
		}
		if(!user.getUserName().matches("^[A-Za-z][A-Za-z0-9]{3,20}$")) {
			throw new UserException("UserId should be non empty and minimum of length 4");
		}
		if(!user.getUserPassword().matches("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&()])(?=\\S+$).{8,}$")) {
			throw new UserException("Password should contain upper case, Lower case, Special charecter, numbers and length minimum 8");
		}
		else {
			user=parser.parse(userRepo.save(parser.parse(user)));
		}
		}
		return user;
	}


	/**
	 * sign in
	 */
	@Override
	public boolean signIn(UserModel user) throws UserException {
		if(user==null) {
			throw new UserException("SignIn details Cannot be Null");
		}
		User userDetails=userRepo.findById(user.getUserName()).orElse(null);
		if(userDetails==null) {
			throw new UserException("User Details doesnot Exists");
		}
		return userDetails.getUserPassword().equals(user.getUserPassword());
	}
	

	/**
	 * sign out
	 */
	@Override
	public boolean signOut(UserModel user) throws UserException {
		
		return true;
	}

	/**
	 * get all
	 */
	@Override
	public List<UserModel> getAll() {
		return userRepo.findAll().stream().map(parser::parse).collect(Collectors.toList());
	}
	/**
	 * get user
	 */
	@Override
	public UserModel getUser(String userName) throws UserException {
		if (!userRepo.existsById(userName))
			throw new UserException("No User found for the given name");
		return parser.parse(userRepo.findById(userName).get());
	}
	/**
	 * delete user
	 */
	@Override
	public void deleteUser(String userName) {
		if(userName==null) {
			throw new UserException("User Id Cannot be Null");
		}else if(!userRepo.existsById(userName)) {
			throw new UserException("User with user name "+userName+" Does not exists");
		}
		userRepo.deleteById(userName);
	}
	/**
	 * update user
	 */
	@Override
	public UserModel updateUser(UserModel userModel) throws UserException{
		if (userModel != null) {
			if (userRepo.existsById(userModel.getUserName())) {
				throw new UserException("User with this Id doesnot exisit");
			}

			userModel = parser.parse(userRepo.save(parser.parse(userModel)));
		}

		return userModel;
	}
	
	/**
	 * find by id
	 */
	@Override
	public UserModel findById(String userName) throws UserException {
		if(userName==null) {
			throw new UserException("User Name Cannot be Null");
		}else if(!userRepo.existsById(userName)) {
			throw new UserException("User with user Name "+userName+" Does not exists");
		}
		return parser.parse(userRepo.findById(userName).orElse(null));
	}
	/**
	 * change password
	 */
	@Override
	public boolean changePassword(ChangePassword changePassword) throws UserException {
		if(changePassword==null) {
			throw new UserException("Change details should not be null");
		}
		UserModel user=parser.parse(userRepo.findById(changePassword.getUserName()).orElse(null));
		if(user==null) {
			throw new UserException("User details Does not exists");
		}
		boolean isChanged=false;
		if(user.getUserPassword().equals(changePassword.getCurrentPassword()) && changePassword.getNewPassword().equals(changePassword.getConfirmPassword())) {
			user.setUserPassword(changePassword.getConfirmPassword());
			userRepo.save(parser.parse(user));
			isChanged= true;
		}
		return isChanged;
	}
	/**
	 * sign up
	 */
	@Override
	public UserModel signUp(UserModel usermodel) throws UserException {
		if(usermodel==null) {
			throw new UserException("SignUp details cannot be Null");
		}
		List<User> users = userRepo.findAll();
		for (User user : users) {
		if (user.equals(usermodel)) {
           throw new UserException("User Already Exisits");
        }
		}
		userRepo.save(parser.parse(usermodel));
		return usermodel;
	}

	/**
	 * exist by id
	 */

	@Override
	public boolean existsById(String userName) {
			return userRepo.existsById(userName);
		
	}

	/**
	 * find all
	 */
	@Override
	public List<UserModel> findAll() {
		return userRepo.findAll().stream().map(parser::parse).collect(Collectors.toList());
	}
}
