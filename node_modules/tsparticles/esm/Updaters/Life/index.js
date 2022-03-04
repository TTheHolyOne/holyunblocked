import { LifeUpdater } from "./LifeUpdater";
export async function loadLifeUpdater(engine) {
    await engine.addParticleUpdater("life", (container) => new LifeUpdater(container));
}
