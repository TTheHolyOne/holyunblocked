import { BackgroundMaskCover } from "./BackgroundMaskCover";
import type { IBackgroundMask } from "../../Interfaces/BackgroundMask/IBackgroundMask";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../Types";
export declare class BackgroundMask implements IBackgroundMask, IOptionLoader<IBackgroundMask> {
    composite: string;
    cover: BackgroundMaskCover;
    enable: boolean;
    constructor();
    load(data?: RecursivePartial<IBackgroundMask>): void;
}
