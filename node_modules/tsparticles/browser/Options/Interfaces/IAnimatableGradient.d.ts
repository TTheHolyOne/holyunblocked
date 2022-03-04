import type { IAnimatableGradientColor, IOptionsGradient } from "./IOptionsGradient";
import type { IAnimatable } from "./IAnimatable";
import type { IAnimation } from "./IAnimation";
import type { IGradientAngle } from "../../Core";
export declare type IAnimatableGradient = IOptionsGradient & {
    angle: IGradientAngle & IAnimatable<IAnimation>;
    colors: IAnimatableGradientColor[];
};
