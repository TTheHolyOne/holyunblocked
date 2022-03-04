import type { Container, IDelta, IParticleUpdater, Particle } from "../../Core";
export declare class OpacityUpdater implements IParticleUpdater {
    private readonly container;
    constructor(container: Container);
    init(particle: Particle): void;
    isEnabled(particle: Particle): boolean;
    update(particle: Particle, delta: IDelta): void;
}
