import { AnimationOptions } from "../../AnimationOptions";
import type { IAnimatable } from "../../../Interfaces/IAnimatable";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { IOrbit } from "../../../Interfaces/Particles/Orbit/IOrbit";
import { OptionsColor } from "../../OptionsColor";
import { OrbitRotation } from "./OrbitRotation";
import type { RecursivePartial } from "../../../../Types";
/**
 * [[include:Options/Particles/Orbit.md]]
 * @category Options
 */
export declare class Orbit implements IOrbit, IOptionLoader<IOrbit>, IAnimatable<AnimationOptions> {
    animation: AnimationOptions;
    enable: boolean;
    opacity: number;
    width: number;
    color?: OptionsColor;
    radius?: number;
    rotation: OrbitRotation;
    constructor();
    load(data?: RecursivePartial<IOrbit>): void;
}
