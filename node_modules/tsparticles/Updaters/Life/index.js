"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadLifeUpdater = void 0;
const LifeUpdater_1 = require("./LifeUpdater");
async function loadLifeUpdater(engine) {
    await engine.addParticleUpdater("life", (container) => new LifeUpdater_1.LifeUpdater(container));
}
exports.loadLifeUpdater = loadLifeUpdater;
