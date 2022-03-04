import type { ICoordinates } from "../../Core";
import type { IManualParticle } from "../Interfaces/IManualParticle";
import type { IOptionLoader } from "../Interfaces/IOptionLoader";
import type { IParticles } from "../Interfaces/Particles/IParticles";
import type { RecursivePartial } from "../../Types";
export declare class ManualParticle implements IManualParticle, IOptionLoader<IManualParticle> {
    options?: RecursivePartial<IParticles>;
    position?: ICoordinates;
    load(data?: RecursivePartial<IManualParticle>): void;
}
