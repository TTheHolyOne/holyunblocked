import { PolygonMaskInlineArrangement, PolygonMaskInlineArrangementAlt, PolygonMaskType } from "../../Enums";
import type { ICoordinates } from "../../../../Core";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import type { IPolygonMask } from "../Interfaces/IPolygonMask";
import { PolygonMaskDraw } from "./PolygonMaskDraw";
import { PolygonMaskInline } from "./PolygonMaskInline";
import { PolygonMaskLocalSvg } from "./PolygonMaskLocalSvg";
import { PolygonMaskMove } from "./PolygonMaskMove";
import type { RecursivePartial } from "../../../../Types";
/**
 * [[include:Options/Plugins/PolygonMask.md]]
 * @category Polygon Mask Plugin
 */
export declare class PolygonMask implements IPolygonMask, IOptionLoader<IPolygonMask> {
    /**
     * @deprecated the property inlineArrangement is deprecated, please use the new inline.arrangement
     */
    get inlineArrangement(): PolygonMaskInlineArrangement | keyof typeof PolygonMaskInlineArrangement | PolygonMaskInlineArrangementAlt;
    /**
     * @deprecated the property inlineArrangement is deprecated, please use the new inline.arrangement
     */
    set inlineArrangement(value: PolygonMaskInlineArrangement | keyof typeof PolygonMaskInlineArrangement | PolygonMaskInlineArrangementAlt);
    draw: PolygonMaskDraw;
    enable: boolean;
    inline: PolygonMaskInline;
    move: PolygonMaskMove;
    position?: ICoordinates;
    scale: number;
    type: PolygonMaskType;
    url?: string;
    data?: string | PolygonMaskLocalSvg;
    constructor();
    load(data?: RecursivePartial<IPolygonMask>): void;
}
