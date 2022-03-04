(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./TrailMaker"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadExternalTrailInteraction = void 0;
    const TrailMaker_1 = require("./TrailMaker");
    async function loadExternalTrailInteraction(engine) {
        await engine.addInteractor("externalTrail", (container) => new TrailMaker_1.TrailMaker(container));
    }
    exports.loadExternalTrailInteraction = loadExternalTrailInteraction;
});
