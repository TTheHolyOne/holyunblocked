import type { IDelta } from "./IDelta";
import type { IInteractor } from "./IInteractor";
export interface IExternalInteractor extends IInteractor {
    isEnabled(): boolean;
    interact(delta: IDelta): Promise<void>;
}
