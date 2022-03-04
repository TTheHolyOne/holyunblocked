import type { RecursivePartial, SingleOrMultiple } from "../../../Types";
import { AnimatableColor } from "../AnimatableColor";
import { AnimatableGradient } from "../AnimatableGradient";
import { Bounce } from "./Bounce/Bounce";
import { Collisions } from "./Collisions/Collisions";
import { Destroy } from "./Destroy/Destroy";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
import type { IParticles } from "../../Interfaces/Particles/IParticles";
import { Life } from "./Life/Life";
import { Links } from "./Links/Links";
import { Move } from "./Move/Move";
import { Opacity } from "./Opacity/Opacity";
import { Orbit } from "./Orbit/Orbit";
import type { ParticlesGroups } from "../../../Types/ParticlesGroups";
import { ParticlesNumber } from "./Number/ParticlesNumber";
import { Repulse } from "./Repulse/Repulse";
import { Roll } from "./Roll/Roll";
import { Rotate } from "./Rotate/Rotate";
import { Shadow } from "./Shadow";
import { Shape } from "./Shape/Shape";
import { Size } from "./Size/Size";
import { Stroke } from "./Stroke";
import { Tilt } from "./Tilt/Tilt";
import { Twinkle } from "./Twinkle/Twinkle";
import { Wobble } from "./Wobble/Wobble";
import { ZIndex } from "./ZIndex/ZIndex";
/**
 * [[include:Options/Particles.md]]
 * @category Options
 */
export declare class ParticlesOptions implements IParticles, IOptionLoader<IParticles> {
    bounce: Bounce;
    collisions: Collisions;
    color: AnimatableColor;
    destroy: Destroy;
    gradient: SingleOrMultiple<AnimatableGradient>;
    groups: ParticlesGroups;
    life: Life;
    links: Links;
    move: Move;
    number: ParticlesNumber;
    opacity: Opacity;
    orbit: Orbit;
    reduceDuplicates: boolean;
    repulse: Repulse;
    roll: Roll;
    rotate: Rotate;
    shape: Shape;
    size: Size;
    shadow: Shadow;
    stroke: SingleOrMultiple<Stroke>;
    tilt: Tilt;
    twinkle: Twinkle;
    wobble: Wobble;
    zIndex: ZIndex;
    /**
     *
     * @deprecated this property is obsolete, please use the new links
     */
    get line_linked(): Links;
    /**
     *
     * @deprecated this property is obsolete, please use the new links
     * @param value
     */
    set line_linked(value: Links);
    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     */
    get lineLinked(): Links;
    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     * @param value
     */
    set lineLinked(value: Links);
    constructor();
    load(data?: RecursivePartial<IParticles>): void;
}
