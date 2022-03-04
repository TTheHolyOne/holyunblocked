import type { IParticle, IShapeDrawer } from "../../Core";
export declare class CircleDrawer implements IShapeDrawer {
    getSidesCount(): number;
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number): void;
}
