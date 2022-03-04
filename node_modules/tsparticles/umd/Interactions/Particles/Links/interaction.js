(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Linker"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadInteraction = void 0;
    const Linker_1 = require("./Linker");
    async function loadInteraction(engine) {
        await engine.addInteractor("particlesLinks", (container) => new Linker_1.Linker(container));
    }
    exports.loadInteraction = loadInteraction;
});
