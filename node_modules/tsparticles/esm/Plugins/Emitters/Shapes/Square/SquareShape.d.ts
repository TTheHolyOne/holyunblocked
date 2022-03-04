import type { ICoordinates, IDimension } from "../../../../Core";
import type { IEmitterShape } from "../../IEmitterShape";
export declare class SquareShape implements IEmitterShape {
    randomPosition(position: ICoordinates, size: IDimension, fill: boolean): ICoordinates;
}
