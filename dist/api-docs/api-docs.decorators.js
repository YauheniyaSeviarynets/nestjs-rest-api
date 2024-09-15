"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiAuth = void 0;
const swagger_1 = require("@nestjs/swagger");
const api_key_auth_guard_1 = require("../guards/api-key-auth.guard");
function ApiAuth() {
    return (0, swagger_1.ApiHeader)({
        name: api_key_auth_guard_1.AUTH_HEADER,
        description: 'Provide auth key',
        required: true,
    });
}
exports.ApiAuth = ApiAuth;
//# sourceMappingURL=api-docs.decorators.js.map