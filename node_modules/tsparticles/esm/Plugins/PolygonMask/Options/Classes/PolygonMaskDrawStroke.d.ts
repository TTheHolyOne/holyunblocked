import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import type { IPolygonMaskDrawStroke } from "../Interfaces/IPolygonMaskDrawStroke";
import { OptionsColor } from "../../../../Options/Classes/OptionsColor";
import type { RecursivePartial } from "../../../../Types";
export declare class PolygonMaskDrawStroke implements IPolygonMaskDrawStroke, IOptionLoader<IPolygonMaskDrawStroke> {
    color: OptionsColor;
    width: number;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IPolygonMaskDrawStroke>): void;
}
