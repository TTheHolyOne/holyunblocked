(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PolygonMaskMove = void 0;
    class PolygonMaskMove {
        constructor() {
            this.radius = 10;
            this.type = "path";
        }
        load(data) {
            if (!data) {
                return;
            }
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    }
    exports.PolygonMaskMove = PolygonMaskMove;
});
