import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { hashSalt, jwtSecret } from 'utils';
import { UsersService } from '../users/users.service';
import { UserSignIn, UserSignInResponse, UserSignUpResponse } from './auth.types';
@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) { }

    async signIn(userSignIn: UserSignIn): Promise<UserSignInResponse> {
        const user = await this.usersService.findByEmail(userSignIn.email);
        if (!user) {
            throw new NotFoundException()
        }
        if (user.password !== userSignIn.password) {
            throw new UnauthorizedException();
        }
        const token = sign({ email: user.email }, jwtSecret)
        return { token, message: 'Signed in successfully!' };
    }
    async signUp(createUserDto: CreateUserDto): Promise<UserSignUpResponse> {
        const password = await hash(createUserDto.password, hashSalt)
        await this.usersService.create({ ...createUserDto, password })
        return {
            message: 'Signed up successfully!'
        }
    }

}
