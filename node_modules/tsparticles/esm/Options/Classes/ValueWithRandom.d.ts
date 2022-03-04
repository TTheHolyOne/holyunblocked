import type { RangeValue, RecursivePartial } from "../../Types";
import type { IOptionLoader } from "../Interfaces/IOptionLoader";
import type { IValueWithRandom } from "../Interfaces/IValueWithRandom";
import { Random } from "./Random";
export declare abstract class ValueWithRandom implements IValueWithRandom, IOptionLoader<IValueWithRandom> {
    random: Random;
    value: RangeValue;
    protected constructor();
    load(data?: RecursivePartial<IValueWithRandom>): void;
}
