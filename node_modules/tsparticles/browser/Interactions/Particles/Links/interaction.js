import { Linker } from "./Linker";
export async function loadInteraction(engine) {
    await engine.addInteractor("particlesLinks", (container) => new Linker(container));
}
