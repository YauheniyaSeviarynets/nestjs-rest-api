"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CARTS_EXCEPTION_STRATEGIES_KEYS = exports.CARTS_EXCEPTION_STRATEGIES = void 0;
const NotFoundException_1 = require("../../exceptions/NotFoundException");
const get_object_from_object_keys_util_1 = require("../../shared/utils/get-object-from-object-keys.util");
const BadRequestException_1 = require("../../exceptions/BadRequestException");
exports.CARTS_EXCEPTION_STRATEGIES = Object.freeze({
    CART_NOT_FOUND: () => new NotFoundException_1.NotFoundException('This cart is not found'),
    SUCH_CART_ALREADY_EXIST: () => new BadRequestException_1.BadRequestException('Such element already exist'),
});
exports.CARTS_EXCEPTION_STRATEGIES_KEYS = (0, get_object_from_object_keys_util_1.getObjectFromObjectKeysUtil)(exports.CARTS_EXCEPTION_STRATEGIES);
//# sourceMappingURL=carts-exception.strategies.js.map