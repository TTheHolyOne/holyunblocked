import type { IDelta, IParticleUpdater, Particle } from "../../Core";
export declare class RollUpdater implements IParticleUpdater {
    init(particle: Particle): void;
    isEnabled(particle: Particle): boolean;
    update(particle: Particle, delta: IDelta): void;
}
