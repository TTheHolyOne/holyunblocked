import type { IAnimatable } from "../../IAnimatable";
import type { IAnimation } from "../../IAnimation";
import type { IColor } from "../../../../Core";
import type { IValueWithRandom } from "../../IValueWithRandom";
export interface IOrbit extends IAnimatable<IAnimation> {
    color?: string | IColor;
    enable: boolean;
    radius?: number;
    rotation: IValueWithRandom;
    opacity: number;
    width: number;
}
