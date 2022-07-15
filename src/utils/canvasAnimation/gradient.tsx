import { IDraw } from "../../interface/Draw";
import { Circle } from "./circleCreate";

export class Draw implements IDraw {

    x: number;
    y: number;
    circle: any[];
    angle: number;
    speed: number;
    create: boolean;

    constructor() {

        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.speed = 0.005;
        this.create = false;
        this.circle = [];

        window.addEventListener("mousemove", this.HandlerCursor);

    }

    StartAnimation(time: number, ctx: CanvasRenderingContext2D) {

        requestAnimationFrame((time: number) => this.StartAnimation(time, ctx));

        if(!this.create)
            this.CreateCircles(ctx);

        this.ClearCanvas(ctx);
        this.DrawText(ctx);
        this.DrawLine(ctx);
        this.DrawCircle();

        return time;

    }

    private CreateCircles(ctx: CanvasRenderingContext2D) {

        this.circle = [];
        this.create = true;

        for(let i = 0; i < 15; i++) {

            this.x = Math.random() * ctx.canvas.width;
            this.y = Math.random() * ctx.canvas.height;
            this.circle.push(new Circle(ctx, this.speed));

        }
        
    }

    private DrawCircle() {

        this.circle.forEach(circle => {

            circle.DrawCircle();

        })

    }

    private HandlerCursor = (event: MouseEvent) => {

        this.x = event.clientX;
        this.y = event.clientY;

    }

    private DrawLine(ctx: CanvasRenderingContext2D) {

        // const gradient = ctx.createRadialGradient(0, this.x, 0, this.x, 0, ctx.canvas.width);

        // gradient.addColorStop(0, "hsl(183,75%,76%, 1)");
        // gradient.addColorStop(0.8, "hsl(305,61%,79%, 0.1)");
        // gradient.addColorStop(0.6, "hsl(44,77%,88%, 0.1)");
        // gradient.addColorStop(1, "hsl(249,33%,70%, 0)");

        // ctx.beginPath();
        // ctx.lineWidth = 120;
        
        // ctx.moveTo(0, ctx.canvas.height);
        // ctx.lineTo(this.x, this.y);
        // ctx.strokeStyle = gradient;
        // ctx.stroke();

        // ctx.beginPath();
        // ctx.moveTo(0, 0);
        // ctx.lineWidth = 30;
        // ctx.lineTo(this.x, this.y);
        // ctx.strokeStyle = gradient;
        // ctx.stroke();

    }

    private DrawText(ctx: CanvasRenderingContext2D) {
        
        const text = "Mustafin Daniar";
        let textWidth =  ctx.canvas.width / 2;
        let canvasTextSize = ctx.canvas.width / 20;
    
        if(ctx.canvas.width > 1920)
            canvasTextSize = 100;
    
        const gradient = ctx.createLinearGradient(0, 0, this.y, this.x);

        ctx.fillStyle = 'white';
        ctx.textAlign = "center";
        ctx.font = `normal ${canvasTextSize}px Courier`;
        ctx.fillText(text, textWidth, ctx.canvas.height / 2 + 25, ctx.canvas.width * 0.95);

    }

    private ClearCanvas(ctx: CanvasRenderingContext2D) {

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    }

}
