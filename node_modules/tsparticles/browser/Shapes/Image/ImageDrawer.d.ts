import type { Container, IShapeDrawer, Particle } from "../../Core";
import type { IImage, IImageParticle } from "./Utils";
interface ContainerImage {
    id: string;
    images: IImage[];
}
/**
 * @category Shape Drawers
 */
export declare class ImageDrawer implements IShapeDrawer {
    #private;
    constructor();
    getSidesCount(): number;
    getImages(container: Container): ContainerImage;
    addImage(container: Container, image: IImage): void;
    destroy(): void;
    private loadImageShape;
    draw(context: CanvasRenderingContext2D, particle: IImageParticle, radius: number, opacity: number): void;
    loadShape(particle: Particle): void;
}
export {};
