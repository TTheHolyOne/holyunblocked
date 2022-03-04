import { PolygonMask } from "./Options/Classes/PolygonMask";
import { PolygonMaskInstance } from "./PolygonMaskInstance";
import { isSsr } from "../../Utils";
class PolygonMaskPlugin {
    constructor() {
        this.id = "polygonMask";
    }
    getPlugin(container) {
        return new PolygonMaskInstance(container);
    }
    needsPlugin(options) {
        var _a, _b, _c;
        return ((_b = (_a = options === null || options === void 0 ? void 0 : options.polygon) === null || _a === void 0 ? void 0 : _a.enable) !== null && _b !== void 0 ? _b : (((_c = options === null || options === void 0 ? void 0 : options.polygon) === null || _c === void 0 ? void 0 : _c.type) !== undefined && options.polygon.type !== "none"));
    }
    loadOptions(options, source) {
        if (!this.needsPlugin(source)) {
            return;
        }
        const optionsCast = options;
        let polygonOptions = optionsCast.polygon;
        if ((polygonOptions === null || polygonOptions === void 0 ? void 0 : polygonOptions.load) === undefined) {
            optionsCast.polygon = polygonOptions = new PolygonMask();
        }
        polygonOptions.load(source === null || source === void 0 ? void 0 : source.polygon);
    }
}
export async function loadPolygonMaskPlugin(engine) {
    if (!isSsr() && !("SVGPathSeg" in window)) {
        await import("./pathseg");
    }
    const plugin = new PolygonMaskPlugin();
    await engine.addPlugin(plugin);
}
