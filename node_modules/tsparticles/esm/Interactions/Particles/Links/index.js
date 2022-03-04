import { loadInteraction } from "./interaction";
import { loadPlugin } from "./plugin";
export async function loadParticlesLinksInteraction(engine) {
    await loadInteraction(engine);
    await loadPlugin(engine);
}
