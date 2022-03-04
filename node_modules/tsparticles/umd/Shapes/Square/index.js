(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./SquareDrawer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadSquareShape = void 0;
    const SquareDrawer_1 = require("./SquareDrawer");
    async function loadSquareShape(engine) {
        const drawer = new SquareDrawer_1.SquareDrawer();
        await engine.addShape("edge", drawer);
        await engine.addShape("square", drawer);
    }
    exports.loadSquareShape = loadSquareShape;
});
