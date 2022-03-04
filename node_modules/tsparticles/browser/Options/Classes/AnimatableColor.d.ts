import type { RecursivePartial, SingleOrMultiple } from "../../Types";
import { HslAnimation } from "./HslAnimation";
import type { IAnimatableColor } from "../Interfaces/IAnimatableColor";
import type { IOptionLoader } from "../Interfaces/IOptionLoader";
import { OptionsColor } from "./OptionsColor";
/**
 * [[include:Options/Particles/Color.md]]
 * @category Options
 */
export declare class AnimatableColor extends OptionsColor implements IAnimatableColor, IOptionLoader<IAnimatableColor> {
    animation: HslAnimation;
    constructor();
    static create(source?: AnimatableColor, data?: SingleOrMultiple<string> | RecursivePartial<IAnimatableColor>): AnimatableColor;
    load(data?: RecursivePartial<IAnimatableColor>): void;
}
