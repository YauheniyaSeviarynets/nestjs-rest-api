"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_EXCEPTION_STRATEGIES_KEYS = exports.BASE_EXCEPTION_STRATEGIES = void 0;
const BadRequestException_1 = require("../../exceptions/BadRequestException");
const get_object_from_object_keys_util_1 = require("../utils/get-object-from-object-keys.util");
exports.BASE_EXCEPTION_STRATEGIES = Object.freeze({
    PROVIDED_ID_INVALID: () => new BadRequestException_1.BadRequestException('Provided id is invalid'),
});
exports.BASE_EXCEPTION_STRATEGIES_KEYS = (0, get_object_from_object_keys_util_1.getObjectFromObjectKeysUtil)(exports.BASE_EXCEPTION_STRATEGIES);
//# sourceMappingURL=base-exception.strategies.js.map