import { PolygonDrawer } from "./PolygonDrawer";
import { TriangleDrawer } from "./TriangleDrawer";
export async function loadGenericPolygonShape(engine) {
    await engine.addShape("polygon", new PolygonDrawer());
}
export async function loadTriangleShape(engine) {
    await engine.addShape("triangle", new TriangleDrawer());
}
export async function loadPolygonShape(engine) {
    await loadGenericPolygonShape(engine);
    await loadTriangleShape(engine);
}
