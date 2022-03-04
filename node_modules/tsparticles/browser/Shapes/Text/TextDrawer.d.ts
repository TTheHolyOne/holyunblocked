import type { Container, IParticle, IShapeDrawer } from "../../Core";
export declare const validTypes: string[];
/**
 * @category Shape Drawers
 */
export declare class TextDrawer implements IShapeDrawer {
    getSidesCount(): number;
    init(container: Container): Promise<void>;
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number, opacity: number): void;
}
