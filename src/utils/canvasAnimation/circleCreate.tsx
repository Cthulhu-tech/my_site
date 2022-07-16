export class Circle {

    speed: number;
    angle: number;
    radius: number;
    color: string[];
    update: boolean;
    positionX: number;
    positionY: number;
    canvasColorFerst: string;
    canvasColorSecond: string;
    ctx: CanvasRenderingContext2D

    constructor(ctx: CanvasRenderingContext2D, speed: number) {

        this.ctx = ctx;
        this.speed = speed;
        this.update = false;
        this.angle  = Math.random() * Math.PI * 2;
        this.radius = Math.random() * (600 - 400) + 400;

        this.color = ["320", "0", "200"];

        this.positionX = Math.random() * this.ctx.canvas.width - 0 + 1 + 0;
        this.positionY = Math.random() * this.ctx.canvas.height - 0 + 1 + 0;
        this.canvasColorFerst = `hsla(${this.color[Math.floor(Math.random() * (this.color.length - 1 + 0) + 1)]}, 100%, 20%, 1)`;
        this.canvasColorSecond = `hsla(${this.color[Math.floor(Math.random() * (this.color.length - 1 + 0) + 1)]}, 100%, 50%, 0)`;

    }

    DrawCircle() {

        this.angle += this.speed;

        const x =  this.positionX + Math.cos(this.angle) * 200;
        const y =  this.positionY + Math.sin(this.angle) * 200;

        this.ctx.globalCompositeOperation = "overlay";
        const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, this.radius);
        this.ctx.beginPath();

        gradient.addColorStop(0, this.canvasColorFerst);
        gradient.addColorStop(1, this.canvasColorSecond);
        
        this.ctx.fillStyle = gradient;
        this.ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();

    }

}