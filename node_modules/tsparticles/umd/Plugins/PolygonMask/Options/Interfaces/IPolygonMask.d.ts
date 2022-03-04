import type { PolygonMaskInlineArrangement, PolygonMaskInlineArrangementAlt, PolygonMaskType } from "../../Enums";
import type { ICoordinates } from "../../../../Core";
import type { IPolygonMaskDraw } from "./IPolygonMaskDraw";
import type { IPolygonMaskInline } from "./IPolygonMaskInline";
import type { IPolygonMaskLocalSvg } from "./IPolygonMaskLocalSvg";
import type { IPolygonMaskMove } from "./IPolygonMaskMove";
export interface IPolygonMask {
    draw: IPolygonMaskDraw;
    enable: boolean;
    inline: IPolygonMaskInline;
    inlineArrangement: PolygonMaskInlineArrangement | keyof typeof PolygonMaskInlineArrangement | PolygonMaskInlineArrangementAlt;
    move: IPolygonMaskMove;
    position?: ICoordinates;
    scale: number;
    type: PolygonMaskType;
    url?: string;
    data?: string | IPolygonMaskLocalSvg;
}
