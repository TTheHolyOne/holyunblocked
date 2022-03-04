import type { Container } from "../../../Core";
import { ExternalInteractorBase } from "../../../Core";
export declare class Connector extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    reset(): void;
    interact(): Promise<void>;
}
