import { Injectable } from "@nestjs/common";
import { PersonajeEntity } from "../entities/personaje.entity";
import { Personaje } from "../models/personaje.model";
import { PersonajeService } from "./personaje.service";
import { InsertResult, MongoRepository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class personajeServiceImpl implements PersonajeService{
    constructor(@InjectRepository(PersonajeEntity) private repository: MongoRepository<PersonajeEntity>,){}

   /* private personajes : Personaje[]=[{
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
      }]*/
      
    public async list(): Promise<PersonajeEntity[]> {
        return await this.repository.find();
    }

    public async create(playerData: PersonajeEntity): Promise<InsertResult> {
        const newPlayer = await this.repository.insert(playerData);
        return newPlayer;
    }

    public async update(id: number,playerData: PersonajeEntity,): Promise<UpdateResult> {
        const updatedPlayer = await this.repository.update(id, playerData);
        return updatedPlayer;
    }

    public async delete(id: number): Promise<boolean> {
        const deleteResult = await this.repository.delete(id);
        return deleteResult.affected > 0;
    }

    public async updateAge(id: number, edad: number): Promise<UpdateResult> {
        const updatedPlayer = await this.repository.update(id, { age: edad });
        return updatedPlayer;
      } 

    public async updateName(id: number, name: string): Promise<UpdateResult> {
        const updatedPlayer = await this.repository.update(id, { nombre:name });
        return updatedPlayer;
    }
}