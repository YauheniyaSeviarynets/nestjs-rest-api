"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinObjects = void 0;
const joinObjects = (objects) => {
    return objects.reduce((acc, current) => {
        return Object.assign(Object.assign({}, acc), current);
    }, {});
};
exports.joinObjects = joinObjects;
//# sourceMappingURL=join-objects.util.js.map