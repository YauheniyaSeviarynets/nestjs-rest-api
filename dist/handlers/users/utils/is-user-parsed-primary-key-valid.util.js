"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIsUserParsedPrimaryKeyValid = void 0;
const types_helper_1 = require("../../../shared/types/types.helper");
const getIsUserParsedPrimaryKeyValid = ({ userId, relationKey, }) => [
    (0, types_helper_1.isString)(userId) && userId.length,
    (0, types_helper_1.isString)(relationKey) && relationKey.length,
].every(Boolean);
exports.getIsUserParsedPrimaryKeyValid = getIsUserParsedPrimaryKeyValid;
//# sourceMappingURL=is-user-parsed-primary-key-valid.util.js.map