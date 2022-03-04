(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Bubbler"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadExternalBubbleInteraction = void 0;
    const Bubbler_1 = require("./Bubbler");
    async function loadExternalBubbleInteraction(engine) {
        await engine.addInteractor("externalBubble", (container) => new Bubbler_1.Bubbler(container));
    }
    exports.loadExternalBubbleInteraction = loadExternalBubbleInteraction;
});
