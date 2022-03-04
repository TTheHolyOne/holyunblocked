/**
 * @category Polygon Mask Plugin
 */
export class PolygonMaskInline {
    constructor() {
        this.arrangement = "one-per-point" /* onePerPoint */;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.arrangement !== undefined) {
            this.arrangement = data.arrangement;
        }
    }
}
