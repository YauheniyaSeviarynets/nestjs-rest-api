"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
class BaseModel {
    constructor(entity) {
        this.entity = entity;
    }
    get id() {
        return null;
    }
    getJSON(ignoreFields) {
        let result = {};
        if (ignoreFields === null || ignoreFields === void 0 ? void 0 : ignoreFields.length) {
            Object.keys(this.entity).forEach((key) => {
                if (!ignoreFields.includes(key)) {
                    result[key] = this.entity[key];
                }
            });
        }
        else {
            result = Object.assign({}, this.entity);
        }
        return Object.assign(Object.assign({}, result), { itemId: this.id });
    }
}
exports.BaseModel = BaseModel;
//# sourceMappingURL=base-model.model.js.map