export interface IDraw {

    x: number;
    y: number;
    angle: number;
    speed: number;

    StartAnimation: (time: number, ctx: CanvasRenderingContext2D) => void;

}