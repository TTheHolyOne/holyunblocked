import { GrabLinks } from "./GrabLinks";
import type { IGrab } from "../../../Interfaces/Interactivity/Modes/IGrab";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types";
/**
 * @category Options
 */
export declare class Grab implements IGrab, IOptionLoader<IGrab> {
    /**
     *
     * @deprecated this property is obsolete, please use the new links
     */
    get line_linked(): GrabLinks;
    /**
     *
     * @deprecated this property is obsolete, please use the new links
     * @param value
     */
    set line_linked(value: GrabLinks);
    /**
     *
     * @deprecated this property is obsolete, please use the new links
     */
    get lineLinked(): GrabLinks;
    /**
     *
     * @deprecated this property is obsolete, please use the new links
     * @param value
     */
    set lineLinked(value: GrabLinks);
    distance: number;
    links: GrabLinks;
    constructor();
    load(data?: RecursivePartial<IGrab>): void;
}
