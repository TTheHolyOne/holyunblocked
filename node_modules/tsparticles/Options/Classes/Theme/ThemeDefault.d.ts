import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
import type { IThemeDefault } from "../../Interfaces/Theme/IThemeDefault";
import type { RecursivePartial } from "../../../Types";
import { ThemeMode } from "../../../Enums";
export declare class ThemeDefault implements IThemeDefault, IOptionLoader<IThemeDefault> {
    auto: boolean;
    mode: ThemeMode | keyof ThemeMode;
    value: boolean;
    constructor();
    load(data?: RecursivePartial<IThemeDefault>): void;
}
