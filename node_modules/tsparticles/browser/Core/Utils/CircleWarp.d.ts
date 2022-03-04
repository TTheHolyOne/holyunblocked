import type { ICoordinates, IDimension } from "../Interfaces";
import { Circle } from "./Circle";
import { Range } from "./Range";
/**
 * @category Utils
 */
export declare class CircleWarp extends Circle {
    private readonly canvasSize;
    constructor(x: number, y: number, radius: number, canvasSize: IDimension);
    contains(point: ICoordinates): boolean;
    intersects(range: Range): boolean;
}
