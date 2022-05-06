package com.skilldistillery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.entities.Location;

public interface LocationRepository extends JpaRepository<Location, Integer>{

}
