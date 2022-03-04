import type { IHsl, IHsv, IRgb, IValueColor } from "../../Core/Interfaces";
import type { RecursivePartial, SingleOrMultiple } from "../../Types";
import type { IOptionLoader } from "../Interfaces/IOptionLoader";
import type { IOptionsColor } from "../Interfaces/IOptionsColor";
/**
 * [[include:Color.md]]
 * @category Options
 */
export declare class OptionsColor implements IOptionsColor, IOptionLoader<IOptionsColor> {
    value: SingleOrMultiple<SingleOrMultiple<string> | IValueColor | IRgb | IHsl | IHsv>;
    constructor();
    static create(source?: OptionsColor, data?: SingleOrMultiple<string> | RecursivePartial<IOptionsColor>): OptionsColor;
    load(data?: RecursivePartial<IOptionsColor>): void;
}
