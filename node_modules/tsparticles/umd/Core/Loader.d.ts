import { Container } from "./Container";
import type { Engine } from "../engine";
import type { IOptions } from "../Options/Interfaces/IOptions";
import type { Particle } from "./Particle";
import type { RecursivePartial } from "../Types";
import type { SingleOrMultiple } from "../Types";
interface LoaderParams {
    element?: HTMLElement;
    index?: number;
    options?: SingleOrMultiple<RecursivePartial<IOptions>>;
    tagId?: string;
}
interface RemoteLoaderParams {
    element?: HTMLElement;
    index?: number;
    tagId?: string;
    url?: SingleOrMultiple<string>;
}
export declare class Loader {
    #private;
    constructor(engine: Engine);
    dom(): Container[];
    domItem(index: number): Container | undefined;
    loadOptions(params: LoaderParams): Promise<Container | undefined>;
    loadRemoteOptions(params: RemoteLoaderParams): Promise<Container | undefined>;
    load(tagId: string | SingleOrMultiple<RecursivePartial<IOptions>>, options?: SingleOrMultiple<RecursivePartial<IOptions>> | number, index?: number): Promise<Container | undefined>;
    set(id: string | HTMLElement, domContainer: HTMLElement | SingleOrMultiple<RecursivePartial<IOptions>>, options?: SingleOrMultiple<RecursivePartial<IOptions>> | number, index?: number): Promise<Container | undefined>;
    loadJSON(tagId: string | SingleOrMultiple<string>, jsonUrl?: SingleOrMultiple<string> | number, index?: number): Promise<Container | undefined>;
    setJSON(id: string | HTMLElement, domContainer: HTMLElement | SingleOrMultiple<string>, jsonUrl: SingleOrMultiple<string> | (number | undefined), index?: number): Promise<Container | undefined>;
    setOnClickHandler(callback: (evt: Event, particles?: Particle[]) => void): void;
}
export {};
