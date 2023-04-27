import { IsAlpha, IsNotEmpty, Max, Min } from 'class-validator';


type CatBreed = 'A' | 'B'


export class CreateCatDto {
    @IsNotEmpty()
    @IsAlpha()
    name: string;

    @IsNotEmpty()
    @Min(1)
    @Max(30)
    age: number;

    @IsNotEmpty()
    // @Type(() => CatBreed)
    breed: CatBreed;
}
