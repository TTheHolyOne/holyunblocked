import { Bouncer } from "./Bouncer";
export async function loadExternalBounceInteraction(engine) {
    await engine.addInteractor("externalBounce", (container) => new Bouncer(container));
}
