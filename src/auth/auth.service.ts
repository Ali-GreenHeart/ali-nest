import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service'
import { UserSignIn } from './auth.types';
import { sign } from 'jsonwebtoken'
import { jwtSecret } from 'utils';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) { }

    async signIn(userSignIn: UserSignIn) {
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

}
