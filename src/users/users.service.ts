import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { CreateUserDto } from "./dto/CreateUser.dto";



@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<User>) { }

    async create(newUser: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(newUser);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
    async findById(id: string): Promise<User> {
        return this.userModel.findById(id)
    }
    async findByEmail(email: string): Promise<User> {
        return this.userModel.findOne({ email })
    }
    async editById(id: string, newName: string): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, {
            $set: { name: newName }
        })
    }
    async delete(id: string): Promise<string> {
        await this.userModel.findByIdAndDelete(id)
        return 'silindi!'
    }
}
