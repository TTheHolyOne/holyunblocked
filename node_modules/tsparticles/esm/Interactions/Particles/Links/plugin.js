import { LinkInstance } from "./LinkInstance";
class LinksPlugin {
    constructor() {
        this.id = "links";
    }
    getPlugin(container) {
        return new LinkInstance(container);
    }
    needsPlugin() {
        return true;
    }
    loadOptions() {
    }
}
export async function loadPlugin(engine) {
    const plugin = new LinksPlugin();
    await engine.addPlugin(plugin);
}
