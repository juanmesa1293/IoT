import { Injectable } from "@nestjs/common";
import { Personaje } from "../models/personaje.model";
import { PersonajeService } from "./personaje.service";

@Injectable()
export class personajeServiceImpl implements PersonajeService{
    private personajes : Personaje[]=[{
        nombre: "Alice Síntesis Treinta",
        ocupacion: "Caballero de la integridad",
        objeto_divino: "Espada olivo fragante",
        edad: 19,
        territorio: "Imperio Humano",
        raza: "Humana"},
        {
        nombre: "Eldrie Síntesis Treinta y uno",
        ocupacion: "Caballero de la integridad",
        objeto_divino: "Látigo de la Escama Helada",
        edad: 28,
        territorio: "Imperio Humano",
        raza: "humana"},
        {
        nombre: "Deusolbert Síntesis Siete",
        ocupacion: "Caballero de la integridad",
        objeto_divino: "Arco de la Llama Ardiente",
        edad: 40,
        territorio: "Imperio Humano",
        raza: "humana"},
        {
        nombre: "Viksul Ur Shasta",
        ocupacion: "Comandante de los caballeros oscuros",
        objeto_divino: "Oborogasumi",
        edad: 40,
        territorio: "Territorio oscuro",
        raza: "humana"
      }]
      
    list(): Personaje[] {
        return this.personajes;
    }
    create(personaje: Personaje): Personaje {
        this.personajes.push(personaje);
        return personaje;
    }
    update(id: number, personaje: Personaje): Personaje {
        this.personajes[id] = personaje;
        return this.personajes[id];
    }
    delete(id: number): boolean {
        const cantPersonajes = this.personajes.length;
        this.personajes.splice(id,1);
        if(cantPersonajes == this.personajes.length){
            return false;
        }else{
            return true;
        }
        
    }
    updateAge(id: number, age: number): Personaje {
        this.personajes[id].edad = age;
        return this.personajes[id];
    } 
}