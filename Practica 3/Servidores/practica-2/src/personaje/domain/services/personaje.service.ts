import { Personaje } from '../models/personaje.model';

export interface PersonajeService {
  
  
  /**
    * Retorna la lista de personajes registrados
    */
   list(): Personaje[];

   /**
    * Crea un nuevo personaje
    * @param personaje datos del nuevo personaje
    * @return Nuevo personaje
    */
   create(personaje: Personaje): Personaje;

   /**
    * Actualiza datos del personaje
    * @param id Identificador único del personaje
    * @param personaje datos del personaje
    * @return Personaje modificado
    */
   update(id: number, personaje: Personaje): Personaje

   /**
    * Eliminar un personaje
    * @param id Identificador único del personaje
    * @return True si eliminó al personaje
    */
   delete(id: number): boolean

   /**
    * Cambia la edad de un personaje
    * @param id Identificador único del personaje
    * @param age nuevo valor de edad 
    */
   updateAge(id: number, age: number): Personaje

   /**
    * Cambia el nombre del personaje
    * @param id Identificador unico del personaje
    * @param name nuevo nombre del personaje
    */
    updateName(id: number, name: string): Personaje

    
}
