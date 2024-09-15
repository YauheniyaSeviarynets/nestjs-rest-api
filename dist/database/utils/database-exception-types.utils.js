"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIsConditionalCheckFailedException = exports.getDatabaseExceptionType = void 0;
const constants_1 = require("../constants");
const getDatabaseExceptionType = (error) => error.__type;
exports.getDatabaseExceptionType = getDatabaseExceptionType;
const getIsConditionalCheckFailedException = (error) => {
    const type = (0, exports.getDatabaseExceptionType)(error);
    return Boolean(type && type.includes(constants_1.DatabaseExceptions.CONDITIONAL_CHECK_FAILED));
};
exports.getIsConditionalCheckFailedException = getIsConditionalCheckFailedException;
//# sourceMappingURL=database-exception-types.utils.js.map