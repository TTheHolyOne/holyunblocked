import { Attractor } from "./Attractor";
export async function loadExternalAttractInteraction(engine) {
    await engine.addInteractor("externalAttract", (container) => new Attractor(container));
}
