import { Repulser } from "./Repulser";
export async function loadExternalRepulseInteraction(engine) {
    await engine.addInteractor("externalRepulse", (container) => new Repulser(container));
}
