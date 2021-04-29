package com.cg.fms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.fms.entity.User;

@Repository
public interface UserDao extends JpaRepository<User,String>{

}
