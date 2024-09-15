"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingResponse = void 0;
class ListingResponse {
    constructor(items, total, options) {
        this.items = items;
        this.total = total;
        this.itemMapper = options === null || options === void 0 ? void 0 : options.itemMapper;
        this.lastReadItemId = options === null || options === void 0 ? void 0 : options.lastReadItemId;
    }
    mapItems() {
        if (this.itemMapper) {
            return this.items.map(this.itemMapper);
        }
        return [...this.items];
    }
    getJSON() {
        return {
            items: this.mapItems(),
            total: this.total,
            lastReadItemId: this.lastReadItemId || null,
        };
    }
}
exports.ListingResponse = ListingResponse;
//# sourceMappingURL=listing-response.util.js.map