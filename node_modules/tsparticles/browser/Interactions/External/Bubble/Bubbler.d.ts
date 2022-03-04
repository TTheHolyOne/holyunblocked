import { ExternalInteractorBase } from "../../../Core";
import type { Container } from "../../../Core";
import type { Particle } from "../../../Core";
/**
 * Particle bubble manager
 * @category Interactions
 */
export declare class Bubbler extends ExternalInteractorBase {
    constructor(container: Container);
    isEnabled(): boolean;
    reset(particle: Particle, force?: boolean): void;
    interact(): Promise<void>;
    private singleSelectorHover;
    private process;
    private clickBubble;
    private hoverBubble;
    private hoverBubbleSize;
    private hoverBubbleOpacity;
    private hoverBubbleColor;
}
