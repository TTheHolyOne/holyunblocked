"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAngleUpdater = void 0;
const AngleUpdater_1 = require("./AngleUpdater");
async function loadAngleUpdater(engine) {
    await engine.addParticleUpdater("angle", (container) => new AngleUpdater_1.AngleUpdater(container));
}
exports.loadAngleUpdater = loadAngleUpdater;
