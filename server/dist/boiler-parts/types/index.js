"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOneResponse = exports.GetByNameRequest = exports.GetByNameResponse = exports.SearchRequest = exports.SearchResponse = exports.SearchByLetterResponse = exports.GetNewResponse = exports.NewParts = exports.GetBestsellersResponse = exports.Bestsellers = exports.PaginateAndFilterResponse = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
class BoilerParts {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], BoilerParts.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.sentence(2) }),
    __metadata("design:type", String)
], BoilerParts.prototype, "boiler_manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 123456 }),
    __metadata("design:type", Number)
], BoilerParts.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.sentence(2) }),
    __metadata("design:type", String)
], BoilerParts.prototype, "parts_manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.internet.password() }),
    __metadata("design:type", String)
], BoilerParts.prototype, "vendor_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.word() }),
    __metadata("design:type", String)
], BoilerParts.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.sentence() }),
    __metadata("design:type", String)
], BoilerParts.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.sentence() }),
    __metadata("design:type", String)
], BoilerParts.prototype, "compatibility", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.image.city() }),
    __metadata("design:type", String)
], BoilerParts.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5 }),
    __metadata("design:type", Number)
], BoilerParts.prototype, "in_stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], BoilerParts.prototype, "bestseller", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], BoilerParts.prototype, "new", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 123 }),
    __metadata("design:type", Number)
], BoilerParts.prototype, "popularity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-01-31T19:46:45.000Z' }),
    __metadata("design:type", String)
], BoilerParts.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-01-31T19:46:45.000Z' }),
    __metadata("design:type", String)
], BoilerParts.prototype, "updatedAt", void 0);
class PaginateAndFilterResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], PaginateAndFilterResponse.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: BoilerParts, isArray: true }),
    __metadata("design:type", BoilerParts)
], PaginateAndFilterResponse.prototype, "rows", void 0);
exports.PaginateAndFilterResponse = PaginateAndFilterResponse;
class Bestsellers extends BoilerParts {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], Bestsellers.prototype, "bestseller", void 0);
exports.Bestsellers = Bestsellers;
class GetBestsellersResponse extends PaginateAndFilterResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], GetBestsellersResponse.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: BoilerParts, isArray: true }),
    __metadata("design:type", Bestsellers)
], GetBestsellersResponse.prototype, "rows", void 0);
exports.GetBestsellersResponse = GetBestsellersResponse;
class NewParts extends BoilerParts {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], NewParts.prototype, "new", void 0);
exports.NewParts = NewParts;
class GetNewResponse extends PaginateAndFilterResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], GetNewResponse.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: BoilerParts, isArray: true }),
    __metadata("design:type", NewParts)
], GetNewResponse.prototype, "rows", void 0);
exports.GetNewResponse = GetNewResponse;
class SearchByLetterResponse extends BoilerParts {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Corrupti numquam.' }),
    __metadata("design:type", String)
], SearchByLetterResponse.prototype, "name", void 0);
exports.SearchByLetterResponse = SearchByLetterResponse;
class SearchResponse extends PaginateAndFilterResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: SearchByLetterResponse, isArray: true }),
    __metadata("design:type", SearchByLetterResponse)
], SearchResponse.prototype, "rows", void 0);
exports.SearchResponse = SearchResponse;
class SearchRequest {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'r' }),
    __metadata("design:type", String)
], SearchRequest.prototype, "search", void 0);
exports.SearchRequest = SearchRequest;
class GetByNameResponse extends BoilerParts {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Corrupti numquam.' }),
    __metadata("design:type", String)
], GetByNameResponse.prototype, "name", void 0);
exports.GetByNameResponse = GetByNameResponse;
class GetByNameRequest {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Corrupti numquam.' }),
    __metadata("design:type", String)
], GetByNameRequest.prototype, "name", void 0);
exports.GetByNameRequest = GetByNameRequest;
class FindOneResponse extends BoilerParts {
}
exports.FindOneResponse = FindOneResponse;
//# sourceMappingURL=index.js.map