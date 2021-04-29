package com.cg.fms.service;

import java.util.List;
import java.util.stream.Collectors;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.fms.dao.AdminDao;
import com.cg.fms.entity.Admin;
import com.cg.fms.entity.User;
import com.cg.fms.exception.AdminException;
import com.cg.fms.exception.CustomerException;
import com.cg.fms.exception.UserException;
import com.cg.fms.model.AdminModel;
import com.cg.fms.model.CustomerModel;
import com.cg.fms.model.UserModel;

@Service
public class AdminServiceImpl implements IAdminService {


	@Autowired
	private AdminDao adminRepo;
	
	@Autowired
	private EMParser parser;
	
	public AdminServiceImpl() {
		/**
		 *  default constructor
		 */
	}
	/**
	 * 
	 * @param adminRepo
	 */
	public AdminServiceImpl(AdminDao adminRepo) {
		super();
		this.adminRepo = adminRepo;
		this.parser = new EMParser();
	}
	/**
	 * 
	 * @return
	 */

	public AdminDao getAdminRepo() {
		return adminRepo;
	}
	/**
	 * 
	 * @param adminRepo
	 */

	public void setAdminRepo(AdminDao adminRepo) {
		this.adminRepo = adminRepo;
	}
	/**
	 * 
	 * @return
	 */
	public EMParser getParser() {
		return parser;
	}
	/**
	 * 
	 * @param parser
	 */
	public void setParser(EMParser parser) {
		this.parser = parser;
	}
	/**
	 * get admin by admin name
	 */
	@Override
	public AdminModel getAdminByAdminName(String adminName) throws AdminException {
		if (!adminRepo.existsByAdminName(adminName))
			throw new AdminException("No Admin found for the given Name");
		return parser.parse(adminRepo.findByAdminName(adminName));
	}
	/**
	 * get admin by admin id
	 */
	@Override
	public AdminModel getAdmin(String adminId) throws AdminException {
		if (!adminRepo.existsById(adminId))
			throw new AdminException("No Admin found for the given Id");
		return parser.parse(adminRepo.findById(adminId).orElse(null));
	}

	/**
	 * add admin
	 */
	@Override
	public AdminModel addAdmin(AdminModel adminmodel) throws AdminException {
		if(adminmodel==null) {
			throw new AdminException("Admin should not be null");
		}
		else if (adminmodel != null) {
			if (adminRepo.existsById(adminmodel.getAdminId())) {
				throw new AdminException("Admin with this id already exists");
			}

			adminmodel = parser.parse(adminRepo.save(parser.parse(adminmodel)));
		}

		return adminmodel;
	}
	/**
	 * sign in
	 */

	@Override
	public boolean signIn(AdminModel admin) throws AdminException {
		if(admin==null) {
			throw new AdminException("SignIn details Cannot be Null");
		}
		Admin adminDetails=adminRepo.findByAdminName(admin.getAdminName());
		if(adminDetails==null) {
			throw new AdminException("Admin Details doesnot Exists");
		}
		return adminDetails.getAdminPassword().equals(admin.getAdminPassword());
	}
	/**
	 * signout
	 */
	@Override
	public boolean signOut(AdminModel admin) throws AdminException {
		
		return true;
	}

	/**
	 * delete admin
	 */
	@Override
	public void deleteAdmin(String adminId) {
		adminRepo.deleteById(adminId);
	}

	/**
	 * get all admin
	 */
	@Override
	public List<AdminModel> getAllAdmins() {
		return adminRepo.findAll().stream().map(parser::parse).collect(Collectors.toList());
	}
	/**
	 * update admin
	 */
	@Override
	public AdminModel updateAdmin(String adminId, AdminModel adminModel) throws AdminException {
		if (adminModel != null) {
			if (adminRepo.existsById(adminModel.getAdminId())) {
				adminModel = parser.parse(adminRepo.save(parser.parse(adminModel)));
			}
			
		}
		return adminModel;
	}

	/**
	 * exist by id
	 */
	@Override
	public boolean existsById(String adminId) throws AdminException {
		if(adminId==null) {
			throw new AdminException("Admin Id can not be Null");
		}
		return adminRepo.existsById(adminId);
	}
	
	/**
	 * exist by admin name
	 */
	@Override
	public boolean existsByAdminName(String adminName) throws AdminException{
		if(adminName == null) {
			throw new AdminException("Name cannot be null");
		}
		return adminRepo.existsByAdminName(adminName);
	}
	/*
	 * find by id
	 */

	@Override
	public AdminModel findById(String adminId) throws AdminException {
		if(adminId==null) {
			throw new AdminException("Admin Id should not be null");
		}else if(!this.existsById(adminId)) {
			throw new AdminException("Admin Does not Exists");
		}
		return parser.parse(adminRepo.findById(adminId).orElse(null));
	}
	/**
	 * find by admin name
	 */
	@Override
	public AdminModel findByAdminName(String adminName) throws AdminException {
		if(adminName==null) {
			throw new AdminException("CustomerId can not be null");
		}else if(!adminRepo.existsById(adminName)) {
			throw new AdminException(adminName+" is not Exists");
		}
		return parser.parse(adminRepo.findByAdminName(adminName));
	}

	/**
	 * sign up
	 */
	@Override
	public AdminModel signUp(AdminModel admin) throws AdminException {
		if(admin==null) {
			throw new AdminException("SignUp details cannot be Null");
		}
		List<Admin> admins = adminRepo.findAll();
		for (Admin user : admins) {
		if (user.equals(admin)) {
           throw new AdminException("Admin Already Exisits");
        }
		}
		adminRepo.save(parser.parse(admin));
		return admin;
	}


}