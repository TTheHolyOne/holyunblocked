import { Density } from "./Density";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { IParticlesNumber } from "../../../Interfaces/Particles/Number/IParticlesNumber";
import type { RecursivePartial } from "../../../../Types";
export declare class ParticlesNumber implements IParticlesNumber, IOptionLoader<IParticlesNumber> {
    get max(): number;
    set max(value: number);
    density: Density;
    limit: number;
    value: number;
    constructor();
    load(data?: RecursivePartial<IParticlesNumber>): void;
}
