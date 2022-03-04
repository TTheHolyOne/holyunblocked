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
var _Particle_engine;
import { Vector, Vector3d } from "./Utils";
import { alterHsl, clamp, colorToRgb, deepExtend, getDistance, getHslFromAnimation, getParticleBaseVelocity, getParticleDirectionAngle, getRangeMax, getRangeMin, getRangeValue, getValue, isInArray, itemFromArray, randomInRange, setRangeValue, } from "../Utils";
import { ParticlesOptions } from "../Options/Classes/Particles/ParticlesOptions";
import { Shape } from "../Options/Classes/Particles/Shape/Shape";
const fixOutMode = (data) => {
    if (isInArray(data.outMode, data.checkModes) || isInArray(data.outMode, data.checkModes)) {
        if (data.coord > data.maxCoord - data.radius * 2) {
            data.setCb(-data.radius);
        }
        else if (data.coord < data.radius * 2) {
            data.setCb(data.radius);
        }
    }
};
export class Particle {
    constructor(engine, id, container, position, overrideOptions, group) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.id = id;
        this.container = container;
        this.group = group;
        _Particle_engine.set(this, void 0);
        __classPrivateFieldSet(this, _Particle_engine, engine, "f");
        this.fill = true;
        this.close = true;
        this.lastPathTime = 0;
        this.destroyed = false;
        this.unbreakable = false;
        this.splitCount = 0;
        this.misplaced = false;
        this.retina = {
            maxDistance: {},
        };
        this.ignoresResizeRatio = true;
        const pxRatio = container.retina.pixelRatio;
        const mainOptions = container.actualOptions;
        const particlesOptions = new ParticlesOptions();
        particlesOptions.load(mainOptions.particles);
        const shapeType = particlesOptions.shape.type;
        const reduceDuplicates = particlesOptions.reduceDuplicates;
        this.shape = shapeType instanceof Array ? itemFromArray(shapeType, this.id, reduceDuplicates) : shapeType;
        if (overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions.shape) {
            if (overrideOptions.shape.type) {
                const overrideShapeType = overrideOptions.shape.type;
                this.shape =
                    overrideShapeType instanceof Array
                        ? itemFromArray(overrideShapeType, this.id, reduceDuplicates)
                        : overrideShapeType;
            }
            const shapeOptions = new Shape();
            shapeOptions.load(overrideOptions.shape);
            if (this.shape) {
                this.shapeData = this.loadShapeData(shapeOptions, reduceDuplicates);
            }
        }
        else {
            this.shapeData = this.loadShapeData(particlesOptions.shape, reduceDuplicates);
        }
        if (overrideOptions !== undefined) {
            particlesOptions.load(overrideOptions);
        }
        if (((_a = this.shapeData) === null || _a === void 0 ? void 0 : _a.particles) !== undefined) {
            particlesOptions.load((_b = this.shapeData) === null || _b === void 0 ? void 0 : _b.particles);
        }
        this.fill = (_d = (_c = this.shapeData) === null || _c === void 0 ? void 0 : _c.fill) !== null && _d !== void 0 ? _d : this.fill;
        this.close = (_f = (_e = this.shapeData) === null || _e === void 0 ? void 0 : _e.close) !== null && _f !== void 0 ? _f : this.close;
        this.options = particlesOptions;
        this.pathDelay = getValue(this.options.move.path.delay) * 1000;
        const zIndexValue = getRangeValue(this.options.zIndex.value);
        container.retina.initParticle(this);
        const sizeOptions = this.options.size, sizeRange = sizeOptions.value;
        this.size = {
            enable: sizeOptions.animation.enable,
            value: getValue(sizeOptions) * container.retina.pixelRatio,
            max: getRangeMax(sizeRange) * pxRatio,
            min: getRangeMin(sizeRange) * pxRatio,
            loops: 0,
            maxLoops: sizeOptions.animation.count,
        };
        const sizeAnimation = sizeOptions.animation;
        if (sizeAnimation.enable) {
            this.size.status = 0;
            switch (sizeAnimation.startValue) {
                case "min":
                    this.size.value = this.size.min;
                    this.size.status = 0;
                    break;
                case "random":
                    this.size.value = randomInRange(this.size) * pxRatio;
                    this.size.status = Math.random() >= 0.5 ? 0 : 1;
                    break;
                case "max":
                default:
                    this.size.value = this.size.max;
                    this.size.status = 1;
                    break;
            }
            this.size.velocity =
                (((_g = this.retina.sizeAnimationSpeed) !== null && _g !== void 0 ? _g : container.retina.sizeAnimationSpeed) / 100) *
                    container.retina.reduceFactor;
            if (!sizeAnimation.sync) {
                this.size.velocity *= Math.random();
            }
        }
        this.direction = getParticleDirectionAngle(this.options.move.direction);
        this.bubble = {
            inRange: false,
        };
        this.initialVelocity = this.calculateVelocity();
        this.velocity = this.initialVelocity.copy();
        this.moveDecay = 1 - getRangeValue(this.options.move.decay);
        this.position = this.calcPosition(container, position, clamp(zIndexValue, 0, container.zLayers));
        this.initialPosition = this.position.copy();
        this.offset = Vector.origin;
        const particles = container.particles;
        particles.needsSort = particles.needsSort || particles.lastZIndex < this.position.z;
        particles.lastZIndex = this.position.z;
        this.zIndexFactor = this.position.z / container.zLayers;
        this.sides = 24;
        let drawer = container.drawers.get(this.shape);
        if (!drawer) {
            drawer = __classPrivateFieldGet(this, _Particle_engine, "f").plugins.getShapeDrawer(this.shape);
            if (drawer) {
                container.drawers.set(this.shape, drawer);
            }
        }
        if (drawer === null || drawer === void 0 ? void 0 : drawer.loadShape) {
            drawer === null || drawer === void 0 ? void 0 : drawer.loadShape(this);
        }
        const sideCountFunc = drawer === null || drawer === void 0 ? void 0 : drawer.getSidesCount;
        if (sideCountFunc) {
            this.sides = sideCountFunc(this);
        }
        this.life = this.loadLife();
        this.spawning = this.life.delay > 0;
        if (this.options.move.spin.enable) {
            const spinPos = (_h = this.options.move.spin.position) !== null && _h !== void 0 ? _h : { x: 50, y: 50 };
            const spinCenter = {
                x: (spinPos.x / 100) * container.canvas.size.width,
                y: (spinPos.y / 100) * container.canvas.size.height,
            };
            const pos = this.getPosition();
            const distance = getDistance(pos, spinCenter);
            this.spin = {
                center: spinCenter,
                direction: this.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
                angle: this.velocity.angle,
                radius: distance,
                acceleration: (_j = this.retina.spinAcceleration) !== null && _j !== void 0 ? _j : getRangeValue(this.options.move.spin.acceleration),
            };
        }
        this.shadowColor = colorToRgb(this.options.shadow.color);
        for (const updater of container.particles.updaters) {
            if (updater.init) {
                updater.init(this);
            }
        }
        if (drawer && drawer.particleInit) {
            drawer.particleInit(container, this);
        }
        for (const [, plugin] of container.plugins) {
            if (plugin.particleCreated) {
                plugin.particleCreated(this);
            }
        }
    }
    isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas();
    }
    isInsideCanvas() {
        const radius = this.getRadius();
        const canvasSize = this.container.canvas.size;
        return (this.position.x >= -radius &&
            this.position.y >= -radius &&
            this.position.y <= canvasSize.height + radius &&
            this.position.x <= canvasSize.width + radius);
    }
    draw(delta) {
        const container = this.container;
        for (const [, plugin] of container.plugins) {
            container.canvas.drawParticlePlugin(plugin, this, delta);
        }
        container.canvas.drawParticle(this, delta);
    }
    getPosition() {
        return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z,
        };
    }
    getRadius() {
        var _a;
        return (_a = this.bubble.radius) !== null && _a !== void 0 ? _a : this.size.value;
    }
    getMass() {
        return (this.getRadius() ** 2 * Math.PI) / 2;
    }
    getFillColor() {
        var _a, _b;
        const color = (_a = this.bubble.color) !== null && _a !== void 0 ? _a : getHslFromAnimation(this.color);
        if (color && this.roll && (this.backColor || this.roll.alter)) {
            const backFactor = this.options.roll.mode === "both" ? 2 : 1, backSum = this.options.roll.mode === "horizontal" ? Math.PI / 2 : 0, rolled = Math.floor((((_b = this.roll.angle) !== null && _b !== void 0 ? _b : 0) + backSum) / (Math.PI / backFactor)) % 2;
            if (rolled) {
                if (this.backColor) {
                    return this.backColor;
                }
                if (this.roll.alter) {
                    return alterHsl(color, this.roll.alter.type, this.roll.alter.value);
                }
            }
        }
        return color;
    }
    getStrokeColor() {
        var _a, _b;
        return (_b = (_a = this.bubble.color) !== null && _a !== void 0 ? _a : getHslFromAnimation(this.strokeColor)) !== null && _b !== void 0 ? _b : this.getFillColor();
    }
    destroy(override) {
        this.destroyed = true;
        this.bubble.inRange = false;
        if (this.unbreakable) {
            return;
        }
        this.destroyed = true;
        this.bubble.inRange = false;
        for (const [, plugin] of this.container.plugins) {
            if (plugin.particleDestroyed) {
                plugin.particleDestroyed(this, override);
            }
        }
        if (override) {
            return;
        }
        const destroyOptions = this.options.destroy;
        if (destroyOptions.mode === "split") {
            this.split();
        }
    }
    reset() {
        if (this.opacity) {
            this.opacity.loops = 0;
        }
        this.size.loops = 0;
    }
    split() {
        const splitOptions = this.options.destroy.split;
        if (splitOptions.count >= 0 && this.splitCount++ > splitOptions.count) {
            return;
        }
        const rate = getRangeValue(splitOptions.rate.value);
        for (let i = 0; i < rate; i++) {
            this.container.particles.addSplitParticle(this);
        }
    }
    calcPosition(container, position, zIndex, tryCount = 0) {
        var _a, _b, _c, _d, _e, _f;
        for (const [, plugin] of container.plugins) {
            const pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position, this) : undefined;
            if (pluginPos !== undefined) {
                return Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
            }
        }
        const canvasSize = container.canvas.size;
        const pos = Vector3d.create((_a = position === null || position === void 0 ? void 0 : position.x) !== null && _a !== void 0 ? _a : Math.random() * canvasSize.width, (_b = position === null || position === void 0 ? void 0 : position.y) !== null && _b !== void 0 ? _b : Math.random() * canvasSize.height, zIndex);
        const radius = this.getRadius();
        const outModes = this.options.move.outModes, fixHorizontal = (outMode) => {
            fixOutMode({
                outMode,
                checkModes: ["bounce", "bounce-horizontal"],
                coord: pos.x,
                maxCoord: container.canvas.size.width,
                setCb: (value) => (pos.x += value),
                radius,
            });
        }, fixVertical = (outMode) => {
            fixOutMode({
                outMode,
                checkModes: ["bounce", "bounce-vertical"],
                coord: pos.y,
                maxCoord: container.canvas.size.height,
                setCb: (value) => (pos.y += value),
                radius,
            });
        };
        fixHorizontal((_c = outModes.left) !== null && _c !== void 0 ? _c : outModes.default);
        fixHorizontal((_d = outModes.right) !== null && _d !== void 0 ? _d : outModes.default);
        fixVertical((_e = outModes.top) !== null && _e !== void 0 ? _e : outModes.default);
        fixVertical((_f = outModes.bottom) !== null && _f !== void 0 ? _f : outModes.default);
        if (this.checkOverlap(pos, tryCount)) {
            return this.calcPosition(container, undefined, zIndex, tryCount + 1);
        }
        return pos;
    }
    checkOverlap(pos, tryCount = 0) {
        const collisionsOptions = this.options.collisions;
        const radius = this.getRadius();
        if (!collisionsOptions.enable) {
            return false;
        }
        const overlapOptions = collisionsOptions.overlap;
        if (overlapOptions.enable) {
            return false;
        }
        const retries = overlapOptions.retries;
        if (retries >= 0 && tryCount > retries) {
            throw new Error("Particle is overlapping and can't be placed");
        }
        let overlaps = false;
        for (const particle of this.container.particles.array) {
            if (getDistance(pos, particle.position) < radius + particle.getRadius()) {
                overlaps = true;
                break;
            }
        }
        return overlaps;
    }
    calculateVelocity() {
        const baseVelocity = getParticleBaseVelocity(this.direction);
        const res = baseVelocity.copy();
        const moveOptions = this.options.move;
        const rad = (Math.PI / 180) * moveOptions.angle.value;
        const radOffset = (Math.PI / 180) * moveOptions.angle.offset;
        const range = {
            left: radOffset - rad / 2,
            right: radOffset + rad / 2,
        };
        if (!moveOptions.straight) {
            res.angle += randomInRange(setRangeValue(range.left, range.right));
        }
        if (moveOptions.random && typeof moveOptions.speed === "number") {
            res.length *= Math.random();
        }
        return res;
    }
    loadShapeData(shapeOptions, reduceDuplicates) {
        const shapeData = shapeOptions.options[this.shape];
        if (shapeData) {
            return deepExtend({}, shapeData instanceof Array ? itemFromArray(shapeData, this.id, reduceDuplicates) : shapeData);
        }
    }
    loadLife() {
        const container = this.container;
        const particlesOptions = this.options;
        const lifeOptions = particlesOptions.life;
        const life = {
            delay: container.retina.reduceFactor
                ? ((getRangeValue(lifeOptions.delay.value) * (lifeOptions.delay.sync ? 1 : Math.random())) /
                    container.retina.reduceFactor) *
                    1000
                : 0,
            delayTime: 0,
            duration: container.retina.reduceFactor
                ? ((getRangeValue(lifeOptions.duration.value) * (lifeOptions.duration.sync ? 1 : Math.random())) /
                    container.retina.reduceFactor) *
                    1000
                : 0,
            time: 0,
            count: particlesOptions.life.count,
        };
        if (life.duration <= 0) {
            life.duration = -1;
        }
        if (life.count <= 0) {
            life.count = -1;
        }
        return life;
    }
}
_Particle_engine = new WeakMap();
