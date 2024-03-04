package com.challenge.com.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.challenge.com.spring.model.Persona;
import com.challenge.com.spring.repository.PersonaRepository;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200/")
public class PersonaController {

	@Autowired
	private PersonaRepository repositorio;
	
	@GetMapping("/listaPersonas")
	public List<Persona> getAll(){
		return repositorio.findAll();
	}
	
	@GetMapping("/modificarPersona/{id}")
	private Persona findOne(Long id) {
		Persona persona = repositorio.findById(id)
				.orElse(null);
		return persona;
	}
	
	@PostMapping("/guardarPersona")
	public Persona create(Persona persona) {
		return repositorio.save(persona);
	}
	
	@PutMapping("/actualizarPersona")
	private Persona update(Long id, Persona persona) {
		Persona actualizarPersona = this.findOne(id);
		actualizarPersona.setDocumento(persona.getDocumento());
		actualizarPersona.setNombre(persona.getNombre());
		return repositorio.save(actualizarPersona);
	}
}
