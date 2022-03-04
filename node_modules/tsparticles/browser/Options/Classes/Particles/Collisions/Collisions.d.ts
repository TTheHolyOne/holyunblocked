import { Bounce } from "../Bounce/Bounce";
import { CollisionMode } from "../../../../Enums";
import { CollisionsOverlap } from "./CollisionsOverlap";
import type { ICollisions } from "../../../Interfaces/Particles/Collisions/ICollisions";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types";
/**
 * @category Options
 * [[include:Collisions.md]]
 */
export declare class Collisions implements ICollisions, IOptionLoader<ICollisions> {
    bounce: Bounce;
    enable: boolean;
    mode: CollisionMode | keyof typeof CollisionMode;
    overlap: CollisionsOverlap;
    constructor();
    load(data?: RecursivePartial<ICollisions>): void;
}
