(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Grabber"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadExternalGrabInteraction = void 0;
    const Grabber_1 = require("./Grabber");
    async function loadExternalGrabInteraction(engine) {
        await engine.addInteractor("externalGrab", (container) => new Grabber_1.Grabber(container));
    }
    exports.loadExternalGrabInteraction = loadExternalGrabInteraction;
});
