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
exports.CartsService = void 0;
const common_1 = require("@nestjs/common");
const carts_repository_service_1 = require("./carts-repository.service");
const user_primary_key_utils_1 = require("../users/utils/user-primary-key.utils");
const users_service_1 = require("../users/users.service");
const users_model_1 = require("../users/users.model");
const users_schema_1 = require("../users/users.schema");
const is_user_parsed_primary_key_valid_util_1 = require("../users/utils/is-user-parsed-primary-key-valid.util");
const listing_response_util_1 = require("../../shared/utils/listing-response.util");
const database_exception_types_utils_1 = require("../../database/utils/database-exception-types.utils");
const carts_exception_strategies_1 = require("./carts-exception.strategies");
const base_exception_strategies_1 = require("../../shared/http/base-exception.strategies");
let CartsService = class CartsService {
    constructor(cartsRepositoryService, usersService) {
        this.cartsRepositoryService = cartsRepositoryService;
        this.usersService = usersService;
    }
    async create(createCartDto) {
        await this.usersService.findOne(createCartDto.userId);
        let createdItem;
        try {
            createdItem = await this.cartsRepositoryService.create(createCartDto);
        }
        catch (error) {
            if ((0, database_exception_types_utils_1.getIsConditionalCheckFailedException)(error)) {
                throw new Error(carts_exception_strategies_1.CARTS_EXCEPTION_STRATEGIES_KEYS.SUCH_CART_ALREADY_EXIST);
            }
        }
        return {
            id: (0, user_primary_key_utils_1.getUserPrimaryKey)(createdItem.userId, createdItem.relationKey),
        };
    }
    async findAll() {
        const data = await this.cartsRepositoryService.findAll();
        return new listing_response_util_1.ListingResponse(data, data.count, { itemMapper: (item) => new users_model_1.UserModel(item).getJSON(users_schema_1.USER_SCHEMA_KEYS) }).getJSON();
    }
    async findOne(id) {
        if (!(0, is_user_parsed_primary_key_valid_util_1.getIsUserParsedPrimaryKeyValid)((0, user_primary_key_utils_1.parseUserPrimaryKey)(id))) {
            throw new Error(base_exception_strategies_1.BASE_EXCEPTION_STRATEGIES_KEYS.PROVIDED_ID_INVALID);
        }
        const item = await this.cartsRepositoryService.findOne(id);
        if (!item) {
            throw new Error(carts_exception_strategies_1.CARTS_EXCEPTION_STRATEGIES_KEYS.CART_NOT_FOUND);
        }
        return new users_model_1.UserModel(item).getJSON(users_schema_1.USER_SCHEMA_KEYS);
    }
    async update(id, updateCartDto) {
        await this.findOne(id);
        const item = await this.cartsRepositoryService.update(id, updateCartDto);
        return {
            id: new users_model_1.UserModel(item).getJSON(users_schema_1.USER_SCHEMA_KEYS).itemId,
        };
    }
    async remove(id) {
        await this.findOne(id);
        return this.cartsRepositoryService.remove(id);
    }
};
CartsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [carts_repository_service_1.CartsRepositoryService,
        users_service_1.UsersService])
], CartsService);
exports.CartsService = CartsService;
//# sourceMappingURL=carts.service.js.map