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
});
