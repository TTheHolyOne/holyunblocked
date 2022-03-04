import { ExternalInteractorBase } from "../../../Core";
import type { Container } from "../../../Core";
export declare class Attractor extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    reset(): void;
    interact(): Promise<void>;
    private hoverAttract;
    private processAttract;
    private clickAttract;
}
