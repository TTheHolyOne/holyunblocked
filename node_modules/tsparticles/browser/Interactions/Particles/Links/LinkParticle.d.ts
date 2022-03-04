import type { ILink } from "./ILink";
import type { Particle } from "../../../Core";
export declare type LinkParticle = Particle & {
    links: ILink[];
};
