"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Emitters_engine;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitters = void 0;
const Utils_1 = require("../../Utils");
const Emitter_1 = require("./Options/Classes/Emitter");
const EmitterInstance_1 = require("./EmitterInstance");
class Emitters {
    constructor(engine, container) {
        this.container = container;
        _Emitters_engine.set(this, void 0);
        __classPrivateFieldSet(this, _Emitters_engine, engine, "f");
        this.array = [];
        this.emitters = [];
        this.interactivityEmitters = [];
        const overridableContainer = container;
        overridableContainer.getEmitter = (idxOrName) => idxOrName === undefined || typeof idxOrName === "number"
            ? this.array[idxOrName || 0]
            : this.array.find((t) => t.name === idxOrName);
        overridableContainer.addEmitter = (options, position) => this.addEmitter(options, position);
        overridableContainer.removeEmitter = (idxOrName) => {
            const emitter = overridableContainer.getEmitter(idxOrName);
            if (emitter) {
                this.removeEmitter(emitter);
            }
        };
        overridableContainer.playEmitter = (idxOrName) => {
            const emitter = overridableContainer.getEmitter(idxOrName);
            if (emitter) {
                emitter.externalPlay();
            }
        };
        overridableContainer.pauseEmitter = (idxOrName) => {
            const emitter = overridableContainer.getEmitter(idxOrName);
            if (emitter) {
                emitter.externalPause();
            }
        };
    }
    init(options) {
        var _a, _b;
        if (!options) {
            return;
        }
        if (options.emitters) {
            if (options.emitters instanceof Array) {
                this.emitters = options.emitters.map((s) => {
                    const tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.emitters instanceof Array) {
                    this.emitters = new Emitter_1.Emitter();
                }
                this.emitters.load(options.emitters);
            }
        }
        const interactivityEmitters = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
        if (interactivityEmitters) {
            if (interactivityEmitters instanceof Array) {
                this.interactivityEmitters = interactivityEmitters.map((s) => {
                    const tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.interactivityEmitters instanceof Array) {
                    this.interactivityEmitters = new Emitter_1.Emitter();
                }
                this.interactivityEmitters.load(interactivityEmitters);
            }
        }
        if (this.emitters instanceof Array) {
            for (const emitterOptions of this.emitters) {
                this.addEmitter(emitterOptions);
            }
        }
        else {
            this.addEmitter(this.emitters);
        }
    }
    play() {
        for (const emitter of this.array) {
            emitter.play();
        }
    }
    pause() {
        for (const emitter of this.array) {
            emitter.pause();
        }
    }
    stop() {
        this.array = [];
    }
    update(delta) {
        for (const emitter of this.array) {
            emitter.update(delta);
        }
    }
    handleClickMode(mode) {
        const container = this.container;
        const emitterOptions = this.emitters;
        const modeEmitters = this.interactivityEmitters;
        if (mode === "emitter") {
            let emitterModeOptions;
            if (modeEmitters instanceof Array) {
                if (modeEmitters.length > 0) {
                    emitterModeOptions = (0, Utils_1.itemFromArray)(modeEmitters);
                }
            }
            else {
                emitterModeOptions = modeEmitters;
            }
            const emittersOptions = emitterModeOptions !== null && emitterModeOptions !== void 0 ? emitterModeOptions : (emitterOptions instanceof Array ? (0, Utils_1.itemFromArray)(emitterOptions) : emitterOptions);
            const ePosition = container.interactivity.mouse.clickPosition;
            this.addEmitter((0, Utils_1.deepExtend)({}, emittersOptions), ePosition);
        }
    }
    resize() {
        for (const emitter of this.array) {
            emitter.resize();
        }
    }
    addEmitter(options, position) {
        const emitterOptions = new Emitter_1.Emitter();
        emitterOptions.load(options);
        const emitter = new EmitterInstance_1.EmitterInstance(__classPrivateFieldGet(this, _Emitters_engine, "f"), this, this.container, emitterOptions, position);
        this.array.push(emitter);
        return emitter;
    }
    removeEmitter(emitter) {
        const index = this.array.indexOf(emitter);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    }
}
exports.Emitters = Emitters;
_Emitters_engine = new WeakMap();
