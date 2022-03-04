import { AbsorberSize } from "./AbsorberSize";
import type { IAbsorber } from "../Interfaces/IAbsorber";
import type { ICoordinates } from "../../../../Core";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import { OptionsColor } from "../../../../Options/Classes/OptionsColor";
import type { RecursivePartial } from "../../../../Types";
/**
 * [[include:Options/Plugins/Absorbers.md]]
 * @category Absorbers Plugin
 */
export declare class Absorber implements IAbsorber, IOptionLoader<IAbsorber> {
    color: OptionsColor;
    draggable: boolean;
    name?: string;
    opacity: number;
    position?: RecursivePartial<ICoordinates>;
    size: AbsorberSize;
    destroy: boolean;
    orbits: boolean;
    constructor();
    load(data?: RecursivePartial<IAbsorber>): void;
}
