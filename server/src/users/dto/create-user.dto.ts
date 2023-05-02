import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class createUserDto {
  @ApiProperty({example: 'Swetlana123'})
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({example: 'Swetlana'})
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({example: 'snt.repet.swetlana123@gmail.com'})
  @IsNotEmpty()
  readonly email: string;
}
