/**
 * @category Polygon Mask Plugin
 */
export class PolygonMaskMove {
    constructor() {
        this.radius = 10;
        this.type = "path" /* path */;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
        if (data.type !== undefined) {
            this.type = data.type;
        }
    }
}
