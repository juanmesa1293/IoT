import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

interface Personaje{
  nombre: string,
  ocupacion: string,
  objeto_divino: string,
  edad: number,

}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private personajes : Personaje[] = [{
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
   getHello(): Personaje[] {
     return this.personajes;
   }
 
   @Post()
   crear(@Body() datos: Personaje): Personaje {
     this.personajes.push(datos);
     return datos;
   }
 
   @Put(":id")
   modificar(@Body() datos: Personaje, @Param('id') id: number): Personaje | string {
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
   cambiarEdad(@Param('id') id: number, @Param('edad') edad: number): Personaje | string{
     try{
       this.personajes[id].edad = edad;
       return this.personajes[id];
     }
     catch{
       return `No fue posible modificar al usuario en la posición ${id}`
     }
   }
}
