var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./engine", "./pjs", "./full", "./Core", "./Core/Container", "./Enums", "./Plugins/Absorbers/Enums", "./Plugins/Emitters/Enums", "./Plugins/PolygonMask/Enums", "./Utils", "./Types"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tsParticles = exports.pJSDom = exports.particlesJS = exports.Main = exports.Engine = void 0;
    const engine_1 = require("./engine");
    Object.defineProperty(exports, "Engine", { enumerable: true, get: function () { return engine_1.Engine; } });
    Object.defineProperty(exports, "Main", { enumerable: true, get: function () { return engine_1.Engine; } });
    const pjs_1 = require("./pjs");
    const full_1 = require("./full");
    const tsParticles = new engine_1.Engine();
    exports.tsParticles = tsParticles;
    tsParticles.init();
    const { particlesJS, pJSDom } = (0, pjs_1.initPjs)(tsParticles);
    exports.particlesJS = particlesJS;
    exports.pJSDom = pJSDom;
    (0, full_1.loadFull)(tsParticles);
    __exportStar(require("./Core"), exports);
    __exportStar(require("./Core/Container"), exports);
    __exportStar(require("./Enums"), exports);
    __exportStar(require("./Plugins/Absorbers/Enums"), exports);
    __exportStar(require("./Plugins/Emitters/Enums"), exports);
    __exportStar(require("./Plugins/PolygonMask/Enums"), exports);
    __exportStar(require("./Utils"), exports);
    __exportStar(require("./Types"), exports);
});
