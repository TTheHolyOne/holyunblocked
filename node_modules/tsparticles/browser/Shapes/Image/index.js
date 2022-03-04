import { ImageDrawer } from "./ImageDrawer";
export async function loadImageShape(engine) {
    const imageDrawer = new ImageDrawer();
    await engine.addShape("image", imageDrawer);
    await engine.addShape("images", imageDrawer);
}
