import { IsInt, IsNotEmpty, IsNumber, IsString, IsUrl, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Laptop' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: 'Gaming laptop' })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({ example: 15000 })
  @IsNumber()
  @Min(0)
  price!: number;

  @ApiProperty({ example: 'https://example.com/laptop.jpg' })
  @IsUrl()
  imageUrl!: string;

  @ApiProperty({ example: 10 })
  @IsInt()
  @Min(0)
  stock!: number;
}