import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import type { IPolygonMaskDraw } from "../Interfaces/IPolygonMaskDraw";
import { OptionsColor } from "../../../../Options/Classes/OptionsColor";
import { PolygonMaskDrawStroke } from "./PolygonMaskDrawStroke";
import type { RecursivePartial } from "../../../../Types";
export declare class PolygonMaskDraw implements IPolygonMaskDraw, IOptionLoader<IPolygonMaskDraw> {
    get lineWidth(): number;
    set lineWidth(value: number);
    get lineColor(): string | OptionsColor;
    set lineColor(value: string | OptionsColor);
    enable: boolean;
    stroke: PolygonMaskDrawStroke;
    constructor();
    load(data?: RecursivePartial<IPolygonMaskDraw>): void;
}
