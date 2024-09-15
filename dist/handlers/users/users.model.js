"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const base_model_model_1 = require("../../shared/base-model/base-model.model");
const user_primary_key_utils_1 = require("./utils/user-primary-key.utils");
class UserModel extends base_model_model_1.BaseModel {
    get id() {
        return (0, user_primary_key_utils_1.getUserPrimaryKey)(this.entity.userId, this.entity.relationKey);
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=users.model.js.map