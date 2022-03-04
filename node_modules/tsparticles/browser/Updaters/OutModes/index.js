import { OutOfCanvasUpdater } from "./OutOfCanvasUpdater";
export async function loadOutModesUpdater(engine) {
    await engine.addParticleUpdater("outModes", (container) => new OutOfCanvasUpdater(container));
}
