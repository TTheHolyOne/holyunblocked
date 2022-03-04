import { SquareDrawer } from "./SquareDrawer";
export async function loadSquareShape(engine) {
    const drawer = new SquareDrawer();
    await engine.addShape("edge", drawer);
    await engine.addShape("square", drawer);
}
