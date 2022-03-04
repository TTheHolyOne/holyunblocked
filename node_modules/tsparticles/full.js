"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFull = void 0;
const Absorbers_1 = require("./Plugins/Absorbers");
const Emitters_1 = require("./Plugins/Emitters");
const Trail_1 = require("./Interactions/External/Trail");
const PolygonMask_1 = require("./Plugins/PolygonMask");
const Roll_1 = require("./Updaters/Roll");
const slim_1 = require("./slim");
const Tilt_1 = require("./Updaters/Tilt");
const Wobble_1 = require("./Updaters/Wobble");
async function loadFull(engine) {
    await (0, slim_1.loadSlim)(engine);
    await (0, Trail_1.loadExternalTrailInteraction)(engine);
    await (0, Roll_1.loadRollUpdater)(engine);
    await (0, Tilt_1.loadTiltUpdater)(engine);
    await (0, Wobble_1.loadWobbleUpdater)(engine);
    await (0, Absorbers_1.loadAbsorbersPlugin)(engine);
    await (0, Emitters_1.loadEmittersPlugin)(engine);
    await (0, PolygonMask_1.loadPolygonMaskPlugin)(engine);
}
exports.loadFull = loadFull;
