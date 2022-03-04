import type { ICoordinates } from "../Interfaces";
import { Range } from "./Range";
/**
 * @category Utils
 */
export declare class Circle extends Range {
    readonly radius: number;
    constructor(x: number, y: number, radius: number);
    contains(point: ICoordinates): boolean;
    intersects(range: Range): boolean;
}
