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
exports.ShoppingCart = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let ShoppingCart = class ShoppingCart extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ShoppingCart.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 0 }),
    __metadata("design:type", Number)
], ShoppingCart.prototype, "partId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ShoppingCart.prototype, "boiler_manufacturer", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 0 }),
    __metadata("design:type", Number)
], ShoppingCart.prototype, "price", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ShoppingCart.prototype, "parts_manufacturer", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ShoppingCart.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ShoppingCart.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 0 }),
    __metadata("design:type", Number)
], ShoppingCart.prototype, "in_stock", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 0 }),
    __metadata("design:type", Number)
], ShoppingCart.prototype, "count", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 0 }),
    __metadata("design:type", Number)
], ShoppingCart.prototype, "total_price", void 0);
ShoppingCart = __decorate([
    sequelize_typescript_1.Table
], ShoppingCart);
exports.ShoppingCart = ShoppingCart;
//# sourceMappingURL=shopping-cart.model.js.map