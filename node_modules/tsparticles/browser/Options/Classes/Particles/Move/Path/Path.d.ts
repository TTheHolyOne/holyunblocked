import type { PathOptions, RecursivePartial } from "../../../../../Types";
import type { IOptionLoader } from "../../../../Interfaces/IOptionLoader";
import type { IPath } from "../../../../Interfaces/Particles/Move/Path/IPath";
import { PathDelay } from "./PathDelay";
/**
 * @category Options
 */
export declare class Path implements IPath, IOptionLoader<IPath> {
    clamp: boolean;
    delay: PathDelay;
    enable: boolean;
    options: PathOptions;
    generator?: string;
    constructor();
    load(data?: RecursivePartial<IPath>): void;
}
