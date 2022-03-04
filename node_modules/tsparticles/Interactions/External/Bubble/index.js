"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadExternalBubbleInteraction = void 0;
const Bubbler_1 = require("./Bubbler");
async function loadExternalBubbleInteraction(engine) {
    await engine.addInteractor("externalBubble", (container) => new Bubbler_1.Bubbler(container));
}
exports.loadExternalBubbleInteraction = loadExternalBubbleInteraction;
