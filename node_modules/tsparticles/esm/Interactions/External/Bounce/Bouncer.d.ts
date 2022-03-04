import { ExternalInteractorBase } from "../../../Core";
import type { Container } from "../../../Core";
export declare class Bouncer extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    interact(): Promise<void>;
    reset(): void;
    private processMouseBounce;
    private singleSelectorBounce;
    private processBounce;
}
