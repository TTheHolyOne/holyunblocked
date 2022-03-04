import { ParticlesInteractorBase } from "../../../Core";
import type { Container, Particle } from "../../../Core";
import type { LinkParticle } from "./LinkParticle";
export declare class Linker extends ParticlesInteractorBase {
    constructor(container: Container);
    isEnabled(particle: Particle): boolean;
    reset(): void;
    interact(p1: LinkParticle): Promise<void>;
    private setColor;
}
