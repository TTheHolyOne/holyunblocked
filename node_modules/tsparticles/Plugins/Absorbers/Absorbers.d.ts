import type { Container, IContainerPlugin, ICoordinates, Particle } from "../../Core";
import type { RecursivePartial, SingleOrMultiple } from "../../Types";
import { Absorber } from "./Options/Classes/Absorber";
import { AbsorberInstance } from "./AbsorberInstance";
import type { IAbsorber } from "./Options/Interfaces/IAbsorber";
import type { IAbsorberOptions } from "./Options/Interfaces/IAbsorberOptions";
import type { IOptions } from "../../Options/Interfaces/IOptions";
export declare class Absorbers implements IContainerPlugin {
    private readonly container;
    array: AbsorberInstance[];
    absorbers: SingleOrMultiple<Absorber>;
    interactivityAbsorbers: SingleOrMultiple<Absorber>;
    constructor(container: Container);
    init(options?: RecursivePartial<IOptions & IAbsorberOptions>): void;
    particleUpdate(particle: Particle): void;
    draw(context: CanvasRenderingContext2D): void;
    stop(): void;
    resize(): void;
    handleClickMode(mode: string): void;
    addAbsorber(options: IAbsorber, position?: ICoordinates): AbsorberInstance;
    removeAbsorber(absorber: AbsorberInstance): void;
}
