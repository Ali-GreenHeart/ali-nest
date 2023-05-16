import { IsAlpha, IsEnum, IsNotEmpty, Max, Min } from 'class-validator';

enum CatBreed {
    Garfield = "Garfield",
    B = "B"
}


export class CreateCatDto {
    @IsNotEmpty()
    @IsAlpha()
    name: string;

    @IsNotEmpty()
    @Min(1)
    @Max(30)
    age: number;

    @IsNotEmpty()
    @IsEnum(CatBreed)
    breed: CatBreed;
}
