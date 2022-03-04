import type { IDelta } from "../Interfaces";
import type { Container } from "../Container";
import type { Engine } from "../../engine";
import type { Particle } from "../Particle";
/**
 * @category Core
 */
export declare class InteractionManager {
    #private;
    private readonly container;
    private externalInteractors;
    private particleInteractors;
    constructor(engine: Engine, container: Container);
    init(): void;
    externalInteract(delta: IDelta): Promise<void>;
    particlesInteract(particle: Particle, delta: IDelta): Promise<void>;
}
