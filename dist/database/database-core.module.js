"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DatabaseCoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseCoreModule = void 0;
const common_1 = require("@nestjs/common");
const dynamoose = require("dynamoose");
const constants_1 = require("./constants");
const logger_1 = require("./utils/logger");
const initialization = async (options) => {
    if (options.localEndpoint) {
        try {
            dynamoose.aws.ddb.local(options.localEndpoint);
        }
        catch (e) {
            console.error(`An error occurred while local connection: ${e.message || '-'}`);
        }
    }
    else {
        try {
            const dynamoDb = new dynamoose.aws.ddb.DynamoDB({
                accessKeyId: options.accessKey,
                secretAccessKey: options.secretKey,
                region: options.region,
            });
            dynamoose.aws.ddb.set(dynamoDb);
        }
        catch (e) {
            console.error(`An error occurred while remote connection: ${e.message || '-'}`);
        }
    }
    try {
        (await dynamoose.logger()).providers.set(logger_1.logger);
    }
    catch (e) {
        console.error(`An error occurred while logger setting: ${e.message || '-'}`);
    }
};
let DatabaseCoreModule = DatabaseCoreModule_1 = class DatabaseCoreModule {
    static forRoot(options) {
        const initialProvider = {
            provide: constants_1.DatabaseProviderValues.INITIALIZATION,
            useFactory: () => initialization(options),
        };
        return {
            module: DatabaseCoreModule_1,
            providers: [initialProvider],
            exports: [initialProvider],
        };
    }
};
DatabaseCoreModule = DatabaseCoreModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], DatabaseCoreModule);
exports.DatabaseCoreModule = DatabaseCoreModule;
//# sourceMappingURL=database-core.module.js.map