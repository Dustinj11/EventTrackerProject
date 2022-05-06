package com.skilldistillery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Location;
import com.skilldistillery.services.LocationService;

@RequestMapping("api")
@RestController
public class LocationController {
	
	@Autowired
	LocationService loc;
	@GetMapping("index")
	public List<Location> index() {
		return loc.index();
	}
	
}
