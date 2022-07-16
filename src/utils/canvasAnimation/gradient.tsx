import { IDraw } from "../../interface/Draw";
import { Circle } from "./circleCreate";
import { TextAnimation } from "./textAnimation";

export class Draw implements IDraw {

    x: number;
    y: number;
    ctx: CanvasRenderingContext2D | null;
    circle: any[];
    angle: number;
    speed: number;
    create: boolean;
    textAnimation: TextAnimation | null

    constructor() {

        this.x = 0;
        this.y = 0;
        this.ctx = null;
        this.angle = 0;
        this.speed = 0.005;
        this.create = false;
        this.circle = [];
        this.textAnimation = null;
        window.addEventListener("mousemove", this.HandlerCursor);

    }

    StartAnimation(time: number, ctx: CanvasRenderingContext2D) {

        requestAnimationFrame((time: number) => this.StartAnimation(time, ctx));

        if(!this.create)
            this.CreateCircles(ctx);

        this.ClearCanvas(ctx);
        this.DrawText();
        this.DrawCircle();

        return time;

    }

    private CreateCircles(ctx: CanvasRenderingContext2D) {

        this.ctx = ctx;
        this.circle = [];
        this.create = true;
        this.textAnimation = new TextAnimation(ctx);
        this.textAnimation.initScene();
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

    private DrawText() {

        this.textAnimation?.getCircleArray().forEach((circle) => {

            circle.render(this.x, this.y);

        })

    }

    private ClearCanvas(ctx: CanvasRenderingContext2D) {

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    }

}
