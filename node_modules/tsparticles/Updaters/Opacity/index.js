"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadOpacityUpdater = void 0;
const OpacityUpdater_1 = require("./OpacityUpdater");
async function loadOpacityUpdater(engine) {
    await engine.addParticleUpdater("opacity", (container) => new OpacityUpdater_1.OpacityUpdater(container));
}
exports.loadOpacityUpdater = loadOpacityUpdater;
