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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_model_1 = require("./users.model");
const uuid = require("uuid");
const users_relations_1 = require("./users.relations");
const user_primary_key_utils_1 = require("./utils/user-primary-key.utils");
const users_schema_1 = require("./users.schema");
const is_user_parsed_primary_key_valid_util_1 = require("./utils/is-user-parsed-primary-key-valid.util");
const listing_response_util_1 = require("../../shared/utils/listing-response.util");
const users_exception_strategies_1 = require("./users-exception.strategies");
const base_exception_strategies_1 = require("../../shared/http/base-exception.strategies");
const users_repository_service_1 = require("./users-repository.service");
const General_1 = require("dynamoose/dist/General");
let UsersService = class UsersService {
    constructor(userRepositoryService) {
        this.userRepositoryService = userRepositoryService;
    }
    get model() {
        return this.userRepositoryService.getModel();
    }
    async findOne(id) {
        const key = (0, user_primary_key_utils_1.parseUserPrimaryKey)(id);
        if (!(0, is_user_parsed_primary_key_valid_util_1.getIsUserParsedPrimaryKeyValid)(key)) {
            throw new Error(base_exception_strategies_1.BASE_EXCEPTION_STRATEGIES_KEYS.PROVIDED_ID_INVALID);
        }
        const item = await this.model.get(key);
        if (!item) {
            throw new Error(users_exception_strategies_1.USERS_EXCEPTION_STRATEGIES_KEYS.USER_NOT_FOUND);
        }
        return new users_model_1.UserModel(item).getJSON(users_schema_1.USER_SCHEMA_KEYS);
    }
    async findAll(lastReadItemId, pageSize) {
        const requestBuilder = this.model
            .query('relationKey')
            .eq(users_relations_1.USER_RELATIONS.USER_DETAILS)
            .sort(General_1.SortOrder.descending)
            .limit(pageSize);
        if (lastReadItemId) {
            const item = await this.findOne(lastReadItemId);
            const key = Object.assign(Object.assign({}, (0, user_primary_key_utils_1.parseUserPrimaryKey)(lastReadItemId)), { createdAt: new Date(item.createdAt).getTime() });
            requestBuilder.startAt(key);
        }
        const data = await requestBuilder.exec();
        return new listing_response_util_1.ListingResponse(data, data.count, {
            itemMapper: (item) => new users_model_1.UserModel(item).getJSON(users_schema_1.USER_SCHEMA_KEYS),
            lastReadItemId: data.lastKey
                ? (0, user_primary_key_utils_1.getUserPrimaryKey)(data.lastKey.userId, data.lastKey.relationKey)
                : null,
        }).getJSON();
    }
    async create(createDto) {
        const createdItem = await this.model.create({
            userId: uuid.v4(),
            relationKey: users_relations_1.USER_RELATIONS.USER_DETAILS,
            name: createDto.name,
            email: createDto.email,
        });
        return {
            id: (0, user_primary_key_utils_1.getUserPrimaryKey)(createdItem.userId, createdItem.relationKey),
        };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_service_1.UsersRepositoryService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map