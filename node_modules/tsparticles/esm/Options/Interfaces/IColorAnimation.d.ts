import type { IAnimation } from "./IAnimation";
import type { RangeValue } from "../../Types";
export interface IColorAnimation extends IAnimation {
    offset: RangeValue;
}
