// {
//     "description": "Dolore ad illo officiis consequuntur magnam nulla eveniet quasi ipsam.",
//     "images": "[\"https://loremflickr.com/640/480/technics?random=1279333085\",\"https://loremflickr.com/640/480/technics?random=2433240068\",\"https://loremflickr.com/640/480/technics?random=8123644293\",\"https://loremflickr.com/640/480/technics?random=4878930856\",\"https://loremflickr.com/640/480/technics?random=4676415882\",\"https://loremflickr.com/640/480/technics?random=7832025558\",\"https://loremflickr.com/640/480/technics?random=2947379941\"]",
//     "in_stock": 3,
//     "bestseller": true,
//     "new": true,
//     "popularity": 444,
//     "compatibility": "Magni sunt quam rem quibusdam debitis ab.",
//     "createdAt": "2023-05-03T10:11:08.000Z",
//     "updatedAt": "2023-05-03T10:11:08.000Z"

import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';

//}
class BoilerParts {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  boiler_manufacturer: string;

  @ApiProperty({ example: 123456 })
  price: number;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  parts_manufacturer: string;

  @ApiProperty({ example: faker.internet.password() })
  vendor_code: string;

  @ApiProperty({ example: faker.lorem.word() })
  name: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  description: string;
  @ApiProperty({ example: faker.lorem.sentence() })
  compatibility: string;

  @ApiProperty({ example: faker.image.city() })
  images: string;

  @ApiProperty({ example: 5 })
  in_stock: number;

  @ApiProperty({ example: true })
  bestseller: boolean;

  @ApiProperty({ example: false })
  new: boolean;

  @ApiProperty({ example: 123 })
  popularity: number;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  updatedAt: string;
}
export class PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: BoilerParts;
}

export class Bestsellers extends BoilerParts {
  @ApiProperty({ example: true })
  bestseller: boolean;
}

export class GetBestsellersResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: Bestsellers;
}

export class NewParts extends BoilerParts {
  @ApiProperty({ example: true })
  new: boolean;
}

export class GetNewResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: NewParts;
}

export class SearchByLetterResponse extends BoilerParts {
  @ApiProperty({ example: 'Corrupti numquam.' })
  name: string;
}
export class SearchResponse extends PaginateAndFilterResponse {
  @ApiProperty({ type: SearchByLetterResponse, isArray: true })
  rows: SearchByLetterResponse;
}

export class SearchRequest {
  @ApiProperty({ example: 'r' })
  search: string;
}

export class GetByNameResponse extends BoilerParts {
  @ApiProperty({ example: 'Corrupti numquam.' })
  name: string;
}
export class GetByNameRequest { 
  @ApiProperty({ example: 'Corrupti numquam.' })
  name: string;
}

export class FindOneResponse extends BoilerParts {}

export interface IBoilerPartQuery {
  limit: string;
  offset: string;
}
