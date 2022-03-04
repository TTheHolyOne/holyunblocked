"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ShapeManager_engine;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeManager = void 0;
const shapes = new Map();
class ShapeManager {
    constructor(engine) {
        _ShapeManager_engine.set(this, void 0);
        __classPrivateFieldSet(this, _ShapeManager_engine, engine, "f");
    }
    addShape(name, drawer) {
        if (!this.getShape(name)) {
            shapes.set(name, drawer);
        }
    }
    getShape(name) {
        return shapes.get(name);
    }
    getSupportedShapes() {
        return shapes.keys();
    }
}
exports.ShapeManager = ShapeManager;
_ShapeManager_engine = new WeakMap();
