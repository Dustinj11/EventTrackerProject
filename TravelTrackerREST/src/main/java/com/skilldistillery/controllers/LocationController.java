package com.skilldistillery.controllers;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping("index")
	public Location addLocation(
			@RequestBody Location location,
			HttpServletRequest req,
			HttpServletResponse res
			) {
		try {
			loc.addLocation(location);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(location.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			System.err.println(e);
			res.setStatus(400);
			location = null;
		}
		return location;
	}
	
	
	@GetMapping("index/{id}")
	public Optional<Location> showLocation(
			@PathVariable Integer id,
			HttpServletResponse res) {
		Optional<Location> location = loc.findById(id);
		if (location == null) {
			res.setStatus(404);
		}
		return location;
	}
	
	
	@PutMapping("index/{id}")
	public Location updateLocation(
			@PathVariable Integer id,
			@RequestBody Location location,
			HttpServletResponse res) {
		try {
			location = loc.updateLocation(id, location);
			if (location == null) {
				res.setStatus(400);
			}
		} catch (Exception e) {
			System.err.println(e);
			res.setStatus(400);
			location = null;
		} return location;
	}
	
	
	@DeleteMapping("index/{id}")
	public void deleteLocation(@PathVariable Integer id,
			HttpServletResponse res
			) {
			try {
				loc.deleteLocation(id);
				res.setStatus(204);
			} catch (Exception e) {
				System.err.println(e);
				res.setStatus(400);
			}
	
	}
}
