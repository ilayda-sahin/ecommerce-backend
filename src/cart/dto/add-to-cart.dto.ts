import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Min } from 'class-validator';

export class AddToCartDto {
  @ApiProperty({
    example: 'product-uuid-here',
  })
  @IsString()
  productId!: string;

  @ApiProperty({
    example: 2,
  })
  @IsInt()
  @Min(1)
  quantity!: number;
}