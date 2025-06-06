import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRecetaDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  ingredients: string;

  @IsNotEmpty()
  instructions: string;


  @IsNotEmpty()
  regionId?: number; 



  
  @IsNotEmpty()
  @IsNumber()
  categoriaId: number;
}