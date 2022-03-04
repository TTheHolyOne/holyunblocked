import { AbsorberSizeLimit } from "./AbsorberSizeLimit";
import type { IAbsorberSize } from "../Interfaces/IAbsorberSize";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types";
import { ValueWithRandom } from "../../../../Options/Classes/ValueWithRandom";
export declare class AbsorberSize extends ValueWithRandom implements IAbsorberSize, IOptionLoader<IAbsorberSize> {
    density: number;
    limit: AbsorberSizeLimit;
    constructor();
    load(data?: RecursivePartial<IAbsorberSize>): void;
}
