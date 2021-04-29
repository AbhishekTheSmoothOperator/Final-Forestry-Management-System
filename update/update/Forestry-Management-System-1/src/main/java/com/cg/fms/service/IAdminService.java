package com.cg.fms.service;

import java.util.List;

import com.cg.fms.exception.AdminException;
import com.cg.fms.model.AdminModel;

public interface IAdminService {

	public AdminModel getAdmin(String adminId) throws AdminException;

	public AdminModel addAdmin(AdminModel adminmodel)throws AdminException;
	
	public void deleteAdmin(String adminId) throws AdminException;

	public List<AdminModel> getAllAdmins()throws AdminException;

	public AdminModel updateAdmin(String adminId, AdminModel admin) throws AdminException;

	boolean existsById(String adminId) throws AdminException;

	AdminModel findById(String adminId) throws AdminException;

	boolean signIn(AdminModel admin) throws AdminException;

	boolean signOut(AdminModel admin) throws AdminException;

	AdminModel signUp(AdminModel admin) throws AdminException;

	AdminModel getAdminByAdminName(String adminName) throws AdminException;

	public boolean existsByAdminName(String adminName);

	AdminModel findByAdminName(String adminName) throws AdminException;







	

	
}