import { SizeUpdater } from "./SizeUpdater";
export async function loadSizeUpdater(engine) {
    await engine.addParticleUpdater("size", () => new SizeUpdater());
}
