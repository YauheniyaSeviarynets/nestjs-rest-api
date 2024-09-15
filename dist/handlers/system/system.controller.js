"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemController = void 0;
const common_1 = require("@nestjs/common");
const api_docs_decorators_1 = require("../../api-docs/api-docs.decorators");
const swagger_1 = require("@nestjs/swagger");
const system_service_1 = require("./system.service");
let SystemController = class SystemController {
    constructor(systemService) {
        this.systemService = systemService;
    }
    updateIndexes() {
        return this.systemService.updateTablesIndexes();
    }
};
__decorate([
    (0, api_docs_decorators_1.ApiAuth)(),
    (0, common_1.Post)('/update-tables-indexes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SystemController.prototype, "updateIndexes", null);
SystemController = __decorate([
    (0, swagger_1.ApiTags)('System'),
    (0, common_1.Controller)('/system'),
    __metadata("design:paramtypes", [system_service_1.SystemService])
], SystemController);
exports.SystemController = SystemController;
//# sourceMappingURL=system.controller.js.map