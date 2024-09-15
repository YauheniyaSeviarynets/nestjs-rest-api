"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const carts_module_1 = require("./handlers/carts/carts.module");
const core_1 = require("@nestjs/core");
const api_key_auth_guard_1 = require("./guards/api-key-auth.guard");
const users_module_1 = require("./handlers/users/users.module");
const PagerMiddleware_1 = require("./middlewares/PagerMiddleware");
const database_module_1 = require("./database/database.module");
const app_config_1 = require("./app.config");
const system_module_1 = require("./handlers/system/system.module");
const { databaseOptions } = new app_config_1.default().build();
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(PagerMiddleware_1.PagerMiddleware)
            .forRoutes({ method: common_1.RequestMethod.GET, path: '*' });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            carts_module_1.CartsModule,
            users_module_1.UsersModule,
            database_module_1.DatabaseModule.forRoot({
                region: databaseOptions.region,
                secretKey: databaseOptions.secretKey,
                accessKey: databaseOptions.accessKey,
                localEndpoint: databaseOptions.localDatabaseEndpoint,
            }),
            system_module_1.SystemModule,
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: api_key_auth_guard_1.ApiKeyAuthGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map