import { ExternalInteractorBase } from "../../../Core";
import type { Container } from "../../../Core";
/**
 * Particle attract manager
 * @category Interactions
 */
export declare class Attractor extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    reset(): void;
    interact(): Promise<void>;
    private hoverAttract;
    private processAttract;
    private clickAttract;
}
