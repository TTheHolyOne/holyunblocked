import { TiltUpdater } from "./TiltUpdater";
export async function loadTiltUpdater(engine) {
    await engine.addParticleUpdater("tilt", (container) => new TiltUpdater(container));
}
