import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { IParticles } from "../../../Interfaces/Particles/IParticles";
import type { ITrail } from "../../../Interfaces/Interactivity/Modes/ITrail";
import type { RecursivePartial } from "../../../../Types";
/**
 * @category Options
 */
export declare class Trail implements ITrail, IOptionLoader<ITrail> {
    delay: number;
    particles?: RecursivePartial<IParticles>;
    pauseOnStop: boolean;
    quantity: number;
    constructor();
    load(data?: RecursivePartial<ITrail>): void;
}
