import { getStyleFromHsl } from "../../Utils";
const currentColorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function replaceColorSvg(imageShape, color, opacity) {
    const { svgData } = imageShape;
    if (!svgData) {
        return "";
    }
    const colorStyle = getStyleFromHsl(color, opacity);
    /* set color to svg element */
    if (svgData.includes("fill")) {
        return svgData.replace(currentColorRegex, () => colorStyle);
    }
    const preFillIndex = svgData.indexOf(">");
    return `${svgData.substring(0, preFillIndex)} fill="${colorStyle}"${svgData.substring(preFillIndex)}`;
}
export async function loadImage(image) {
    return new Promise((resolve) => {
        image.loading = true;
        const img = new Image();
        img.addEventListener("load", () => {
            image.element = img;
            image.loading = false;
            resolve();
        });
        img.addEventListener("error", () => {
            image.error = true;
            image.loading = false;
            console.error(`Error tsParticles - loading image: ${image.source}`);
            resolve();
        });
        img.src = image.source;
    });
}
export async function downloadSvgImage(image) {
    if (image.type !== "svg") {
        await loadImage(image);
        return;
    }
    image.loading = true;
    const response = await fetch(image.source);
    image.loading = false;
    if (!response.ok) {
        console.error("Error tsParticles - Image not found");
        image.error = true;
    }
    if (!image.error) {
        image.svgData = await response.text();
    }
}
export function replaceImageColor(image, imageData, color, particle) {
    var _a, _b, _c;
    const svgColoredData = replaceColorSvg(image, color, (_b = (_a = particle.opacity) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 1);
    /* prepare to create img with colored svg */
    const svg = new Blob([svgColoredData], { type: "image/svg+xml" });
    const domUrl = URL || window.URL || window.webkitURL || window;
    const url = domUrl.createObjectURL(svg);
    /* create particle img obj */
    const img = new Image();
    const imageRes = {
        data: Object.assign(Object.assign({}, image), { svgData: svgColoredData }),
        ratio: imageData.width / imageData.height,
        replaceColor: (_c = imageData.replaceColor) !== null && _c !== void 0 ? _c : imageData.replace_color,
        source: imageData.src,
    };
    img.addEventListener("load", () => {
        const pImage = particle.image;
        if (pImage) {
            pImage.loaded = true;
            image.element = img;
        }
        domUrl.revokeObjectURL(url);
    });
    img.addEventListener("error", () => {
        domUrl.revokeObjectURL(url);
        const img2 = Object.assign(Object.assign({}, image), { error: false, loading: true });
        // deepcode ignore PromiseNotCaughtGeneral: catch can be ignored
        loadImage(img2).then(() => {
            const pImage = particle.image;
            if (pImage) {
                image.element = img2.element;
                pImage.loaded = true;
            }
        });
    });
    img.src = url;
    return imageRes;
}
