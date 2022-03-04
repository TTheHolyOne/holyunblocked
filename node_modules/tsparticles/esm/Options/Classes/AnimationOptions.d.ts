import { IAnimation } from "../Interfaces/IAnimation";
import { IOptionLoader } from "../Interfaces/IOptionLoader";
import { RecursivePartial } from "../../Types";
export declare class AnimationOptions implements IAnimation, IOptionLoader<IAnimation> {
    count: number;
    enable: boolean;
    speed: number;
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<IAnimation>): void;
}
