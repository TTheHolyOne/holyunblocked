import type { IColor } from "../../../../Core";
import type { IPolygonMaskDrawStroke } from "./IPolygonMaskDrawStroke";
export interface IPolygonMaskDraw {
    enable: boolean;
    lineColor: string | IColor;
    lineWidth: number;
    stroke: IPolygonMaskDrawStroke;
}
