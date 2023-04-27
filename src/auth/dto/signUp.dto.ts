import { IsAlpha, IsEmail, IsNotEmpty, IsStrongPassword, MinLength, } from 'class-validator';


export class SignUpDto {
    @IsNotEmpty()
    @IsAlpha()
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword({ minNumbers: 1, minLength: 20, minUppercase: 1 })
    password: string;
}


