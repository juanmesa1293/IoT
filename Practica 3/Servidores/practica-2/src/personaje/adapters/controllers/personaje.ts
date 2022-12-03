import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Person } from 'src/personaje/domain/models/personaje.model';
import { AppService } from '../../domain/services/personaje.service';


interface Caracter{
  nombre: string,
  ocupacion: string,
  objeto_divino: string,
  edad: number,

}

@Controller()
export class Personaje extends Person{
  constructor(private readonly appService: AppService) {
    super();
  }

  private personajes : Caracter[] = [{
   nombre: "Alice Síntesis Treinta",
   ocupacion: "Caballero de la integridad",
   objeto_divino: "Espada olivo fragante",
   edad: 19},
   {
   nombre: "Eldrie Síntesis Treinta y uno",
   ocupacion: "Caballero de la integridad",
   objeto_divino: "Látigo de la Escama Helada",
   edad: 28},
   {
   nombre: "Deusolbert Síntesis Siete",
   ocupacion: "Caballero de la integridad",
   objeto_divino: "Arco de la Llama Ardiente",
   edad: 40
   }]

   @Get()
   getHello(): Caracter[] {
     return this.personajes;
   }
 
   @Post()
   crear(@Body() datos: Caracter): Caracter {
     this.personajes.push(datos);
     return datos;
   }
 
   @Put(":id")
   modificar(@Body() datos: Caracter, @Param('id') id: number): Caracter | string {
     try{
     this.personajes[id] = datos
     return this.personajes[id];
     }
     catch{
       return `No fue posible modificar al personaje en la id ${id}, asegurese de colocar bien la posicion`
     }
   }
 
   @Delete(":id")
   eliminar(@Param('id') id: number){
     try{
       if(this.personajes.length > id){
         this.personajes.splice(id,1);
       return "Personaje borrado con exito";
       }else{
         return "No existe ningun personaje para borrar con esa id"
       }  
     }
     catch{
       return "Hubo un problema, contactese con el administrador en caso de que siga ocurriendo"
     }
   }
 
   @Patch(":id/edad/:edad")
   cambiarEdad(@Param('id') id: number, @Param('edad') edad: number): Caracter | string{
     try{
       this.personajes[id].edad = edad;
       return this.personajes[id];
     }
     catch{
       return `No fue posible modificar al usuario en la posición ${id}`
     }
   }
}
