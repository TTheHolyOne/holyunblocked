import type { IEmitterLife } from "../Interfaces/IEmitterLife";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types";
export declare class EmitterLife implements IEmitterLife, IOptionLoader<IEmitterLife> {
    count?: number;
    delay?: number;
    duration?: number;
    wait: boolean;
    constructor();
    load(data?: RecursivePartial<IEmitterLife>): void;
}
