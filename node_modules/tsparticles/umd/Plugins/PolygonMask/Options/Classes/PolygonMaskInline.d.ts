import { PolygonMaskInlineArrangement, PolygonMaskInlineArrangementAlt } from "../../Enums";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import type { IPolygonMaskInline } from "../Interfaces/IPolygonMaskInline";
import type { RecursivePartial } from "../../../../Types";
export declare class PolygonMaskInline implements IPolygonMaskInline, IOptionLoader<IPolygonMaskInline> {
    arrangement: PolygonMaskInlineArrangement | keyof typeof PolygonMaskInlineArrangement | PolygonMaskInlineArrangementAlt;
    constructor();
    load(data?: RecursivePartial<IPolygonMaskInline>): void;
}
