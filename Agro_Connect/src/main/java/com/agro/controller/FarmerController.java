package com.agro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agro.model.Farmer;
import com.agro.service.FarmerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/farmer")
public class FarmerController {
    @Autowired
    private FarmerService farmerService;

    @PostMapping("/register")
    public ResponseEntity<?> registerFarmer(@RequestBody Farmer farmer) {
        Farmer savedFarmer = farmerService.saveFarmer(farmer);
        return ResponseEntity.ok(savedFarmer);
    }
}
