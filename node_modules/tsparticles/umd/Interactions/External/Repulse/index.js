(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Repulser"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadExternalRepulseInteraction = void 0;
    const Repulser_1 = require("./Repulser");
    async function loadExternalRepulseInteraction(engine) {
        await engine.addInteractor("externalRepulse", (container) => new Repulser_1.Repulser(container));
    }
    exports.loadExternalRepulseInteraction = loadExternalRepulseInteraction;
});
