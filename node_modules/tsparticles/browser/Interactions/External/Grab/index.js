import { Grabber } from "./Grabber";
export async function loadExternalGrabInteraction(engine) {
    await engine.addInteractor("externalGrab", (container) => new Grabber(container));
}
