import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/schema/user.schema';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [UsersModule,
        MongooseModule.forFeature([
            { name: 'user', schema: UserSchema }
        ])
    ],
    controllers: [AuthController],
    providers: [AuthService, UsersService]
})
export class AuthModule {

}
