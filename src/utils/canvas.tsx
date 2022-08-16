export class Canvas {

    ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {

        this.ctx = canvas.getContext('2d')!;

    }

}