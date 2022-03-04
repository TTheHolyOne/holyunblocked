import { ColorUpdater } from "./ColorUpdater";
export async function loadColorUpdater(engine) {
    await engine.addParticleUpdater("color", (container) => new ColorUpdater(container));
}
