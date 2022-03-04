(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./TiltUpdater"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadTiltUpdater = void 0;
    const TiltUpdater_1 = require("./TiltUpdater");
    async function loadTiltUpdater(engine) {
        await engine.addParticleUpdater("tilt", (container) => new TiltUpdater_1.TiltUpdater(container));
    }
    exports.loadTiltUpdater = loadTiltUpdater;
});
