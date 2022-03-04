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
        define(["require", "exports", "./Colors", "./Gradients", "./IAttract", "./IBounds", "./IBubble", "./IBubbleParticleData", "./ICircleBouncer", "./IContainerInteractivity", "./IContainerPlugin", "./ICoordinates", "./IDelta", "./IDimension", "./IDistance", "./IExternalInteractor", "./IInteractor", "./IMouseData", "./IMovePathGenerator", "./IParticle", "./IParticleGradientAnimation", "./IParticleGradientColorAnimation", "./IParticleHslAnimation", "./IParticlesInteractor", "./IParticleLife", "./IParticleLoops", "./IParticleRetinaProps", "./IParticleRoll", "./IParticleSpin", "./IParticleUpdater", "./IParticleValueAnimation", "./IParticleWobble", "./IPlugin", "./IRangeValue", "./IRectSideResult", "./IRepulse", "./IShapeDrawer", "./IShapeValues"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require("./Colors"), exports);
    __exportStar(require("./Gradients"), exports);
    __exportStar(require("./IAttract"), exports);
    __exportStar(require("./IBounds"), exports);
    __exportStar(require("./IBubble"), exports);
    __exportStar(require("./IBubbleParticleData"), exports);
    __exportStar(require("./ICircleBouncer"), exports);
    __exportStar(require("./IContainerInteractivity"), exports);
    __exportStar(require("./IContainerPlugin"), exports);
    __exportStar(require("./ICoordinates"), exports);
    __exportStar(require("./IDelta"), exports);
    __exportStar(require("./IDimension"), exports);
    __exportStar(require("./IDistance"), exports);
    __exportStar(require("./IExternalInteractor"), exports);
    __exportStar(require("./IInteractor"), exports);
    __exportStar(require("./IMouseData"), exports);
    __exportStar(require("./IMovePathGenerator"), exports);
    __exportStar(require("./IParticle"), exports);
    __exportStar(require("./IParticleGradientAnimation"), exports);
    __exportStar(require("./IParticleGradientColorAnimation"), exports);
    __exportStar(require("./IParticleHslAnimation"), exports);
    __exportStar(require("./IParticlesInteractor"), exports);
    __exportStar(require("./IParticleLife"), exports);
    __exportStar(require("./IParticleLoops"), exports);
    __exportStar(require("./IParticleRetinaProps"), exports);
    __exportStar(require("./IParticleRoll"), exports);
    __exportStar(require("./IParticleSpin"), exports);
    __exportStar(require("./IParticleUpdater"), exports);
    __exportStar(require("./IParticleValueAnimation"), exports);
    __exportStar(require("./IParticleWobble"), exports);
    __exportStar(require("./IPlugin"), exports);
    __exportStar(require("./IRangeValue"), exports);
    __exportStar(require("./IRectSideResult"), exports);
    __exportStar(require("./IRepulse"), exports);
    __exportStar(require("./IShapeDrawer"), exports);
    __exportStar(require("./IShapeValues"), exports);
});
