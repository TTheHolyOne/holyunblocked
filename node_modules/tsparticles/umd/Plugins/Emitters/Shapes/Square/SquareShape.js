(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SquareShape = void 0;
    function randomSquareCoordinate(position, offset) {
        return position + offset * (Math.random() - 0.5);
    }
    class SquareShape {
        randomPosition(position, size, fill) {
            if (fill) {
                return {
                    x: randomSquareCoordinate(position.x, size.width),
                    y: randomSquareCoordinate(position.y, size.height),
                };
            }
            else {
                const halfW = size.width / 2, halfH = size.height / 2, side = Math.floor(Math.random() * 4), v = (Math.random() - 0.5) * 2;
                switch (side) {
                    case 0:
                        return {
                            x: position.x + v * halfW,
                            y: position.y - halfH,
                        };
                    case 1:
                        return {
                            x: position.x - halfW,
                            y: position.y + v * halfH,
                        };
                    case 2:
                        return {
                            x: position.x + v * halfW,
                            y: position.y + halfH,
                        };
                    case 3:
                    default:
                        return {
                            x: position.x + halfW,
                            y: position.y + v * halfH,
                        };
                }
            }
        }
    }
    exports.SquareShape = SquareShape;
});
