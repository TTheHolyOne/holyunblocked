(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./AngleUpdater"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadAngleUpdater = void 0;
    const AngleUpdater_1 = require("./AngleUpdater");
    async function loadAngleUpdater(engine) {
        await engine.addParticleUpdater("angle", (container) => new AngleUpdater_1.AngleUpdater(container));
    }
    exports.loadAngleUpdater = loadAngleUpdater;
});
