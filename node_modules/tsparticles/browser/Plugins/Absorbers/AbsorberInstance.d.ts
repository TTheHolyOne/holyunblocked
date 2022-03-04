import type { Container, ICoordinates, IRgb, Particle } from "../../Core";
import type { Absorbers } from "./Absorbers";
import type { IAbsorber } from "./Options/Interfaces/IAbsorber";
import { IAbsorberSizeLimit } from "./Options/Interfaces/IAbsorberSizeLimit";
import { RecursivePartial } from "../../Types";
import { RotateDirection } from "../../Enums";
import { Vector } from "../../Core";
declare type OrbitingParticle = Particle & {
    absorberOrbit?: Vector;
    absorberOrbitDirection?: RotateDirection;
    needsNewPosition?: boolean;
};
/**
 * @category Absorbers Plugin
 */
export declare class AbsorberInstance {
    private readonly absorbers;
    private readonly container;
    mass: number;
    opacity: number;
    size: number;
    color: IRgb;
    limit: IAbsorberSizeLimit;
    readonly name?: string;
    position: Vector;
    private dragging;
    private readonly initialPosition?;
    private readonly options;
    constructor(absorbers: Absorbers, container: Container, options: RecursivePartial<IAbsorber>, position?: ICoordinates);
    attract(particle: OrbitingParticle): void;
    resize(): void;
    draw(context: CanvasRenderingContext2D): void;
    private calcPosition;
    private updateParticlePosition;
}
export {};
