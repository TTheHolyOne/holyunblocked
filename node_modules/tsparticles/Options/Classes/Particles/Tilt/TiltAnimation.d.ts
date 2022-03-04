import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { ITiltAnimation } from "../../../Interfaces/Particles/Tilt/ITiltAnimation";
import type { RecursivePartial } from "../../../../Types";
export declare class TiltAnimation implements ITiltAnimation, IOptionLoader<ITiltAnimation> {
    enable: boolean;
    speed: number;
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<ITiltAnimation>): void;
}
