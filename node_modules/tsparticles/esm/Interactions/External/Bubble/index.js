import { Bubbler } from "./Bubbler";
export async function loadExternalBubbleInteraction(engine) {
    await engine.addInteractor("externalBubble", (container) => new Bubbler(container));
}
