var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ImageDrawer_images;
import { downloadSvgImage, loadImage, replaceImageColor } from "./Utils";
export class ImageDrawer {
    constructor() {
        _ImageDrawer_images.set(this, void 0);
        __classPrivateFieldSet(this, _ImageDrawer_images, [], "f");
    }
    getSidesCount() {
        return 12;
    }
    getImages(container) {
        const containerImages = __classPrivateFieldGet(this, _ImageDrawer_images, "f").find((t) => t.id === container.id);
        if (!containerImages) {
            __classPrivateFieldGet(this, _ImageDrawer_images, "f").push({
                id: container.id,
                images: [],
            });
            return this.getImages(container);
        }
        else {
            return containerImages;
        }
    }
    addImage(container, image) {
        const containerImages = this.getImages(container);
        containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
    }
    destroy() {
        __classPrivateFieldSet(this, _ImageDrawer_images, [], "f");
    }
    async loadImageShape(container, imageShape) {
        const source = imageShape.src;
        if (!source) {
            throw new Error("Error tsParticles - No image.src");
        }
        try {
            const image = {
                source: source,
                type: source.substr(source.length - 3),
                error: false,
                loading: true,
            };
            this.addImage(container, image);
            const imageFunc = imageShape.replaceColor ? downloadSvgImage : loadImage;
            await imageFunc(image);
        }
        catch (_a) {
            throw new Error(`tsParticles error - ${imageShape.src} not found`);
        }
    }
    draw(context, particle, radius, opacity) {
        var _a, _b;
        const image = particle.image;
        const element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;
        if (!element) {
            return;
        }
        const ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1;
        const pos = {
            x: -radius,
            y: -radius,
        };
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
            context.globalAlpha = opacity;
        }
        context.drawImage(element, pos.x, pos.y, radius * 2, (radius * 2) / ratio);
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
            context.globalAlpha = 1;
        }
    }
    loadShape(particle) {
        var _a, _b, _c;
        if (particle.shape !== "image" && particle.shape !== "images") {
            return;
        }
        const images = this.getImages(particle.container).images;
        const imageData = particle.shapeData;
        const image = images.find((t) => t.source === imageData.src);
        let imageRes;
        if (!image) {
            this.loadImageShape(particle.container, imageData).then(() => {
                this.loadShape(particle);
            });
            return;
        }
        if (image.error) {
            return;
        }
        const color = particle.getFillColor();
        if (image.svgData && imageData.replaceColor && color) {
            imageRes = replaceImageColor(image, imageData, color, particle);
        }
        else {
            imageRes = {
                data: image,
                loaded: true,
                ratio: imageData.width / imageData.height,
                replaceColor: (_a = imageData.replaceColor) !== null && _a !== void 0 ? _a : imageData.replace_color,
                source: imageData.src,
            };
        }
        if (!imageRes.ratio) {
            imageRes.ratio = 1;
        }
        const fill = (_b = imageData.fill) !== null && _b !== void 0 ? _b : particle.fill;
        const close = (_c = imageData.close) !== null && _c !== void 0 ? _c : particle.close;
        const imageShape = {
            image: imageRes,
            fill,
            close,
        };
        particle.image = imageShape.image;
        particle.fill = imageShape.fill;
        particle.close = imageShape.close;
    }
}
_ImageDrawer_images = new WeakMap();
