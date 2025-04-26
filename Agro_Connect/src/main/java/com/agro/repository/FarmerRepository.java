package com.agro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agro.model.Farmer;

@Repository
public interface FarmerRepository extends JpaRepository<Farmer, Long> {
}
