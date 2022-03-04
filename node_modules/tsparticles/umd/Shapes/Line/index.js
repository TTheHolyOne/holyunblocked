(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./LineDrawer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadLineShape = void 0;
    const LineDrawer_1 = require("./LineDrawer");
    async function loadLineShape(engine) {
        await engine.addShape("line", new LineDrawer_1.LineDrawer());
    }
    exports.loadLineShape = loadLineShape;
});
