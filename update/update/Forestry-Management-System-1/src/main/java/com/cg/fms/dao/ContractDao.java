package com.cg.fms.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.fms.entity.Contract;
import com.cg.fms.entity.Customer;
@Repository
public interface ContractDao extends JpaRepository<Contract, String> {


}
