import { getRangeValue } from "../../Utils";
function updateTilt(particle, delta) {
    var _a;
    if (!particle.tilt) {
        return;
    }
    const tilt = particle.options.tilt;
    const tiltAnimation = tilt.animation;
    const speed = ((_a = particle.tilt.velocity) !== null && _a !== void 0 ? _a : 0) * delta.factor;
    const max = 2 * Math.PI;
    if (!tiltAnimation.enable) {
        return;
    }
    switch (particle.tilt.status) {
        case 0 /* increasing */:
            particle.tilt.value += speed;
            if (particle.tilt.value > max) {
                particle.tilt.value -= max;
            }
            break;
        case 1 /* decreasing */:
        default:
            particle.tilt.value -= speed;
            if (particle.tilt.value < 0) {
                particle.tilt.value += max;
            }
            break;
    }
}
export class TiltUpdater {
    constructor(container) {
        this.container = container;
    }
    init(particle) {
        const tiltOptions = particle.options.tilt;
        particle.tilt = {
            enable: tiltOptions.enable,
            value: (getRangeValue(tiltOptions.value) * Math.PI) / 180,
            sinDirection: Math.random() >= 0.5 ? 1 : -1,
            cosDirection: Math.random() >= 0.5 ? 1 : -1,
        };
        let tiltDirection = tiltOptions.direction;
        if (tiltDirection === "random" /* random */) {
            const index = Math.floor(Math.random() * 2);
            tiltDirection = index > 0 ? "counter-clockwise" /* counterClockwise */ : "clockwise" /* clockwise */;
        }
        switch (tiltDirection) {
            case "counter-clockwise" /* counterClockwise */:
            case "counterClockwise":
                particle.tilt.status = 1 /* decreasing */;
                break;
            case "clockwise" /* clockwise */:
                particle.tilt.status = 0 /* increasing */;
                break;
        }
        const tiltAnimation = particle.options.tilt.animation;
        if (tiltAnimation.enable) {
            particle.tilt.velocity = (tiltAnimation.speed / 360) * this.container.retina.reduceFactor;
            if (!tiltAnimation.sync) {
                particle.tilt.velocity *= Math.random();
            }
        }
    }
    isEnabled(particle) {
        const tilt = particle.options.tilt;
        const tiltAnimation = tilt.animation;
        return !particle.destroyed && !particle.spawning && tiltAnimation.enable;
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        updateTilt(particle, delta);
    }
}
