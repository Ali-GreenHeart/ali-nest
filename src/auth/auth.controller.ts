import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserSignIn } from './auth.types';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('/signin')
    @HttpCode(HttpStatus.OK)
    signIn(@Body() userSignIn: UserSignIn) {
        return this.authService.signIn(userSignIn);
    }
}
