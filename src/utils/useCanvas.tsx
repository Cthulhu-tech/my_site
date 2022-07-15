import { useEffect, useRef } from "react";

export const useCanvas = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    function draw(ctx: CanvasRenderingContext2D) {

        const text = "Mustafin Daniar";

        const canvas = ctx.canvas;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.font = "100px sans-serif";
        ctx.fillText(text, canvas.width / 2, canvas.height / 2, 200);
      
        requestAnimationFrame(() => draw(ctx));
    }

    useEffect(() => {

        if(canvasRef.current){

            const ctx = canvasRef.current.getContext("2d");
        
            if(ctx){

                requestAnimationFrame(() => draw(ctx));

                const handleResize = () => {

                    ctx.canvas.width = window.innerWidth - 20;
                    ctx.canvas.height = window.innerHeight;

                }
                  
                handleResize();

                window.addEventListener("resize", handleResize);
            
                return () => window.removeEventListener("resize", handleResize);

            }

        }

      }, []);

    return { canvasRef };

} 