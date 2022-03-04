(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./LinkInstance"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadPlugin = void 0;
    const LinkInstance_1 = require("./LinkInstance");
    class LinksPlugin {
        constructor() {
            this.id = "links";
        }
        getPlugin(container) {
            return new LinkInstance_1.LinkInstance(container);
        }
        needsPlugin() {
            return true;
        }
        loadOptions() {
        }
    }
    async function loadPlugin(engine) {
        const plugin = new LinksPlugin();
        await engine.addPlugin(plugin);
    }
    exports.loadPlugin = loadPlugin;
});
