import { Module } from '@nestjs/common';
import { Caracter } from './personaje/adapters/controllers/personaje';
import { AppService } from './personaje/domain/services/personaje.service';

@Module({
  imports: [],
  controllers: [Caracter],
  providers: [AppService],
})
export class AppModule {}
