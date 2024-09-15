"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERS_EXCEPTION_STRATEGIES_KEYS = exports.USERS_EXCEPTION_STRATEGIES = void 0;
const NotFoundException_1 = require("../../exceptions/NotFoundException");
const get_object_from_object_keys_util_1 = require("../../shared/utils/get-object-from-object-keys.util");
exports.USERS_EXCEPTION_STRATEGIES = Object.freeze({
    USER_NOT_FOUND: () => new NotFoundException_1.NotFoundException('This user is not found'),
});
exports.USERS_EXCEPTION_STRATEGIES_KEYS = (0, get_object_from_object_keys_util_1.getObjectFromObjectKeysUtil)(exports.USERS_EXCEPTION_STRATEGIES);
//# sourceMappingURL=users-exception.strategies.js.map