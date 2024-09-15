"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPrimaryKey = exports.parseUserPrimaryKey = exports.ID_DIVIDER = void 0;
exports.ID_DIVIDER = '_';
const parseUserPrimaryKey = (id) => {
    const parsedId = id.split(exports.ID_DIVIDER);
    return {
        userId: parsedId[0],
        relationKey: parsedId[1],
    };
};
exports.parseUserPrimaryKey = parseUserPrimaryKey;
const getUserPrimaryKey = (userId, relationKey) => {
    return `${userId}${exports.ID_DIVIDER}${relationKey}`;
};
exports.getUserPrimaryKey = getUserPrimaryKey;
//# sourceMappingURL=user-primary-key.utils.js.map