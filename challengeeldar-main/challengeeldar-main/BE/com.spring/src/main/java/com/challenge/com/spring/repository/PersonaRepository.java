package com.challenge.com.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.challenge.com.spring.model.Persona;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long>{

}

