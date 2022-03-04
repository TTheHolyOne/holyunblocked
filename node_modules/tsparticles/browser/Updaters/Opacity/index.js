import { OpacityUpdater } from "./OpacityUpdater";
export async function loadOpacityUpdater(engine) {
    await engine.addParticleUpdater("opacity", (container) => new OpacityUpdater(container));
}
