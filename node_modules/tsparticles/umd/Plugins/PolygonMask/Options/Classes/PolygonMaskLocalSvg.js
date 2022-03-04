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
    exports.PolygonMaskLocalSvg = void 0;
    class PolygonMaskLocalSvg {
        constructor() {
            this.path = [];
            this.size = {
                height: 0,
                width: 0,
            };
        }
        load(data) {
            if (!data) {
                return;
            }
            if (data.path !== undefined) {
                this.path = data.path;
            }
            if (data.size !== undefined) {
                if (data.size.width !== undefined) {
                    this.size.width = data.size.width;
                }
                if (data.size.height !== undefined) {
                    this.size.height = data.size.height;
                }
            }
        }
    }
    exports.PolygonMaskLocalSvg = PolygonMaskLocalSvg;
});
