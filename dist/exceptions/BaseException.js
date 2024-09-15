"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseException = void 0;
class BaseException extends Error {
    constructor(...args) {
        super(...args);
        this.status = 500;
    }
}
exports.BaseException = BaseException;
//# sourceMappingURL=BaseException.js.map