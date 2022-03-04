import type { IRandom } from "./IRandom";
import type { RangeValue } from "../../Types";
export interface IValueWithRandom {
    random: boolean | IRandom;
    value: RangeValue;
}
