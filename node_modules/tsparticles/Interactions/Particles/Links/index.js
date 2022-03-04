"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadParticlesLinksInteraction = void 0;
const interaction_1 = require("./interaction");
const plugin_1 = require("./plugin");
async function loadParticlesLinksInteraction(engine) {
    await (0, interaction_1.loadInteraction)(engine);
    await (0, plugin_1.loadPlugin)(engine);
}
exports.loadParticlesLinksInteraction = loadParticlesLinksInteraction;
