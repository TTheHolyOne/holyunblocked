import type { IDelta, IExternalInteractor } from "../Interfaces";
import type { Container } from "../Container";
import { InteractorType } from "../../Enums";
import type { Particle } from "../Particle";
export declare abstract class ExternalInteractorBase implements IExternalInteractor {
    protected readonly container: Container;
    protected constructor(container: Container);
    type: InteractorType;
    abstract interact(delta: IDelta): Promise<void>;
    abstract isEnabled(): boolean;
    abstract reset(particle: Particle): void;
}
