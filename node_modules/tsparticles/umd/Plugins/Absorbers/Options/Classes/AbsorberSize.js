(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./AbsorberSizeLimit", "../../../../Options/Classes/ValueWithRandom"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbsorberSize = void 0;
    const AbsorberSizeLimit_1 = require("./AbsorberSizeLimit");
    const ValueWithRandom_1 = require("../../../../Options/Classes/ValueWithRandom");
    class AbsorberSize extends ValueWithRandom_1.ValueWithRandom {
        constructor() {
            super();
            this.density = 5;
            this.random.minimumValue = 1;
            this.value = 50;
            this.limit = new AbsorberSizeLimit_1.AbsorberSizeLimit();
        }
        load(data) {
            if (!data) {
                return;
            }
            super.load(data);
            if (data.density !== undefined) {
                this.density = data.density;
            }
            if (typeof data.limit === "number") {
                this.limit.radius = data.limit;
            }
            else {
                this.limit.load(data.limit);
            }
        }
    }
    exports.AbsorberSize = AbsorberSize;
});
