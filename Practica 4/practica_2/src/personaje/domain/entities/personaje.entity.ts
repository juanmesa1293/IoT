import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class PersonajeEntity {
   @ObjectIdColumn()
   id: string;

   @Column()
   nombre: string;

   @Column()
   ocupacion: string;

   @Column()
   objeto_divino: string;

   @Column()
   age: number;

   @Column()
   territorio: string;

   @Column()
   raza: string;
}