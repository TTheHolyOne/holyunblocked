import type { ICoordinates, IParticle } from "../../Core";
import type { ISide } from "./PolygonDrawerBase";
import { PolygonDrawerBase } from "./PolygonDrawerBase";
export declare class TriangleDrawer extends PolygonDrawerBase {
    getSidesCount(): number;
    getSidesData(particle: IParticle, radius: number): ISide;
    getCenter(particle: IParticle, radius: number): ICoordinates;
}
