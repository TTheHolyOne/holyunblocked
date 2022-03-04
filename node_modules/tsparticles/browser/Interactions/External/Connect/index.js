import { Connector } from "./Connector";
export async function loadExternalConnectInteraction(engine) {
    await engine.addInteractor("externalConnect", (container) => new Connector(container));
}
