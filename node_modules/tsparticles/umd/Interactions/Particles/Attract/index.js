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
    exports.loadParticlesAttractInteraction = void 0;
    const Attractor_1 = require("./Attractor");
    async function loadParticlesAttractInteraction(engine) {
        await engine.addInteractor("particlesAttract", (container) => new Attractor_1.Attractor(container));
    }
    exports.loadParticlesAttractInteraction = loadParticlesAttractInteraction;
});
