import { WobbleUpdater } from "./WobbleUpdater";
export async function loadWobbleUpdater(engine) {
    await engine.addParticleUpdater("wobble", (container) => new WobbleUpdater(container));
}
