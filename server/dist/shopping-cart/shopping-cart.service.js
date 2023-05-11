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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartService = void 0;
const common_1 = require("@nestjs/common");
const shopping_cart_model_1 = require("./shopping-cart.model");
const sequelize_1 = require("@nestjs/sequelize");
const users_service_1 = require("../users/users.service");
const boiler_parts_service_1 = require("../boiler-parts/boiler-parts.service");
let ShoppingCartService = class ShoppingCartService {
    constructor(shoppingCartModel, usersService, boilerPartsService) {
        this.shoppingCartModel = shoppingCartModel;
        this.usersService = usersService;
        this.boilerPartsService = boilerPartsService;
    }
    async findAll(userId) {
        return this.shoppingCartModel.findAll({ where: { userId } });
    }
    async add(addToCartDto) {
        const cart = new shopping_cart_model_1.ShoppingCart();
        const user = await this.usersService.findOne({
            where: { username: addToCartDto.username },
        });
        const part = await this.boilerPartsService.findOne(addToCartDto.partId);
        cart.userId = user.id;
        cart.partId = part.id;
        cart.boiler_manufacturer = part.boiler_manufacturer;
        cart.parts_manufacturer = part.parts_manufacturer;
        cart.price = part.price;
        cart.in_stock = part.in_stock;
        cart.image = JSON.parse(part.images)[0];
        cart.name = part.name;
        cart.total_price = part.price;
        return cart.save();
    }
    async updateCount(count, partId) {
        await this.shoppingCartModel.update({ count }, { where: { partId } });
        const part = await this.shoppingCartModel.findOne({ where: { partId } });
        return { count: part.count };
    }
    async updateTotalPrice(total_price, partId) {
        await this.shoppingCartModel.update({ total_price }, { where: { partId } });
        const part = await this.shoppingCartModel.findOne({ where: { partId } });
        return { total_price: part.total_price };
    }
    async remove(partId) {
        const part = await this.shoppingCartModel.findOne({ where: { partId } });
        await part.destroy();
    }
    async removeAll(userId) {
        await this.shoppingCartModel.destroy({ where: { userId } });
    }
};
ShoppingCartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(shopping_cart_model_1.ShoppingCart)),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService,
        boiler_parts_service_1.BoilerPartsService])
], ShoppingCartService);
exports.ShoppingCartService = ShoppingCartService;
//# sourceMappingURL=shopping-cart.service.js.map