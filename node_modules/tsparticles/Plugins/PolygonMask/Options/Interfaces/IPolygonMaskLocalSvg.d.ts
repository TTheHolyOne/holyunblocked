import type { IDimension } from "../../../../Core";
import type { SingleOrMultiple } from "../../../../Types";
export interface IPolygonMaskLocalSvg {
    path: SingleOrMultiple<string>;
    size: IDimension;
}
