import { PolygonMaskDraw } from "./PolygonMaskDraw";
import { PolygonMaskInline } from "./PolygonMaskInline";
import { PolygonMaskLocalSvg } from "./PolygonMaskLocalSvg";
import { PolygonMaskMove } from "./PolygonMaskMove";
import { deepExtend } from "../../../../Utils";
export class PolygonMask {
    constructor() {
        this.draw = new PolygonMaskDraw();
        this.enable = false;
        this.inline = new PolygonMaskInline();
        this.move = new PolygonMaskMove();
        this.scale = 1;
        this.type = "none";
    }
    get inlineArrangement() {
        return this.inline.arrangement;
    }
    set inlineArrangement(value) {
        this.inline.arrangement = value;
    }
    load(data) {
        var _a;
        if (!data) {
            return;
        }
        this.draw.load(data.draw);
        const inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
            arrangement: data.inlineArrangement,
        };
        if (inline !== undefined) {
            this.inline.load(inline);
        }
        this.move.load(data.move);
        if (data.scale !== undefined) {
            this.scale = data.scale;
        }
        if (data.type !== undefined) {
            this.type = data.type;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        else {
            this.enable = this.type !== "none";
        }
        if (data.url !== undefined) {
            this.url = data.url;
        }
        if (data.data !== undefined) {
            if (typeof data.data === "string") {
                this.data = data.data;
            }
            else {
                this.data = new PolygonMaskLocalSvg();
                this.data.load(data.data);
            }
        }
        if (data.position !== undefined) {
            this.position = deepExtend({}, data.position);
        }
    }
}
