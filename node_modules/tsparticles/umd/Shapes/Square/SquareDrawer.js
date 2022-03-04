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
    exports.SquareDrawer = void 0;
    const fixFactor = Math.sqrt(2);
    class SquareDrawer {
        getSidesCount() {
            return 4;
        }
        draw(context, particle, radius) {
            context.rect(-radius / fixFactor, -radius / fixFactor, (radius * 2) / fixFactor, (radius * 2) / fixFactor);
        }
    }
    exports.SquareDrawer = SquareDrawer;
});
