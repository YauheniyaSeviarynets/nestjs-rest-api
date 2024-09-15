"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../shared/constants");
let PagerMiddleware = class PagerMiddleware {
    use(req, res, next) {
        req.query[constants_1.PaginationKeys.LAST_READ_ITEM_ID] = (req.query[constants_1.PaginationKeys.LAST_READ_ITEM_ID] || constants_1.DefaultPaginationValues.LAST_READ_ITEM_ID);
        req.query[constants_1.PaginationKeys.PAGE_SIZE] = (req.query[constants_1.PaginationKeys.PAGE_SIZE] || constants_1.DefaultPaginationValues.PAGE_SIZE);
        next();
    }
};
PagerMiddleware = __decorate([
    (0, common_1.Injectable)()
], PagerMiddleware);
exports.PagerMiddleware = PagerMiddleware;
//# sourceMappingURL=PagerMiddleware.js.map