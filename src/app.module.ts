import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { connectionString } from 'utils';
import { CatsModule } from './cats/cat.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';



@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(connectionString),
    CatsModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
