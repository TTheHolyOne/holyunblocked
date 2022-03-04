import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { ISlow } from "../../../Interfaces/Interactivity/Modes/ISlow";
import type { RecursivePartial } from "../../../../Types";
/**
 * @category Options
 */
export declare class Slow implements ISlow, IOptionLoader<ISlow> {
    /**
     * @deprecated this property will be removed soon, please use the HoverMode.slow in the HoverEvent
     */
    get active(): boolean;
    /**
     * @deprecated this property will be removed soon, please use the HoverMode.slow in the HoverEvent
     */
    set active(_value: boolean);
    factor: number;
    radius: number;
    constructor();
    load(data?: RecursivePartial<ISlow>): void;
}
