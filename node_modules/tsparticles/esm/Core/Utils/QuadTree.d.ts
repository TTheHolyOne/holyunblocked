import type { ICoordinates, IDimension } from "../Interfaces";
import type { Container } from "../Container";
import type { Particle } from "../Particle";
import type { Point } from "./Point";
import type { Range } from "./Range";
import { Rectangle } from "./Rectangle";
export declare class QuadTree {
    readonly rectangle: Rectangle;
    readonly capacity: number;
    readonly points: Point[];
    private northEast?;
    private northWest?;
    private southEast?;
    private southWest?;
    private divided;
    constructor(rectangle: Rectangle, capacity: number);
    subdivide(): void;
    insert(point: Point): boolean;
    queryCircle(position: ICoordinates, radius: number): Particle[];
    queryCircleWarp(position: ICoordinates, radius: number, containerOrSize: Container | IDimension): Particle[];
    queryRectangle(position: ICoordinates, size: IDimension): Particle[];
    query(range: Range, found?: Particle[]): Particle[];
}
