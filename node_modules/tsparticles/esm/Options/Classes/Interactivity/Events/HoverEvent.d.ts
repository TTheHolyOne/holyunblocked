import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import { HoverMode } from "../../../../Enums";
import type { IHoverEvent } from "../../../Interfaces/Interactivity/Events/IHoverEvent";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { Parallax } from "./Parallax";
export declare class HoverEvent implements IHoverEvent, IOptionLoader<IHoverEvent> {
    enable: boolean;
    mode: SingleOrMultiple<HoverMode | keyof typeof HoverMode | string>;
    parallax: Parallax;
    constructor();
    load(data?: RecursivePartial<IHoverEvent>): void;
}
