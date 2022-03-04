import type { Container } from "../../../Core";
import { ExternalInteractorBase } from "../../../Core";
/**
 * Particle connection manager
 * @category Interactions
 */
export declare class Connector extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    reset(): void;
    /**
     * Connecting particles on hover interactivity
     */
    interact(): Promise<void>;
}
