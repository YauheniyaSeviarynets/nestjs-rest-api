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
exports.ApiKeyAuthGuard = exports.SECRET_AUTH_KEY = exports.AUTH_HEADER = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const UnauthorizedException_1 = require("../exceptions/UnauthorizedException");
exports.AUTH_HEADER = 'x-api-key';
exports.SECRET_AUTH_KEY = 'secret';
let ApiKeyAuthGuard = class ApiKeyAuthGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const skipAuth = this.reflector.get('skip-auth', context.getHandler());
        if (skipAuth) {
            return true;
        }
        const req = context.switchToHttp().getRequest();
        const apiKeyHeaderValue = req.headers[exports.AUTH_HEADER];
        if (!apiKeyHeaderValue) {
            throw new UnauthorizedException_1.UnauthorizedException('Api key was not provided');
        }
        if (apiKeyHeaderValue !== exports.SECRET_AUTH_KEY) {
            throw new UnauthorizedException_1.UnauthorizedException("Api key doesn't match");
        }
        return true;
    }
};
ApiKeyAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], ApiKeyAuthGuard);
exports.ApiKeyAuthGuard = ApiKeyAuthGuard;
//# sourceMappingURL=api-key-auth.guard.js.map