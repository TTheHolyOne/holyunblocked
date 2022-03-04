"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadPolygonShape = exports.loadTriangleShape = exports.loadGenericPolygonShape = void 0;
const PolygonDrawer_1 = require("./PolygonDrawer");
const TriangleDrawer_1 = require("./TriangleDrawer");
async function loadGenericPolygonShape(engine) {
    await engine.addShape("polygon", new PolygonDrawer_1.PolygonDrawer());
}
exports.loadGenericPolygonShape = loadGenericPolygonShape;
async function loadTriangleShape(engine) {
    await engine.addShape("triangle", new TriangleDrawer_1.TriangleDrawer());
}
exports.loadTriangleShape = loadTriangleShape;
async function loadPolygonShape(engine) {
    await loadGenericPolygonShape(engine);
    await loadTriangleShape(engine);
}
exports.loadPolygonShape = loadPolygonShape;
