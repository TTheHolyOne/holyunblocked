import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { IRepulse } from "../../../Interfaces/Interactivity/Modes/IRepulse";
import { RepulseBase } from "./RepulseBase";
import { RepulseDiv } from "./RepulseDiv";
export declare class Repulse extends RepulseBase implements IRepulse, IOptionLoader<IRepulse> {
    divs?: SingleOrMultiple<RepulseDiv>;
    load(data?: RecursivePartial<IRepulse>): void;
}
