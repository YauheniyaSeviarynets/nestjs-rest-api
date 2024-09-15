"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const BaseException_1 = require("./BaseException");
class NotFoundException extends BaseException_1.BaseException {
    constructor(...args) {
        super(...args);
        this.status = 404;
    }
}
exports.NotFoundException = NotFoundException;
//# sourceMappingURL=NotFoundException.js.map