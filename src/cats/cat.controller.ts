import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CatsService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schema/cat.schema';
import { EditCatDto } from './dto/edit-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createCatDto: CreateCatDto) {
        await this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Cat> {
        return this.catsService.findById(id);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    async editById(@Param('id') id: string, @Body() editCatDto: EditCatDto) {
        return this.catsService.editById(id, editCatDto.name)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.catsService.delete(id);
    }
}
