"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadExternalBounceInteraction = void 0;
const Bouncer_1 = require("./Bouncer");
async function loadExternalBounceInteraction(engine) {
    await engine.addInteractor("externalBounce", (container) => new Bouncer_1.Bouncer(container));
}
exports.loadExternalBounceInteraction = loadExternalBounceInteraction;
