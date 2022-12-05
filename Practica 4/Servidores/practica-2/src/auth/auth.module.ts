import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtSecret } from './constants';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtStrategy } from './jwt-auth.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  controllers: [AuthController],
   imports: [
      UsersModule,
      PassportModule,
      JwtModule.register({
         secret: jwtSecret,
         signOptions: { expiresIn: '60m' },
      }),
   ],
   providers: [AuthService, LocalStrategy, JwtStrategy, JwtAuthGuard],
   exports: [AuthService],
})
export class AuthModule {}
