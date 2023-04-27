import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserSignIn } from './auth.types';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('/signin')
    @HttpCode(HttpStatus.OK)
    signIn(@Body() userSignIn: UserSignIn) {
        return this.authService.signIn(userSignIn);
    }

    @Post('/signup')
    @HttpCode(HttpStatus.CREATED)
    signUp(@Body() data: CreateUserDto) {
        return this.authService.signUp(data);
    }
}
