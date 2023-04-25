import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { connectionString } from 'utils';
import { CatsModule } from './cats/cat.module';



@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(connectionString),
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
