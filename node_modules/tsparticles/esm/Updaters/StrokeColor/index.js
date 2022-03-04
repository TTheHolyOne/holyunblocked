import { StrokeColorUpdater } from "./StrokeColorUpdater";
export async function loadStrokeColorUpdater(engine) {
    await engine.addParticleUpdater("strokeColor", (container) => new StrokeColorUpdater(container));
}
