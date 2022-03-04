import type { IParticle, IShapeDrawer } from "../../Core";
export declare class StarDrawer implements IShapeDrawer {
    getSidesCount(particle: IParticle): number;
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number): void;
}
