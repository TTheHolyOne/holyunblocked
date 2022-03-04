import type { Container } from "./Core";
import type { Engine } from "./engine";
import type { IOptions } from "./Options/Interfaces/IOptions";
import type { RecursivePartial } from "./Types";
export interface IParticlesJS {
    (tagId: string, options: RecursivePartial<IOptions>): Promise<Container | undefined>;
    load(tagId: string, pathConfigJson: string, callback: (container?: Container) => void): void;
    setOnClickHandler(callback: EventListenerOrEventListenerObject): void;
}
declare const initPjs: (engine: Engine) => {
    particlesJS: IParticlesJS;
    pJSDom: Container[];
};
export { initPjs };
