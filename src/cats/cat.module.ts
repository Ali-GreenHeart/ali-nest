import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cat.controller';
import { CatsService } from './cat.service';
import { CatSchema } from './schema/cat.schema';

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'cat', schema: CatSchema }
    ])],
    controllers: [CatsController],
    providers: [CatsService]
})
export class CatsModule { }
