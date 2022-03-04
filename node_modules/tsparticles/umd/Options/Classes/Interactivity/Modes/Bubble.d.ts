import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import { BubbleBase } from "./BubbleBase";
import { BubbleDiv } from "./BubbleDiv";
import type { IBubble } from "../../../Interfaces/Interactivity/Modes/IBubble";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Bubble extends BubbleBase implements IBubble, IOptionLoader<IBubble> {
    divs?: SingleOrMultiple<BubbleDiv>;
    load(data?: RecursivePartial<IBubble>): void;
}
