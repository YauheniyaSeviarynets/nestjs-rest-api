"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const BaseException_1 = require("./BaseException");
class BadRequestException extends BaseException_1.BaseException {
    constructor(...args) {
        super(...args);
        this.status = 400;
    }
}
exports.BadRequestException = BadRequestException;
//# sourceMappingURL=BadRequestException.js.map