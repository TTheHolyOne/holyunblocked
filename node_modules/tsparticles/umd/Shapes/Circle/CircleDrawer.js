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
    exports.CircleDrawer = void 0;
    class CircleDrawer {
        getSidesCount() {
            return 12;
        }
        draw(context, particle, radius) {
            context.arc(0, 0, radius, 0, Math.PI * 2, false);
        }
    }
    exports.CircleDrawer = CircleDrawer;
});
