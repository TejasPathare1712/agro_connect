package com.agro.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agro.model.Farmer;
import com.agro.repository.FarmerRepository;

@Service
public class FarmerService {
    @Autowired
    private FarmerRepository farmerRepository;

    public Farmer saveFarmer(Farmer farmer) {
        return farmerRepository.save(farmer);
    }
    
}
