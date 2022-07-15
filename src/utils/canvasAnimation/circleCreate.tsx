export class Circle {

    x: number;
    y: number;
    speed: number;
    angle: number;
    radius: number;
    positionX: number;
    positionY: number;
    canvasColor: string;
    ctx: CanvasRenderingContext2D

    constructor(ctx: CanvasRenderingContext2D, speed: number) {

        this.ctx = ctx;
        this.speed = speed;
        this.x = Math.random() * ctx.canvas.width;
        this.y = Math.random() * ctx.canvas.height;
        this.angle  = Math.random() * Math.PI * 2;
        this.radius = Math.random() * (400 - 400) + 400;

        const color = ["#4A25D1", "#683DF2", "#FEFEFE", "#ffba27"];

        this.positionX = Math.random() * this.ctx.canvas.width - 0 + 1 + 0;
        this.positionY = Math.random() * this.ctx.canvas.height - 0 + 1 + 0;
        this.canvasColor = color[Math.floor(Math.random() * (color.length - 0 + 1) + 0)];

    }

    DrawCircle() {

        this.angle += this.speed;

        const x = this.x + Math.cos(this.angle) * 200;
        const y = this.y + Math.sin(this.angle) * 200;

        this.ctx.globalCompositeOperation = "overlay";
        this.ctx.strokeStyle = this.canvasColor;
        this.ctx.beginPath();
        this.ctx.moveTo(this.positionX, this.positionY);
        this.ctx.lineWidth = 30;
        this.ctx.lineTo(x, y);
        this.ctx.stroke();

    }

}