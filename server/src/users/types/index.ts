import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Swetlana' })
  username: string;

  @ApiProperty({ example: 'Swetlana123' })
  password: string;
}

// {
//     "user": {
//         "userId": 2,
//         "username": "swetlana123",
//         "email": "snt.repet.swetlana123@gmail.com"
//     },
//     "msg": "logged in "
// }
export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'swetlana',
        email: 'swetlana123',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    email: string;
  };

  @ApiProperty({ example: 'Swetlana123' })
  password: string;
}
