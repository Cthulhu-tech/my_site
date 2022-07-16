export class TextAnimation {

    circleArr: Circle[];
    ctx: CanvasRenderingContext2D
    mouse: {x: number; y: number;}

    constructor(ctx:CanvasRenderingContext2D) {

        this.ctx = ctx;
        this.mouse = {
            x: 0,
            y: 0
        }
        this.circleArr = [];

    }

    initScene() {
  
        const color = ["#7e37d0", "#fabc03", "#9be4ae", "#80d010"];
        this.circleArr = [];

        for(let i = 0; i < 5; i++){

            this.circleArr.push(new Circle((this.ctx.canvas.width / 4) * i, (this.ctx.canvas.height / 4), this.ctx, color[Math.floor(Math.random() * 4)]));

        }

    }

    getCircleArray() {

        return this.circleArr;

    }

}

class Circle {

    x: number;
    y: number;
    dx: number;
    dy: number;
    vx: number;
    vy: number;
    color:string;
    accX: number;
    accY: number;
    radius: number;
    width: number;
    height: number;
    friction: number;
    dest: {x: number; y: number};
    ctx: CanvasRenderingContext2D;

    constructor(x:number, y:number, ctx: CanvasRenderingContext2D, color:string) {

        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = Math.random() * this.ctx.canvas.width / 2 - 100 + 100;
        this.height = Math.random() * this.ctx.canvas.height / 2 - 100 + 100;
        this.dx = Math.random() - 1;
        this.dy = Math.random() - 1;
        if(ctx.canvas.width > 800)
            this.radius = 5.5;
        else
            this.radius = 2.5;  
        this.dest = {
            x: x,
            y: y
        };
		this.vx = 0;
		this.vy = 0;
		this.accX = 0;
		this.accY = 0;
		this.friction = Math.random() * 0.03 + 0.92;

    }

    render (x: number, y: number) {

        this.accX = (this.dest.x - this.x)/1000;
        this.accY = (this.dest.y - this.y)/1000;
        this.vx += this.accX;
        this.vy += this.accY;
        this.vx *= this.friction;
        this.vy *= this.friction;
      
        this.x += this.vx;
        this.y +=  this.vy;
      
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
        
        let a = this.x - x;
        let b = this.y - y;
      
        let distance = Math.sqrt(a * a + b * b);

        if(distance<(this.radius * 20)){
          this.accX = (this.x - x) / 100;
          this.accY = (this.y - y) / 100;
          this.vx += this.accX;
          this.vy += this.accY;
        }

    }

}