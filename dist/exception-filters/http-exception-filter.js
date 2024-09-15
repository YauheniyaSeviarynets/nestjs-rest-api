"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const BaseException_1 = require("../exceptions/BaseException");
const join_objects_util_1 = require("../shared/utils/join-objects.util");
const users_exception_strategies_1 = require("../handlers/users/users-exception.strategies");
const carts_exception_strategies_1 = require("../handlers/carts/carts-exception.strategies");
const base_exception_strategies_1 = require("../shared/http/base-exception.strategies");
let HttpExceptionFilter = class HttpExceptionFilter {
    constructor() {
        this.exceptionsMap = (0, join_objects_util_1.joinObjects)([
            users_exception_strategies_1.USERS_EXCEPTION_STRATEGIES,
            carts_exception_strategies_1.CARTS_EXCEPTION_STRATEGIES,
            base_exception_strategies_1.BASE_EXCEPTION_STRATEGIES,
        ]);
    }
    response(exception, request, response) {
        response.status(exception.status).json({
            statusCode: exception.status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: exception.message,
            stack: exception.stack,
        });
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if (exception.status) {
            return this.response(exception, request, response);
        }
        const getException = this.exceptionsMap[exception.message];
        if (getException) {
            const exception = getException();
            return this.response(exception, request, response);
        }
        return this.response(new BaseException_1.BaseException(exception === null || exception === void 0 ? void 0 : exception.message), request, response);
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)()
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http-exception-filter.js.map