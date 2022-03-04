import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { IParticles } from "../../../Interfaces/Particles/IParticles";
import type { ISplit } from "../../../Interfaces/Particles/Destroy/ISplit";
import { RecursivePartial } from "../../../../Types";
import { SplitFactor } from "./SplitFactor";
import { SplitRate } from "./SplitRate";
export declare class Split implements ISplit, IOptionLoader<ISplit> {
    count: number;
    factor: SplitFactor;
    rate: SplitRate;
    particles?: RecursivePartial<IParticles>;
    sizeOffset: boolean;
    constructor();
    load(data?: RecursivePartial<ISplit>): void;
}
