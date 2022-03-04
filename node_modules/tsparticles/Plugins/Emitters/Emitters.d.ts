import type { Container, IContainerPlugin, ICoordinates, IDelta } from "../../Core";
import type { RecursivePartial, SingleOrMultiple } from "../../Types";
import { Emitter } from "./Options/Classes/Emitter";
import { EmitterInstance } from "./EmitterInstance";
import type { EmittersEngine } from "./EmittersEngine";
import type { IEmitter } from "./Options/Interfaces/IEmitter";
import type { IEmitterOptions } from "./Options/Interfaces/IEmitterOptions";
import type { IOptions } from "../../Options/Interfaces/IOptions";
export declare class Emitters implements IContainerPlugin {
    #private;
    private readonly container;
    array: EmitterInstance[];
    emitters: SingleOrMultiple<Emitter>;
    interactivityEmitters: SingleOrMultiple<Emitter>;
    constructor(engine: EmittersEngine, container: Container);
    init(options?: RecursivePartial<IOptions & IEmitterOptions>): void;
    play(): void;
    pause(): void;
    stop(): void;
    update(delta: IDelta): void;
    handleClickMode(mode: string): void;
    resize(): void;
    addEmitter(options: IEmitter, position?: ICoordinates): EmitterInstance;
    removeEmitter(emitter: EmitterInstance): void;
}
