import type { Container, IInteractor, IMovePathGenerator, IParticleUpdater, IPlugin, IShapeDrawer, Particle } from "./Core";
import { Plugins } from "./Core";
import type { RecursivePartial, ShapeDrawerAfterEffectFunction, ShapeDrawerDestroyFunction, ShapeDrawerDrawFunction, ShapeDrawerInitFunction, SingleOrMultiple } from "./Types";
import type { IOptions } from "./Options/Interfaces/IOptions";
export declare class Engine {
    #private;
    readonly domArray: Container[];
    readonly plugins: Plugins;
    constructor();
    init(): void;
    loadFromArray(tagId: string, options: RecursivePartial<IOptions>[], index?: number): Promise<Container | undefined>;
    load(tagId: string | SingleOrMultiple<RecursivePartial<IOptions>>, options?: SingleOrMultiple<RecursivePartial<IOptions>>): Promise<Container | undefined>;
    set(id: string | HTMLElement, element: HTMLElement | RecursivePartial<IOptions>, options?: RecursivePartial<IOptions>): Promise<Container | undefined>;
    loadJSON(tagId: string | SingleOrMultiple<string>, pathConfigJson?: SingleOrMultiple<string> | number, index?: number): Promise<Container | undefined>;
    setJSON(id: string | HTMLElement, element: HTMLElement | SingleOrMultiple<string>, pathConfigJson?: SingleOrMultiple<string> | number, index?: number): Promise<Container | undefined>;
    setOnClickHandler(callback: (e: Event, particles?: Particle[]) => void): void;
    dom(): Container[];
    domItem(index: number): Container | undefined;
    refresh(): Promise<void>;
    addShape(shape: string, drawer: IShapeDrawer | ShapeDrawerDrawFunction, init?: ShapeDrawerInitFunction, afterEffect?: ShapeDrawerAfterEffectFunction, destroy?: ShapeDrawerDestroyFunction): Promise<void>;
    addPreset(preset: string, options: RecursivePartial<IOptions>, override?: boolean): Promise<void>;
    addPlugin(plugin: IPlugin): Promise<void>;
    addPathGenerator(name: string, generator: IMovePathGenerator): Promise<void>;
    addInteractor(name: string, interactorInitializer: (container: Container) => IInteractor): Promise<void>;
    addParticleUpdater(name: string, updaterInitializer: (container: Container) => IParticleUpdater): Promise<void>;
}
