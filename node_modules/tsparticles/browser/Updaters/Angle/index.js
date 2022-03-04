import { AngleUpdater } from "./AngleUpdater";
export async function loadAngleUpdater(engine) {
    await engine.addParticleUpdater("angle", (container) => new AngleUpdater(container));
}
