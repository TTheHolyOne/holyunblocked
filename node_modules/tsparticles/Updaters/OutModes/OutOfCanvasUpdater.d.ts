import type { Container, IDelta, IParticleUpdater, Particle } from "../../Core";
export declare class OutOfCanvasUpdater implements IParticleUpdater {
    private readonly container;
    constructor(container: Container);
    init(): void;
    isEnabled(particle: Particle): boolean;
    update(particle: Particle, delta: IDelta): void;
    private updateOutMode;
    private destroy;
    private out;
    private bounce;
    private none;
}
