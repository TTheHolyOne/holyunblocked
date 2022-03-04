import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import type { IPolygonMaskMove } from "../Interfaces/IPolygonMaskMove";
import { PolygonMaskMoveType } from "../../Enums";
import type { RecursivePartial } from "../../../../Types";
export declare class PolygonMaskMove implements IPolygonMaskMove, IOptionLoader<IPolygonMaskMove> {
    radius: number;
    type: PolygonMaskMoveType | keyof typeof PolygonMaskMoveType;
    constructor();
    load(data?: RecursivePartial<IPolygonMaskMove>): void;
}
