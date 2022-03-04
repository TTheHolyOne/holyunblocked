import { ConnectLinks } from "./ConnectLinks";
import type { IConnect } from "../../../Interfaces/Interactivity/Modes/IConnect";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types";
/**
 * @category Options
 */
export declare class Connect implements IConnect, IOptionLoader<IConnect> {
    /**
     *
     * @deprecated this property is obsolete, please use the new links
     */
    get line_linked(): ConnectLinks;
    /**
     *
     * @deprecated this property is obsolete, please use the new links
     * @param value
     */
    set line_linked(value: ConnectLinks);
    /**
     *
     * @deprecated this property is obsolete, please use the new links
     */
    get lineLinked(): ConnectLinks;
    /**
     *
     * @deprecated this property is obsolete, please use the new links
     * @param value
     */
    set lineLinked(value: ConnectLinks);
    distance: number;
    links: ConnectLinks;
    radius: number;
    constructor();
    load(data?: RecursivePartial<IConnect>): void;
}
