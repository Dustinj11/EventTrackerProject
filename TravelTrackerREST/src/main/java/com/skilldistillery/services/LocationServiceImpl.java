package com.skilldistillery.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.Location;
import com.skilldistillery.repositories.LocationRepository;

@Service
public class LocationServiceImpl implements LocationService{

	@Autowired
	LocationRepository repo;
	
	@Override
	public List<Location> getAllLocations() {
		return repo.findAll();
	}

	@Override
	public Location addLocation(Location location) {
		return repo.saveAndFlush(location);
	}

	@Override
	public void deleteLocation(int id) {
		repo.deleteById(id);
	}

	@Override
	public Location updateLocation(int locationId, Location location) {
		Optional<Location> locationVisited = repo.findById(locationId);
		if(locationVisited != null) {
			Location managedLocation = locationVisited.get();
			managedLocation.setName(location.getName());
			return repo.saveAndFlush(managedLocation);
		}
		return null;
	}

	@Override
	public Optional<Location> findById(Integer id) {
		return repo.findById(id);
	}

	
	
}
