"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTextShape = void 0;
const TextDrawer_1 = require("./TextDrawer");
async function loadTextShape(engine) {
    const drawer = new TextDrawer_1.TextDrawer();
    for (const type of TextDrawer_1.validTypes) {
        await engine.addShape(type, drawer);
    }
}
exports.loadTextShape = loadTextShape;
