import { ExternalInteractorBase } from "../../../Core";
import type { Container } from "../../../Core";
export declare class Repulser extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    reset(): void;
    interact(): Promise<void>;
    private singleSelectorRepulse;
    private hoverRepulse;
    private processRepulse;
    private clickRepulse;
}
