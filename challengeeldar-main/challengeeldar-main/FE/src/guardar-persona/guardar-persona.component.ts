import { Component } from '@angular/core';
import { PersonaService } from '../persona/persona.service';
import { Persona } from '../persona/persona';

@Component({
  selector: 'app-guardar-persona',
  standalone: true,
  imports: [],
  templateUrl: './guardar-persona.component.html',
  styleUrl: './guardar-persona.component.css'
})
export class GuardarPersonaComponent {

  persona: Persona = new Persona();

  constructor(private personaService:PersonaService) {}

  private guardarPersona(){

    this.personaService.guardarPersona(this.persona).subscribe();

  }

}
