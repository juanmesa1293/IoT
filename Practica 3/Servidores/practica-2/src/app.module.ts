import { Module } from '@nestjs/common';
import { PersonajeControllerImpl } from './personaje/adapters/controllers/personajeImpl.controller';
import { personajeServiceImpl } from './personaje/domain/services/personajeImpl.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [AuthModule, UsersModule],
  controllers: [PersonajeControllerImpl],
  providers: [{
    provide: 'PersonajeService',
    useClass: personajeServiceImpl
  }],
})
export class AppModule {}
