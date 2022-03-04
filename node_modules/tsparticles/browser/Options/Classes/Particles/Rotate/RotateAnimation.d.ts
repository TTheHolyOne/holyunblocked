import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { IRotateAnimation } from "../../../Interfaces/Particles/Rotate/IRotateAnimation";
import type { RecursivePartial } from "../../../../Types";
/**
 * @category Options
 */
export declare class RotateAnimation implements IRotateAnimation, IOptionLoader<IRotateAnimation> {
    enable: boolean;
    speed: number;
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<IRotateAnimation>): void;
}
