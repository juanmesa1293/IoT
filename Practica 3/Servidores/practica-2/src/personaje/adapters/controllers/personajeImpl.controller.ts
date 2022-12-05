import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Personaje } from "src/personaje/domain/models/personaje.model";
import { PersonajeService } from "src/personaje/domain/services/personaje.service";
import { PersonajeController } from "./personaje.controller";

const errReturn = (e: Error, message: string) => {
    return {
      message: message,
      error: e
    }
  }

@Controller()
export class PersonajeControllerImpl implements PersonajeController{
    constructor(@Inject('PersonajeService')private readonly personajeService: PersonajeService){}


    @Get()
    listPersonajes() {
        try{
            return this.personajeService.list();
        }catch(e){
            return errReturn(e,"Error al mostrar los personajes");
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() datos: Personaje) {
        try{
            return this.personajeService.create(datos);
        }catch(e){
            return errReturn(e,"Error al crear al personaje");
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put(":id")
    update(@Body() datos: Personaje, @Param('id')id: number) {
        try{
            return this.personajeService.update(id,datos);
        }catch(e){
            return errReturn(e,"Error al modificar al personaje");
        }
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    delete(@Param('id')id: number) {
        try{
            return this.personajeService.delete(id);
          }catch(e){
            return errReturn(e,"Error al eliminar al personaje");
          }
    }

    @UseGuards(JwtAuthGuard)
    @Patch(":id/edad/:edad")
    updateAge(@Param('id')id: number, @Param('id')edad: number) {
        try{
            return this.personajeService.updateAge(id,edad);
          }catch(e){
            return errReturn(e,"Error al modificar la edad del personaje");
          }
    }

    @UseGuards(JwtAuthGuard)
    @Patch(":id/name/:name")
    updateName(@Param('id')id: number, @Param('name')name: string) {
        try{
            return this.personajeService.updateName(id,name);
          }catch(e){
            return errReturn(e,"Error al modificar el nombre del personaje");
          }
    }
    
}