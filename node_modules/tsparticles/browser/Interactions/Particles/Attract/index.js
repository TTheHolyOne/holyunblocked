import { Attractor } from "./Attractor";
export async function loadParticlesAttractInteraction(engine) {
    await engine.addInteractor("particlesAttract", (container) => new Attractor(container));
}
