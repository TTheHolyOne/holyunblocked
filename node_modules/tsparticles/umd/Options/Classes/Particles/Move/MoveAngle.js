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
    exports.MoveAngle = void 0;
    class MoveAngle {
        constructor() {
            this.offset = 0;
            this.value = 90;
        }
        load(data) {
            if (data === undefined) {
                return;
            }
            if (data.offset !== undefined) {
                this.offset = data.offset;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    }
    exports.MoveAngle = MoveAngle;
});
