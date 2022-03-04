import { Collider } from "./Collider";
export async function loadParticlesCollisionsInteraction(engine) {
    await engine.addInteractor("particlesCollisions", (container) => new Collider(container));
}
