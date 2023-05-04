import { ApiProperty } from '@nestjs/swagger';

class ShoppingCartItem {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Est inventore.' })
  name: string;

  @ApiProperty({
    example: 'https://loremflickr.com/640/480/technics?random=4298755183',
  })
  image: string;

  @ApiProperty({ example: 1 })
  partId: number;

  @ApiProperty({ example: 1 })
  price: number;

  @ApiProperty({ example: 5 })
  in_stock: number;

  @ApiProperty({ example: 14 })
  count: number;

  @ApiProperty({ example: 1023 })
  total_price: number;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Strategist' })
  boiler_manufacturer: string;

  @ApiProperty({ example: 'Azure' })
  parts_manufacturer: string;

  @ApiProperty({ example: '2023-05-04T19:30:38.560Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-05-04T19:30:38.560Z' })
  createdAt: string;
}

export class GetAllResponse extends ShoppingCartItem {}
export class AddToCartResponse extends ShoppingCartItem {}
export class UpdateCountResponse {
  @ApiProperty({ example: 1 })
  count: number;
}
export class UpdateCountRequest {
  @ApiProperty({ example: 1 })
  count: number;
}

export class TotalPriceResponse {
  @ApiProperty({ example: 1000 })
  total_price: number;
}
export class TotalPriceRequest {
  @ApiProperty({ example: 1000 })
  total_price: number;
}
