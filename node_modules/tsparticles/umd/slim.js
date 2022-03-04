(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Updaters/Angle", "./Shapes/Circle", "./Updaters/Color", "./Interactions/External/Attract", "./Interactions/External/Bounce", "./Interactions/External/Bubble", "./Interactions/External/Connect", "./Interactions/External/Grab", "./Interactions/External/Repulse", "./Shapes/Image", "./Updaters/Life", "./Shapes/Line", "./Updaters/Opacity", "./Updaters/OutModes", "./Interactions/Particles/Attract", "./Interactions/Particles/Collisions", "./Interactions/Particles/Links", "./Shapes/Polygon", "./Updaters/Size", "./Shapes/Square", "./Shapes/Star", "./Updaters/StrokeColor", "./Shapes/Text"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadSlim = void 0;
    const Angle_1 = require("./Updaters/Angle");
    const Circle_1 = require("./Shapes/Circle");
    const Color_1 = require("./Updaters/Color");
    const Attract_1 = require("./Interactions/External/Attract");
    const Bounce_1 = require("./Interactions/External/Bounce");
    const Bubble_1 = require("./Interactions/External/Bubble");
    const Connect_1 = require("./Interactions/External/Connect");
    const Grab_1 = require("./Interactions/External/Grab");
    const Repulse_1 = require("./Interactions/External/Repulse");
    const Image_1 = require("./Shapes/Image");
    const Life_1 = require("./Updaters/Life");
    const Line_1 = require("./Shapes/Line");
    const Opacity_1 = require("./Updaters/Opacity");
    const OutModes_1 = require("./Updaters/OutModes");
    const Attract_2 = require("./Interactions/Particles/Attract");
    const Collisions_1 = require("./Interactions/Particles/Collisions");
    const Links_1 = require("./Interactions/Particles/Links");
    const Polygon_1 = require("./Shapes/Polygon");
    const Size_1 = require("./Updaters/Size");
    const Square_1 = require("./Shapes/Square");
    const Star_1 = require("./Shapes/Star");
    const StrokeColor_1 = require("./Updaters/StrokeColor");
    const Text_1 = require("./Shapes/Text");
    async function loadSlim(engine) {
        await (0, Attract_1.loadExternalAttractInteraction)(engine);
        await (0, Bounce_1.loadExternalBounceInteraction)(engine);
        await (0, Bubble_1.loadExternalBubbleInteraction)(engine);
        await (0, Connect_1.loadExternalConnectInteraction)(engine);
        await (0, Grab_1.loadExternalGrabInteraction)(engine);
        await (0, Repulse_1.loadExternalRepulseInteraction)(engine);
        await (0, Attract_2.loadParticlesAttractInteraction)(engine);
        await (0, Collisions_1.loadParticlesCollisionsInteraction)(engine);
        await (0, Links_1.loadParticlesLinksInteraction)(engine);
        await (0, Circle_1.loadCircleShape)(engine);
        await (0, Image_1.loadImageShape)(engine);
        await (0, Line_1.loadLineShape)(engine);
        await (0, Polygon_1.loadPolygonShape)(engine);
        await (0, Square_1.loadSquareShape)(engine);
        await (0, Star_1.loadStarShape)(engine);
        await (0, Text_1.loadTextShape)(engine);
        await (0, Life_1.loadLifeUpdater)(engine);
        await (0, Opacity_1.loadOpacityUpdater)(engine);
        await (0, Size_1.loadSizeUpdater)(engine);
        await (0, Angle_1.loadAngleUpdater)(engine);
        await (0, Color_1.loadColorUpdater)(engine);
        await (0, StrokeColor_1.loadStrokeColorUpdater)(engine);
        await (0, OutModes_1.loadOutModesUpdater)(engine);
    }
    exports.loadSlim = loadSlim;
});
