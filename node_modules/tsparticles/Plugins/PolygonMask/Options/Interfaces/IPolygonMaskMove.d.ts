import type { PolygonMaskMoveType } from "../../Enums";
export interface IPolygonMaskMove {
    radius: number;
    type: PolygonMaskMoveType | keyof typeof PolygonMaskMoveType;
}
