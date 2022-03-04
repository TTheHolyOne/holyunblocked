import type { IValueWithRandom } from "../../../Interfaces/IValueWithRandom";
import type { RecursivePartial } from "../../../../Types";
import { ValueWithRandom } from "../../ValueWithRandom";
/**
 * @category Options
 */
export declare class OrbitRotation extends ValueWithRandom {
    constructor();
    load(data?: RecursivePartial<IValueWithRandom>): void;
}
