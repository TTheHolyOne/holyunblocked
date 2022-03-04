import type { IAbsorberSizeLimit } from "../Interfaces/IAbsorberSizeLimit";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types";
export declare class AbsorberSizeLimit implements IAbsorberSizeLimit, IOptionLoader<IAbsorberSizeLimit> {
    radius: number;
    mass: number;
    constructor();
    load(data?: RecursivePartial<IAbsorberSizeLimit>): void;
}
