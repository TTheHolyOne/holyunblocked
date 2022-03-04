import type { Container, IParticle, Particle } from "../../../Core";
import { ParticlesInteractorBase } from "../../../Core";
/**
 * @category Interactions
 */
export declare class Attractor extends ParticlesInteractorBase {
    constructor(container: Container);
    interact(p1: IParticle): Promise<void>;
    isEnabled(particle: Particle): boolean;
    reset(): void;
}
