import type { SVGPathSegArcAbs, SVGPathSegArcRel, SVGPathSegCurvetoCubicAbs, SVGPathSegCurvetoCubicRel, SVGPathSegCurvetoCubicSmoothAbs, SVGPathSegCurvetoCubicSmoothRel, SVGPathSegCurvetoQuadraticAbs, SVGPathSegCurvetoQuadraticRel, SVGPathSegCurvetoQuadraticSmoothAbs, SVGPathSegCurvetoQuadraticSmoothRel, SVGPathSegLinetoAbs, SVGPathSegLinetoRel, SVGPathSegMovetoAbs, SVGPathSegMovetoRel } from "./pathseg";
import type { IOptions } from "../../Options/Interfaces/IOptions";
import type { IPolygonMask } from "./Options/Interfaces/IPolygonMask";
export declare type SvgAbsoluteCoordinatesTypes = SVGPathSegArcAbs | SVGPathSegCurvetoCubicAbs | SVGPathSegCurvetoCubicSmoothAbs | SVGPathSegCurvetoQuadraticAbs | SVGPathSegCurvetoQuadraticSmoothAbs | SVGPathSegLinetoAbs | SVGPathSegMovetoAbs;
export declare type SvgRelativeCoordinatesTypes = SVGPathSegArcRel | SVGPathSegCurvetoCubicRel | SVGPathSegCurvetoCubicSmoothRel | SVGPathSegCurvetoQuadraticRel | SVGPathSegCurvetoQuadraticSmoothRel | SVGPathSegLinetoRel | SVGPathSegMovetoRel;
export declare type IPolygonMaskOptions = IOptions & {
    polygon: IPolygonMask;
};
