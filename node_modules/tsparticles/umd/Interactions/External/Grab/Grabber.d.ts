import { ExternalInteractorBase } from "../../../Core";
import type { Container } from "../../../Core";
export declare class Grabber extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    reset(): void;
    interact(): Promise<void>;
}
