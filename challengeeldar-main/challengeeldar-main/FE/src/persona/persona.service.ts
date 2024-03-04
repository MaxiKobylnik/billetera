import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url: string = "http://localhost:8080/api/personas";

  constructor(private http:HttpClient) { }

    
    listaPersonas():Observable<Persona[]>{
      return this.http.get<Persona[]>(this.url+"/listaPersona");
    }
    
    
    guardarPersona(persona:Persona):Observable<Object>{
      return this.http.post<Persona>(this.url+"/guardarPersona", persona);
    }
    
    actualizarPersona(persona:Persona):Observable<Persona>{
      return this.http.put<Persona>(this.url+"/actualizarPersona", persona);
    }

    borrarPersona(id:number):Observable<Persona>{
      return this.http.delete<Persona>(this.url+'/borrarPersona'+id);
    }
    
  
}