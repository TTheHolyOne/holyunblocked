import type { ICoordinates, IDimension } from "../Interfaces";
import { Range } from "./Range";
/**
 * @category Utils
 */
export declare class Rectangle extends Range {
    readonly size: IDimension;
    constructor(x: number, y: number, width: number, height: number);
    contains(point: ICoordinates): boolean;
    intersects(range: Range): boolean;
}
