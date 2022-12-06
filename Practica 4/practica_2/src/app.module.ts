import { Module } from '@nestjs/common';
import { PersonajeControllerImpl } from './personaje/adapters/controllers/personajeImpl.controller';
import { personajeServiceImpl } from './personaje/domain/services/personajeImpl.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonajeEntity } from './personaje/domain/entities/personaje.entity';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
       type: 'mongodb',
       url: 'mongodb+srv://killey:juancarlos1293@cluster0.qilavth.mongodb.net/?retryWrites=true&w=majority',
       useNewUrlParser: true,
       useUnifiedTopology: true,
       synchronize: true, // Solo para desarrollo
       logging: true,
       autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([PersonajeEntity])
 ],
 controllers: [PersonajeControllerImpl],
 providers: [
    {
       provide: 'PersonajeService',
       useClass: personajeServiceImpl,
    },
 ],
 })
export class AppModule {}
