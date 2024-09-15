"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedException = void 0;
const BaseException_1 = require("./BaseException");
class UnauthorizedException extends BaseException_1.BaseException {
    constructor(...args) {
        super(...args);
        this.status = 401;
    }
}
exports.UnauthorizedException = UnauthorizedException;
//# sourceMappingURL=UnauthorizedException.js.map