package com.skilldistillery.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.Location;
import com.skilldistillery.repositories.LocationRepository;

@Service
public class LocationServiceImpl implements LocationService{

	@Autowired
	LocationRepository repo;
	
	@Override
	public List<Location> index() {
		return repo.findAll();
	}

	
	
}
