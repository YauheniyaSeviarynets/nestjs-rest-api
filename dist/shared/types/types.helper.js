"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = exports.isNumber = exports.isString = void 0;
const isString = (input) => typeof input === 'string';
exports.isString = isString;
const isNumber = (input) => typeof input === 'number';
exports.isNumber = isNumber;
const isObject = (input) => typeof input === 'object' && typeof input !== 'function' && input !== null;
exports.isObject = isObject;
//# sourceMappingURL=types.helper.js.map