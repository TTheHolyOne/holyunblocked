import { OptionsColor } from "../../../../Options/Classes/OptionsColor";
import { PolygonMaskDrawStroke } from "./PolygonMaskDrawStroke";
/**
 * @category Polygon Mask Plugin
 */
export class PolygonMaskDraw {
    constructor() {
        this.enable = false;
        this.stroke = new PolygonMaskDrawStroke();
    }
    /**
     * @deprecated the property lineWidth is deprecated, please use the new stroke.width
     */
    get lineWidth() {
        return this.stroke.width;
    }
    /**
     * @deprecated the property lineWidth is deprecated, please use the new stroke.width
     */
    set lineWidth(value) {
        this.stroke.width = value;
    }
    /**
     * @deprecated the property lineColor is deprecated, please use the new stroke.color
     */
    get lineColor() {
        return this.stroke.color;
    }
    /**
     * @deprecated the property lineColor is deprecated, please use the new stroke.color
     */
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
