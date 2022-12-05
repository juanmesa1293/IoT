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
    create(caracter: Personaje): Personaje {
        this.personajes.push(caracter);
        return caracter;
    }
    update(id: number, caracter: Personaje): Personaje {
        this.personajes[id] = caracter;
        return this.personajes[id];
    }
    delete(id: number): boolean {
        const pj = this.personajes.splice(id,1);
        console.log(pj.length);
        if(pj.length == 0){
            return false;
        }else{
            return true;
        }
    }
    updateAge(id: number, age: number): Personaje {
        this.personajes[id].edad = age;
        return this.personajes[id];
    } 

    updateName(id: number, name: string): Personaje {
        this.personajes[id].nombre = name;
        return this.personajes[id];
    } 
}