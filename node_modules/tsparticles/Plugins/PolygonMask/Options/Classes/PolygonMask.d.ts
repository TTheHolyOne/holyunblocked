import { PolygonMaskInlineArrangement, PolygonMaskInlineArrangementAlt, PolygonMaskType } from "../../Enums";
import type { ICoordinates } from "../../../../Core";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import type { IPolygonMask } from "../Interfaces/IPolygonMask";
import { PolygonMaskDraw } from "./PolygonMaskDraw";
import { PolygonMaskInline } from "./PolygonMaskInline";
import { PolygonMaskLocalSvg } from "./PolygonMaskLocalSvg";
import { PolygonMaskMove } from "./PolygonMaskMove";
import type { RecursivePartial } from "../../../../Types";
export declare class PolygonMask implements IPolygonMask, IOptionLoader<IPolygonMask> {
    get inlineArrangement(): PolygonMaskInlineArrangement | keyof typeof PolygonMaskInlineArrangement | PolygonMaskInlineArrangementAlt;
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
