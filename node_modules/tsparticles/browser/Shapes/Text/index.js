import { TextDrawer, validTypes } from "./TextDrawer";
export async function loadTextShape(engine) {
    const drawer = new TextDrawer();
    for (const type of validTypes) {
        await engine.addShape(type, drawer);
    }
}
