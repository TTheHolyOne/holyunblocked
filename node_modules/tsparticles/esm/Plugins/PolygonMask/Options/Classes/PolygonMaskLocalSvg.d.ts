import type { IDimension } from "../../../../Core";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import type { IPolygonMaskLocalSvg } from "../Interfaces/IPolygonMaskLocalSvg";
import type { RecursivePartial } from "../../../../Types";
import type { SingleOrMultiple } from "../../../../Types";
export declare class PolygonMaskLocalSvg implements IPolygonMaskLocalSvg, IOptionLoader<IPolygonMaskLocalSvg> {
    path: SingleOrMultiple<string>;
    size: IDimension;
    constructor();
    load(data?: RecursivePartial<IPolygonMaskLocalSvg>): void;
}
