(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Connector"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadExternalConnectInteraction = void 0;
    const Connector_1 = require("./Connector");
    async function loadExternalConnectInteraction(engine) {
        await engine.addInteractor("externalConnect", (container) => new Connector_1.Connector(container));
    }
    exports.loadExternalConnectInteraction = loadExternalConnectInteraction;
});
