/**
 * @category Interfaces
 */
import type { IHsl, IParticle, Particle } from "../../Core";
import type { IImageShape } from "../../Options/Interfaces/Particles/Shape/IImageShape";
export interface IImage {
    source: string;
    type: string;
    element?: HTMLImageElement;
    svgData?: string;
    error: boolean;
    loading: boolean;
}
export interface IParticleImage {
    source: string;
    data: IImage;
    ratio: number;
    element?: HTMLImageElement;
    loaded?: boolean;
    replaceColor: boolean;
}
export interface ContainerImage {
    id: string;
    images: IImage[];
}
export declare type IImageParticle = IParticle & {
    image?: IParticleImage;
};
export declare function loadImage(image: IImage): Promise<void>;
export declare function downloadSvgImage(image: IImage): Promise<void>;
export declare function replaceImageColor(image: IImage, imageData: IImageShape, color: IHsl, particle: Particle): IParticleImage;
