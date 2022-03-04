import type { IContainerPlugin, IInteractor, IMovePathGenerator, IParticleUpdater, IPlugin, IShapeDrawer } from "../Interfaces";
import type { Container } from "../Container";
import type { Engine } from "../../engine";
import type { IOptions } from "../../Options/Interfaces/IOptions";
import type { Options } from "../../Options/Classes/Options";
import type { RecursivePartial } from "../../Types";
declare type InteractorInitializer = (container: Container) => IInteractor;
declare type UpdaterInitializer = (container: Container) => IParticleUpdater;
/**
 * @category Utils
 */
export declare class Plugins {
    #private;
    readonly plugins: IPlugin[];
    readonly interactorsInitializers: Map<string, InteractorInitializer>;
    readonly updatersInitializers: Map<string, UpdaterInitializer>;
    readonly interactors: Map<Container, IInteractor[]>;
    readonly updaters: Map<Container, IParticleUpdater[]>;
    readonly presets: Map<string, RecursivePartial<IOptions>>;
    readonly drawers: Map<string, IShapeDrawer>;
    readonly pathGenerators: Map<string, IMovePathGenerator>;
    constructor(engine: Engine);
    getPlugin(plugin: string): IPlugin | undefined;
    addPlugin(plugin: IPlugin): void;
    getAvailablePlugins(container: Container): Map<string, IContainerPlugin>;
    loadOptions(options: Options, sourceOptions: RecursivePartial<IOptions>): void;
    getPreset(preset: string): RecursivePartial<IOptions> | undefined;
    addPreset(presetKey: string, options: RecursivePartial<IOptions>, override?: boolean): void;
    addShapeDrawer(type: string, drawer: IShapeDrawer): void;
    getShapeDrawer(type: string): IShapeDrawer | undefined;
    getSupportedShapes(): IterableIterator<string>;
    getPathGenerator(type: string): IMovePathGenerator | undefined;
    addPathGenerator(type: string, pathGenerator: IMovePathGenerator): void;
    getInteractors(container: Container, force?: boolean): IInteractor[];
    addInteractor(name: string, initInteractor: (container: Container) => IInteractor): void;
    getUpdaters(container: Container, force?: boolean): IParticleUpdater[];
    addParticleUpdater(name: string, initUpdater: (container: Container) => IParticleUpdater): void;
}
export {};
