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
exports.BoilerPartsController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const boiler_parts_service_1 = require("./boiler-parts.service");
const authenticated_guard_1 = require("../auth/authenticated.guard");
const swagger_1 = require("@nestjs/swagger");
const types_1 = require("./types");
let BoilerPartsController = class BoilerPartsController {
    constructor(boilerPartsService) {
        this.boilerPartsService = boilerPartsService;
    }
    paginateAndFilter(query) {
        return this.boilerPartsService.paginateAndFilter(query);
    }
    getOne(id) {
        return this.boilerPartsService.findOne(id);
    }
    getBestseller() {
        return this.boilerPartsService.bestsellers();
    }
    getNew() {
        return this.boilerPartsService.new();
    }
    search({ search }) {
        return this.boilerPartsService.searchByString(search);
    }
    getByName({ name }) {
        return this.boilerPartsService.findOneByName(name);
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: types_1.PaginateAndFilterResponse }),
    (0, decorators_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Get)(),
    __param(0, (0, decorators_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BoilerPartsController.prototype, "paginateAndFilter", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: types_1.FindOneResponse }),
    (0, decorators_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('find/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BoilerPartsController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: types_1.GetBestsellersResponse }),
    (0, decorators_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('bestsellers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BoilerPartsController.prototype, "getBestseller", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: types_1.GetNewResponse }),
    (0, decorators_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('new'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BoilerPartsController.prototype, "getNew", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: types_1.SearchResponse }),
    (0, swagger_1.ApiBody)({ type: types_1.SearchRequest }),
    (0, decorators_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, decorators_1.Post)('search'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BoilerPartsController.prototype, "search", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: types_1.GetByNameResponse }),
    (0, swagger_1.ApiBody)({ type: types_1.GetByNameRequest }),
    (0, decorators_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, decorators_1.Post)('name'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BoilerPartsController.prototype, "getByName", null);
BoilerPartsController = __decorate([
    (0, common_1.Controller)('boiler-parts'),
    __metadata("design:paramtypes", [boiler_parts_service_1.BoilerPartsService])
], BoilerPartsController);
exports.BoilerPartsController = BoilerPartsController;
//# sourceMappingURL=boiler-parts.controller.js.map