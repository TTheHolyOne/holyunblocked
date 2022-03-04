import type { Container } from "../Container";
import type { IDelta } from "../Interfaces";
import type { Particle } from "../Particle";
/**
 * @category Core
 */
export declare class ParticlesMover {
    private readonly container;
    constructor(container: Container);
    move(particle: Particle, delta: IDelta): void;
    private moveParticle;
    private spin;
    private applyPath;
    private moveParallax;
    private getProximitySpeedFactor;
}
