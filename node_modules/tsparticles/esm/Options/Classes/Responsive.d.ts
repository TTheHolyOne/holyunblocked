import type { IOptionLoader } from "../Interfaces/IOptionLoader";
import type { IOptions } from "../Interfaces/IOptions";
import type { IResponsive } from "../Interfaces/IResponsive";
import type { RecursivePartial } from "../../Types";
import { ResponsiveMode } from "../../Enums";
export declare class Responsive implements IResponsive, IOptionLoader<IResponsive> {
    maxWidth: number;
    options: RecursivePartial<IOptions>;
    mode: ResponsiveMode;
    constructor();
    load(data?: RecursivePartial<IResponsive>): void;
}
