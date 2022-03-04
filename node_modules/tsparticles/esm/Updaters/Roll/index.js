import { RollUpdater } from "./RollUpdater";
export async function loadRollUpdater(engine) {
    await engine.addParticleUpdater("roll", () => new RollUpdater());
}
