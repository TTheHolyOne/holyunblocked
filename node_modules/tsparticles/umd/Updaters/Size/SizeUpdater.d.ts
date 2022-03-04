import type { IDelta, IParticleUpdater, Particle } from "../../Core";
export declare class SizeUpdater implements IParticleUpdater {
    init(): void;
    isEnabled(particle: Particle): boolean;
    update(particle: Particle, delta: IDelta): void;
}
