import { Test, TestingModule } from '@nestjs/testing';
import { Caracter } from './personaje/adapters/controllers/personaje';
import { AppService } from './personaje/domain/services/personaje.service';

describe('AppController', () => {
  let appController: Caracter;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Caracter],
      providers: [AppService],
    }).compile();

    appController = app.get<Caracter>(Caracter);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
