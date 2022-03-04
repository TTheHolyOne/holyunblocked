(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Attractor"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadExternalAttractInteraction = void 0;
    const Attractor_1 = require("./Attractor");
    async function loadExternalAttractInteraction(engine) {
        await engine.addInteractor("externalAttract", (container) => new Attractor_1.Attractor(container));
    }
    exports.loadExternalAttractInteraction = loadExternalAttractInteraction;
});
