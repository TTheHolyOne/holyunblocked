"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonMaskInline = void 0;
class PolygonMaskInline {
    constructor() {
        this.arrangement = "one-per-point";
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.arrangement !== undefined) {
            this.arrangement = data.arrangement;
        }
    }
}
exports.PolygonMaskInline = PolygonMaskInline;
