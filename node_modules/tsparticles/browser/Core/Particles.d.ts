import type { ICoordinates, IDelta, IMouseData, IParticle, IRgb } from "./Interfaces";
import { QuadTree } from "./Utils";
import type { Container } from "./Container";
import type { Engine } from "../engine";
import type { IParticles } from "../Options/Interfaces/Particles/IParticles";
import { Particle } from "./Particle";
import type { RecursivePartial } from "../Types";
/**
 * Particles manager object
 * @category Core
 */
export declare class Particles {
    #private;
    private readonly container;
    get count(): number;
    /**
     * The quad tree used to search particles withing ranges
     */
    quadTree: QuadTree;
    linksColors: Map<string, string | IRgb | undefined>;
    limit: number;
    needsSort: boolean;
    lastZIndex: number;
    /**
     * All the particles used in canvas
     */
    array: Particle[];
    zArray: Particle[];
    pushing?: boolean;
    linksColor?: IRgb | string;
    grabLineColor?: IRgb | string;
    updaters: import("./Interfaces").IParticleUpdater[];
    private interactionManager;
    private nextId;
    private readonly freqs;
    private readonly mover;
    constructor(engine: Engine, container: Container);
    init(): void;
    redraw(): Promise<void>;
    removeAt(index: number, quantity?: number, group?: string, override?: boolean): void;
    remove(particle: Particle, group?: string, override?: boolean): void;
    update(delta: IDelta): Promise<void>;
    draw(delta: IDelta): Promise<void>;
    /**
     * Removes all particles from the array
     */
    clear(): void;
    push(nb: number, mouse?: IMouseData, overrideOptions?: RecursivePartial<IParticles>, group?: string): void;
    addParticle(position?: ICoordinates, overrideOptions?: RecursivePartial<IParticles>, group?: string): Particle | undefined;
    addSplitParticle(parent: Particle): Particle | undefined;
    removeQuantity(quantity: number, group?: string): void;
    getLinkFrequency(p1: IParticle, p2: IParticle): number;
    getTriangleFrequency(p1: IParticle, p2: IParticle, p3: IParticle): number;
    addManualParticles(): void;
    setDensity(): void;
    private applyDensity;
    private initDensityFactor;
    private pushParticle;
}
