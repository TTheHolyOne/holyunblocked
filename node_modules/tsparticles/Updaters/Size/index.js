"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSizeUpdater = void 0;
const SizeUpdater_1 = require("./SizeUpdater");
async function loadSizeUpdater(engine) {
    await engine.addParticleUpdater("size", () => new SizeUpdater_1.SizeUpdater());
}
exports.loadSizeUpdater = loadSizeUpdater;
