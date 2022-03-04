import type { ICoordinates, IDimension } from "../../../../Core";
import type { IEmitterShape } from "../../IEmitterShape";
export declare class CircleShape implements IEmitterShape {
    randomPosition(position: ICoordinates, size: IDimension, fill: boolean): ICoordinates;
}
