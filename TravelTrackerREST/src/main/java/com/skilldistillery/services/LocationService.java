package com.skilldistillery.services;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.entities.Location;

public interface LocationService {
List<Location> index();
Location addLocation (Location location);
void deleteLocation (int id);
Location updateLocation(int locationId, Location location);
Optional<Location> findById(Integer id);
}
