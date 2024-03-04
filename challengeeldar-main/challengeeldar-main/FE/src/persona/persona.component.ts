import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Persona } from './persona';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [CdkDropList, CdkDrag],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {

  /*
  constructor(private personaService:PersonaService) {}

  personas:Persona[];

  ngOnInit(): void {
    this.obtenerPersonas();    
  }

  private obtenerPersonas(){

    this.personaService.getAll().subscribe(
      resp => { this.personas = resp;
      });

  }
  */

  constructor(private router:Router) {}

  personas = ['Juan', 'Carla', 'Gaston'];
  invitados = ['Daniela'];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  borrarPersona(item: string){
    document.getElementById(item)?.remove();
  }

  enviar(){
    this.invitados = [];
  }

  nuevaPersona(){
  this.router.navigate(['/guardar-persona']);  
  }

}
