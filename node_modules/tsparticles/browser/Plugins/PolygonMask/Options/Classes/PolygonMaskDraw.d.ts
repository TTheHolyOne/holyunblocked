import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import type { IPolygonMaskDraw } from "../Interfaces/IPolygonMaskDraw";
import { OptionsColor } from "../../../../Options/Classes/OptionsColor";
import { PolygonMaskDrawStroke } from "./PolygonMaskDrawStroke";
import type { RecursivePartial } from "../../../../Types";
/**
 * @category Polygon Mask Plugin
 */
export declare class PolygonMaskDraw implements IPolygonMaskDraw, IOptionLoader<IPolygonMaskDraw> {
    /**
     * @deprecated the property lineWidth is deprecated, please use the new stroke.width
     */
    get lineWidth(): number;
    /**
     * @deprecated the property lineWidth is deprecated, please use the new stroke.width
     */
    set lineWidth(value: number);
    /**
     * @deprecated the property lineColor is deprecated, please use the new stroke.color
     */
    get lineColor(): string | OptionsColor;
    /**
     * @deprecated the property lineColor is deprecated, please use the new stroke.color
     */
    set lineColor(value: string | OptionsColor);
    enable: boolean;
    stroke: PolygonMaskDrawStroke;
    constructor();
    load(data?: RecursivePartial<IPolygonMaskDraw>): void;
}
