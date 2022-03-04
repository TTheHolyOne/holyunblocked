import type { PolygonMaskInlineArrangement, PolygonMaskInlineArrangementAlt } from "../../Enums";
export interface IPolygonMaskInline {
    arrangement: PolygonMaskInlineArrangement | keyof typeof PolygonMaskInlineArrangement | PolygonMaskInlineArrangementAlt;
}
