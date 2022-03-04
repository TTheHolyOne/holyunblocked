(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./PolygonDrawerBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TriangleDrawer = void 0;
    const PolygonDrawerBase_1 = require("./PolygonDrawerBase");
    class TriangleDrawer extends PolygonDrawerBase_1.PolygonDrawerBase {
        getSidesCount() {
            return 3;
        }
        getSidesData(particle, radius) {
            return {
                count: {
                    denominator: 2,
                    numerator: 3,
                },
                length: radius * 2,
            };
        }
        getCenter(particle, radius) {
            return {
                x: -radius,
                y: radius / 1.66,
            };
        }
    }
    exports.TriangleDrawer = TriangleDrawer;
});
