import { BackgroundMaskCover } from "./BackgroundMaskCover";
import type { IBackgroundMask } from "../../Interfaces/BackgroundMask/IBackgroundMask";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../Types";
/**
 * [[include:Options/BackgroundMask.md]]
 * @category Options
 */
export declare class BackgroundMask implements IBackgroundMask, IOptionLoader<IBackgroundMask> {
    /**
     * Canvas composite operation
     * values here: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
     */
    composite: string;
    /**
     * Background covering color
     */
    cover: BackgroundMaskCover;
    /**
     * Background mask enabling options
     */
    enable: boolean;
    constructor();
    load(data?: RecursivePartial<IBackgroundMask>): void;
}
