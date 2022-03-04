import { ExternalInteractorBase } from "../../../Core";
import type { Container } from "../../../Core";
/**
 * Particle grab manager
 * @category Interactions
 */
export declare class Grabber extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    reset(): void;
    interact(): Promise<void>;
}
