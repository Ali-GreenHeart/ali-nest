import { IsAlpha, IsNotEmpty } from 'class-validator';


export class EditCatDto {
    @IsNotEmpty()
    @IsAlpha()
    name: string;
}
