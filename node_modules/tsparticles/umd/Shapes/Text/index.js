(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./TextDrawer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadTextShape = void 0;
    const TextDrawer_1 = require("./TextDrawer");
    async function loadTextShape(engine) {
        const drawer = new TextDrawer_1.TextDrawer();
        for (const type of TextDrawer_1.validTypes) {
            await engine.addShape(type, drawer);
        }
    }
    exports.loadTextShape = loadTextShape;
});
