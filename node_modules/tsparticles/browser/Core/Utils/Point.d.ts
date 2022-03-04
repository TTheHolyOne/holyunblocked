import type { ICoordinates } from "../Interfaces";
import type { Particle } from "../Particle";
/**
 * @category Utils
 */
export declare class Point {
    readonly position: ICoordinates;
    readonly particle: Particle;
    constructor(position: ICoordinates, particle: Particle);
}
