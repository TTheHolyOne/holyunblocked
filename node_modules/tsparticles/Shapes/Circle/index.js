"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCircleShape = void 0;
const CircleDrawer_1 = require("./CircleDrawer");
async function loadCircleShape(engine) {
    await engine.addShape("circle", new CircleDrawer_1.CircleDrawer());
}
exports.loadCircleShape = loadCircleShape;
