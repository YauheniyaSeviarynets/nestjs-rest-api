"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectFromObjectKeysUtil = void 0;
const getObjectFromObjectKeysUtil = (object) => {
    return Object.keys(object).reduce((acc, current) => {
        return Object.assign(Object.assign({}, acc), { [current]: current });
    }, {});
};
exports.getObjectFromObjectKeysUtil = getObjectFromObjectKeysUtil;
//# sourceMappingURL=get-object-from-object-keys.util.js.map