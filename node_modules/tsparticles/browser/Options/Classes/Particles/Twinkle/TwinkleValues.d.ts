import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { ITwinkleValues } from "../../../Interfaces/Particles/Twinkle/ITwinkleValues";
import { OptionsColor } from "../../OptionsColor";
import type { RecursivePartial } from "../../../../Types";
/**
 * @category Options
 */
export declare class TwinkleValues implements ITwinkleValues, IOptionLoader<ITwinkleValues> {
    color?: OptionsColor;
    enable: boolean;
    frequency: number;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<ITwinkleValues>): void;
}
