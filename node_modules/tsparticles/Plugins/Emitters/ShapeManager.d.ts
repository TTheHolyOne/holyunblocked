import type { Engine } from "../../engine";
import type { IEmitterShape } from "./IEmitterShape";
export declare class ShapeManager {
    #private;
    constructor(engine: Engine);
    addShape(name: string, drawer: IEmitterShape): void;
    getShape(name: string): IEmitterShape | undefined;
    getSupportedShapes(): IterableIterator<string>;
}
