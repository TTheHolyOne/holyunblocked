(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./WobbleUpdater"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadWobbleUpdater = void 0;
    const WobbleUpdater_1 = require("./WobbleUpdater");
    async function loadWobbleUpdater(engine) {
        await engine.addParticleUpdater("wobble", (container) => new WobbleUpdater_1.WobbleUpdater(container));
    }
    exports.loadWobbleUpdater = loadWobbleUpdater;
});
