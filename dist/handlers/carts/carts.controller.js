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
exports.CartsController = void 0;
const common_1 = require("@nestjs/common");
const carts_service_1 = require("./carts.service");
const create_cart_dto_1 = require("./dto/create-cart.dto");
const update_cart_dto_1 = require("./dto/update-cart.dto");
const swagger_1 = require("@nestjs/swagger");
const api_docs_decorators_1 = require("../../api-docs/api-docs.decorators");
let CartsController = class CartsController {
    constructor(cartsService) {
        this.cartsService = cartsService;
    }
    create(createCartDto) {
        return this.cartsService.create(createCartDto);
    }
    update(id, updateCartDto) {
        return this.cartsService.update(id, updateCartDto);
    }
    findAll() {
        return this.cartsService.findAll();
    }
    findOne(id) {
        return this.cartsService.findOne(id);
    }
    remove(id) {
        return this.cartsService.remove(id);
    }
};
__decorate([
    (0, api_docs_decorators_1.ApiAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cart_dto_1.CreateCartDto]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "create", null);
__decorate([
    (0, api_docs_decorators_1.ApiAuth)(),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cart_dto_1.UpdateCartDto]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "update", null);
__decorate([
    (0, api_docs_decorators_1.ApiAuth)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "findAll", null);
__decorate([
    (0, api_docs_decorators_1.ApiAuth)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "findOne", null);
__decorate([
    (0, api_docs_decorators_1.ApiAuth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "remove", null);
CartsController = __decorate([
    (0, swagger_1.ApiTags)('Carts'),
    (0, common_1.Controller)('carts'),
    __metadata("design:paramtypes", [carts_service_1.CartsService])
], CartsController);
exports.CartsController = CartsController;
//# sourceMappingURL=carts.controller.js.map