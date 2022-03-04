import { OptionsColor } from "../../../../Options/Classes/OptionsColor";
import { PolygonMaskDrawStroke } from "./PolygonMaskDrawStroke";
export class PolygonMaskDraw {
    constructor() {
        this.enable = false;
        this.stroke = new PolygonMaskDrawStroke();
    }
    get lineWidth() {
        return this.stroke.width;
    }
    set lineWidth(value) {
        this.stroke.width = value;
    }
    get lineColor() {
        return this.stroke.color;
    }
    set lineColor(value) {
        this.stroke.color = OptionsColor.create(this.stroke.color, value);
    }
    load(data) {
        var _a;
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
            color: data.lineColor,
            width: data.lineWidth,
        };
        this.stroke.load(stroke);
    }
}
