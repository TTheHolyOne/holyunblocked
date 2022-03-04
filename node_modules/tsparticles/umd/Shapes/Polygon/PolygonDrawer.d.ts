import type { ICoordinates, IParticle } from "../../Core";
import type { ISide } from "./PolygonDrawerBase";
import { PolygonDrawerBase } from "./PolygonDrawerBase";
export declare class PolygonDrawer extends PolygonDrawerBase {
    getSidesData(particle: IParticle, radius: number): ISide;
    getCenter(particle: IParticle, radius: number): ICoordinates;
}
