import { PersonajeEntity } from '../entities/personaje.entity';
import { InsertResult, UpdateResult } from 'typeorm';

export interface PersonajeService {
  
  
  /**
    * Retorna la lista de personajes registrados
    */
   list(): Promise<PersonajeEntity[]>;

   /**
    * Crea un nuevo personaje
    * @param personaje datos del nuevo personaje
    * @return Nuevo personaje
    */
   create(personaje: PersonajeEntity): Promise<InsertResult>;

   /**
    * Actualiza datos del personaje
    * @param id Identificador único del personaje
    * @param personaje datos del personaje
    * @return Personaje modificado
    */
   update(id: number, personaje: PersonajeEntity): Promise<UpdateResult>

   /**
    * Eliminar un personaje
    * @param id Identificador único del personaje
    * @return True si eliminó al personaje
    */
   delete(id: number): Promise<Boolean>

   /**
    * Cambia la edad de un personaje
    * @param id Identificador único del personaje
    * @param age nuevo valor de edad 
    */
   updateAge(id: number, age: number): Promise<UpdateResult>

   /**
    * Cambia el nombre del personaje
    * @param id Identificador unico del personaje
    * @param name nuevo nombre del personaje
    */
    updateName(id: number, name: string): Promise<UpdateResult>

    
}
