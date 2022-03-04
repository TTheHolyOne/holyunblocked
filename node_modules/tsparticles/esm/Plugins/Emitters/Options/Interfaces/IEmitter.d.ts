import type { MoveDirection, MoveDirectionAlt } from "../../../../Enums";
import type { EmitterShapeType } from "../../Enums";
import type { IAnimatableColor } from "../../../../Options/Interfaces/IAnimatableColor";
import type { ICoordinates } from "../../../../Core";
import type { IEmitterLife } from "./IEmitterLife";
import type { IEmitterRate } from "./IEmitterRate";
import type { IEmitterSize } from "./IEmitterSize";
import type { IParticles } from "../../../../Options/Interfaces/Particles/IParticles";
import type { RecursivePartial } from "../../../../Types";
export interface IEmitter {
    autoPlay: boolean;
    size?: IEmitterSize;
    direction?: MoveDirection | keyof typeof MoveDirection | MoveDirectionAlt | number;
    domId?: string;
    fill: boolean;
    life: IEmitterLife;
    name?: string;
    particles?: RecursivePartial<IParticles>;
    position?: RecursivePartial<ICoordinates>;
    rate: IEmitterRate;
    shape: EmitterShapeType | keyof typeof EmitterShapeType;
    spawnColor?: IAnimatableColor;
    startCount: number;
}
