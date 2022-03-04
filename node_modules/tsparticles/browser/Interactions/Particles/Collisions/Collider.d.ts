import type { Container, Particle } from "../../../Core";
import { ParticlesInteractorBase } from "../../../Core";
/**
 * @category Interactions
 */
export declare class Collider extends ParticlesInteractorBase {
    constructor(container: Container);
    isEnabled(particle: Particle): boolean;
    reset(): void;
    interact(p1: Particle): Promise<void>;
    private resolveCollision;
    private absorb;
}
