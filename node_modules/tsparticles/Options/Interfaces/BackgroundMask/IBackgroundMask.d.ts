import type { IBackgroundMaskCover } from "./IBackgroundMaskCover";
import type { IColor } from "../../../Core";
export interface IBackgroundMask {
    composite: string;
    cover: IBackgroundMaskCover | IColor | string;
    enable: boolean;
}
