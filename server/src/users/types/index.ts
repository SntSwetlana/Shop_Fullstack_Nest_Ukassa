import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Swetlana' })
  username: string;

  @ApiProperty({ example: 'Swetlana123' })
  password: string;
}

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

export class LogoutUserResponse {
  @ApiProperty({ example: 'Session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: '1' })
  userId: string;

  @ApiProperty({ example: 'Swetlana123' })
  user: string;

  @ApiProperty({ example: 'Swetlana123' })
  email: string;
}
export class SignupResponse {
  @ApiProperty({ example: '1' })
  id: string;

  @ApiProperty({ example: 'Swetlana123' })
  username: string;

  @ApiProperty({
    example: '$2b$10$SdogPlqQdGscPWCdevgK2.W0noLkpiBJr/wS9i/.GQ1qPZ',
  })
  password: string;

  @ApiProperty({ example: 'Swetlana123' })
  email: string;

  @ApiProperty({ example: '2023-05-02T04:26:11.647Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-05-02T04:26:11.647Z' })
  createdAt: string;
}
