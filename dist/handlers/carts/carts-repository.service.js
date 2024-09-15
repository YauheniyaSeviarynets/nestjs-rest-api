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
exports.CartsRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const users_relations_1 = require("../users/users.relations");
const user_primary_key_utils_1 = require("../users/utils/user-primary-key.utils");
const users_repository_service_1 = require("../users/users-repository.service");
let CartsRepositoryService = class CartsRepositoryService {
    constructor(userRepositoryService) {
        this.userRepositoryService = userRepositoryService;
    }
    get model() {
        return this.userRepositoryService.getModel();
    }
    async create(createCartDto) {
        const key = (0, user_primary_key_utils_1.parseUserPrimaryKey)(createCartDto.userId);
        return this.model.create({
            userId: key.userId,
            relationKey: `${users_relations_1.USER_RELATIONS.CART}${createCartDto.currency}`,
            currency: createCartDto.currency,
            balance: createCartDto.balance,
        });
    }
    async findAll() {
        return await this.model
            .scan()
            .filter('relationKey')
            .contains(users_relations_1.USER_RELATIONS.CART)
            .exec();
    }
    async findOne(id) {
        return this.model.get((0, user_primary_key_utils_1.parseUserPrimaryKey)(id));
    }
    async update(id, updateCartDto) {
        const key = (0, user_primary_key_utils_1.parseUserPrimaryKey)(id);
        return this.model.update(key, updateCartDto);
    }
    async remove(id) {
        const key = (0, user_primary_key_utils_1.parseUserPrimaryKey)(id);
        return this.model.delete(key);
    }
};
CartsRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_service_1.UsersRepositoryService])
], CartsRepositoryService);
exports.CartsRepositoryService = CartsRepositoryService;
//# sourceMappingURL=carts-repository.service.js.map