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
exports.SignupResponse = exports.LoginCheckResponse = exports.LogoutUserResponse = exports.LoginUserResponse = exports.LoginUserRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
class LoginUserRequest {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Swetlana' }),
    __metadata("design:type", String)
], LoginUserRequest.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Swetlana123' }),
    __metadata("design:type", String)
], LoginUserRequest.prototype, "password", void 0);
exports.LoginUserRequest = LoginUserRequest;
class LoginUserResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            user: {
                userId: 1,
                username: 'swetlana',
                email: 'swetlana123',
            },
        },
    }),
    __metadata("design:type", Object)
], LoginUserResponse.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Swetlana123' }),
    __metadata("design:type", String)
], LoginUserResponse.prototype, "password", void 0);
exports.LoginUserResponse = LoginUserResponse;
class LogoutUserResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Session has ended' }),
    __metadata("design:type", String)
], LogoutUserResponse.prototype, "msg", void 0);
exports.LogoutUserResponse = LogoutUserResponse;
class LoginCheckResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], LoginCheckResponse.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Swetlana123' }),
    __metadata("design:type", String)
], LoginCheckResponse.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Swetlana123' }),
    __metadata("design:type", String)
], LoginCheckResponse.prototype, "email", void 0);
exports.LoginCheckResponse = LoginCheckResponse;
class SignupResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], SignupResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Swetlana123' }),
    __metadata("design:type", String)
], SignupResponse.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '$2b$10$SdogPlqQdGscPWCdevgK2.W0noLkpiBJr/wS9i/.GQ1qPZ',
    }),
    __metadata("design:type", String)
], SignupResponse.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Swetlana123' }),
    __metadata("design:type", String)
], SignupResponse.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-05-02T04:26:11.647Z' }),
    __metadata("design:type", String)
], SignupResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-05-02T04:26:11.647Z' }),
    __metadata("design:type", String)
], SignupResponse.prototype, "createdAt", void 0);
exports.SignupResponse = SignupResponse;
//# sourceMappingURL=index.js.map