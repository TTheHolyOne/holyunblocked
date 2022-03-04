import type { RangeValue, RecursivePartial } from "../../../../Types";
import type { ICoordinates } from "../../../../Core";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { ISpin } from "../../../Interfaces/Particles/Move/ISpin";
export declare class Spin implements ISpin, IOptionLoader<ISpin> {
    acceleration: RangeValue;
    enable: boolean;
    position?: ICoordinates;
    constructor();
    load(data?: RecursivePartial<ISpin>): void;
}
