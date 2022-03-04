import { TrailMaker } from "./TrailMaker";
export async function loadExternalTrailInteraction(engine) {
    await engine.addInteractor("externalTrail", (container) => new TrailMaker(container));
}
