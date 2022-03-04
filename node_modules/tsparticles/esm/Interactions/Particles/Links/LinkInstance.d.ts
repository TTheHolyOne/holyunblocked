import type { Container, IContainerPlugin, Particle } from "../../../Core";
export declare class LinkInstance implements IContainerPlugin {
    private readonly container;
    constructor(container: Container);
    particleCreated(particle: Particle): void;
    particleDestroyed(particle: Particle): void;
    drawParticle(context: CanvasRenderingContext2D, particle: Particle): void;
    private drawLinkTriangle;
    private drawLinkLine;
}
