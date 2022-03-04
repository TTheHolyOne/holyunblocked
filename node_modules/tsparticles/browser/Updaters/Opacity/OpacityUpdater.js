import { clamp, getRangeMax, getRangeMin, getRangeValue, randomInRange } from "../../Utils";
function checkDestroy(particle, value, minValue, maxValue) {
    switch (particle.options.opacity.animation.destroy) {
        case "max" /* max */:
            if (value >= maxValue) {
                particle.destroy();
            }
            break;
        case "min" /* min */:
            if (value <= minValue) {
                particle.destroy();
            }
            break;
    }
}
function updateOpacity(particle, delta) {
    var _a, _b, _c, _d, _e;
    if (!particle.opacity) {
        return;
    }
    const minValue = particle.opacity.min;
    const maxValue = particle.opacity.max;
    if (particle.destroyed ||
        !particle.opacity.enable ||
        (((_a = particle.opacity.maxLoops) !== null && _a !== void 0 ? _a : 0) > 0 && ((_b = particle.opacity.loops) !== null && _b !== void 0 ? _b : 0) > ((_c = particle.opacity.maxLoops) !== null && _c !== void 0 ? _c : 0))) {
        return;
    }
    switch (particle.opacity.status) {
        case 0 /* increasing */:
            if (particle.opacity.value >= maxValue) {
                particle.opacity.status = 1 /* decreasing */;
                if (!particle.opacity.loops) {
                    particle.opacity.loops = 0;
                }
                particle.opacity.loops++;
            }
            else {
                particle.opacity.value += ((_d = particle.opacity.velocity) !== null && _d !== void 0 ? _d : 0) * delta.factor;
            }
            break;
        case 1 /* decreasing */:
            if (particle.opacity.value <= minValue) {
                particle.opacity.status = 0 /* increasing */;
                if (!particle.opacity.loops) {
                    particle.opacity.loops = 0;
                }
                particle.opacity.loops++;
            }
            else {
                particle.opacity.value -= ((_e = particle.opacity.velocity) !== null && _e !== void 0 ? _e : 0) * delta.factor;
            }
            break;
    }
    checkDestroy(particle, particle.opacity.value, minValue, maxValue);
    if (!particle.destroyed) {
        particle.opacity.value = clamp(particle.opacity.value, minValue, maxValue);
    }
}
export class OpacityUpdater {
    constructor(container) {
        this.container = container;
    }
    init(particle) {
        /* opacity */
        const opacityOptions = particle.options.opacity;
        particle.opacity = {
            enable: opacityOptions.animation.enable,
            max: getRangeMax(opacityOptions.value),
            min: getRangeMin(opacityOptions.value),
            value: getRangeValue(opacityOptions.value),
            loops: 0,
            maxLoops: opacityOptions.animation.count,
        };
        const opacityAnimation = opacityOptions.animation;
        if (opacityAnimation.enable) {
            particle.opacity.status = 0 /* increasing */;
            const opacityRange = opacityOptions.value;
            particle.opacity.min = getRangeMin(opacityRange);
            particle.opacity.max = getRangeMax(opacityRange);
            switch (opacityAnimation.startValue) {
                case "min" /* min */:
                    particle.opacity.value = particle.opacity.min;
                    particle.opacity.status = 0 /* increasing */;
                    break;
                case "random" /* random */:
                    particle.opacity.value = randomInRange(particle.opacity);
                    particle.opacity.status =
                        Math.random() >= 0.5 ? 0 /* increasing */ : 1 /* decreasing */;
                    break;
                case "max" /* max */:
                default:
                    particle.opacity.value = particle.opacity.max;
                    particle.opacity.status = 1 /* decreasing */;
                    break;
            }
            particle.opacity.velocity = (opacityAnimation.speed / 100) * this.container.retina.reduceFactor;
            if (!opacityAnimation.sync) {
                particle.opacity.velocity *= Math.random();
            }
        }
    }
    isEnabled(particle) {
        var _a, _b, _c, _d;
        return (!particle.destroyed &&
            !particle.spawning &&
            !!particle.opacity &&
            particle.opacity.enable &&
            (((_a = particle.opacity.maxLoops) !== null && _a !== void 0 ? _a : 0) <= 0 ||
                (((_b = particle.opacity.maxLoops) !== null && _b !== void 0 ? _b : 0) > 0 &&
                    ((_c = particle.opacity.loops) !== null && _c !== void 0 ? _c : 0) < ((_d = particle.opacity.maxLoops) !== null && _d !== void 0 ? _d : 0))));
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        updateOpacity(particle, delta);
    }
}
