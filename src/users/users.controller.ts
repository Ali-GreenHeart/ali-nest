import { Body, Controller, Get, Post, Res, Param, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { Response } from 'express'
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';


@Controller('users')
export class UsersController {
    @Get()
    getUsers(@Query('limit') limit: string) {
        return `data with limit of ${limit}`
    }
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) userId: string) {
        console.log(userId)
        return 'got by id'
    }
    @Post('/create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto, @Res() response: Response) {
        console.log(userData)
        response.send('created')
    }

}
