"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_SCHEMA_KEYS = exports.UserSchema = void 0;
const dynamoose_1 = require("dynamoose");
exports.UserSchema = new dynamoose_1.Schema({
    userId: {
        type: String,
        hashKey: true,
    },
    relationKey: {
        type: String,
        rangeKey: true,
        index: {
            type: 'global',
            rangeKey: 'createdAt',
        },
    },
    name: String,
    email: String,
    currency: String,
    balance: Number,
}, { timestamps: true });
exports.USER_SCHEMA_KEYS = [exports.UserSchema.hashKey, exports.UserSchema.rangeKey];
//# sourceMappingURL=users.schema.js.map