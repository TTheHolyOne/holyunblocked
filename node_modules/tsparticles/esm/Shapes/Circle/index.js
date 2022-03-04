import { CircleDrawer } from "./CircleDrawer";
export async function loadCircleShape(engine) {
    await engine.addShape("circle", new CircleDrawer());
}
