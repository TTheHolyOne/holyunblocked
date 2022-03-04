import { LineDrawer } from "./LineDrawer";
export async function loadLineShape(engine) {
    await engine.addShape("line", new LineDrawer());
}
