(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./StrokeColorUpdater"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadStrokeColorUpdater = void 0;
    const StrokeColorUpdater_1 = require("./StrokeColorUpdater");
    async function loadStrokeColorUpdater(engine) {
        await engine.addParticleUpdater("strokeColor", (container) => new StrokeColorUpdater_1.StrokeColorUpdater(container));
    }
    exports.loadStrokeColorUpdater = loadStrokeColorUpdater;
});
