import type { Container, IDelta, IParticleUpdater, Particle } from "../../Core";
export declare class LifeUpdater implements IParticleUpdater {
    private readonly container;
    constructor(container: Container);
    init(): void;
    isEnabled(particle: Particle): boolean;
    update(particle: Particle, delta: IDelta): void;
}
