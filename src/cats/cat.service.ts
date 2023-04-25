import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schema/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';



@Injectable()
export class CatsService {
    constructor(@InjectModel('cat') private catModel: Model<Cat>) { }

    async create(newCat: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(newCat);
        return createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }
    async findById(id: string): Promise<Cat> {
        return this.catModel.findById(id)
    }
    async editById(id: string, newName: string): Promise<Cat> {
        return this.catModel.findByIdAndUpdate(id, {
            $set: { name: newName }
        })
    }
    async delete(id: string): Promise<string> {
        await this.catModel.findByIdAndDelete(id)
        return 'silindi!'
    }
}
