import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { ITrail } from "../../../Interfaces/Particles/Move/ITrail";
import { OptionsColor } from "../../OptionsColor";
import type { RecursivePartial } from "../../../../Types";
/**
 * @category Options
 */
export declare class Trail implements ITrail, IOptionLoader<ITrail> {
    enable: boolean;
    length: number;
    fillColor: OptionsColor;
    constructor();
    load(data?: RecursivePartial<ITrail>): void;
}
