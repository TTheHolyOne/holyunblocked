import type { Container, IDelta } from "../../../Core";
import { ExternalInteractorBase } from "../../../Core";
/**
 * @category Interactions
 */
export declare class TrailMaker extends ExternalInteractorBase {
    private delay;
    private lastPosition?;
    constructor(container: Container);
    interact(delta: IDelta): Promise<void>;
    isEnabled(): boolean;
    reset(): void;
}
