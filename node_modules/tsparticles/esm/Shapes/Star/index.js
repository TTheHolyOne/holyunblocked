import { StarDrawer } from "./StarDrawer";
export async function loadStarShape(engine) {
    await engine.addShape("star", new StarDrawer());
}
