import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'Ilayda Sahin' })
  @IsNotEmpty()
  fullName!: string;

  @ApiProperty({ example: 'ilayda@example.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: '123456' })
  @MinLength(6)
  password!: string;
}