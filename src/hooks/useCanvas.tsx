import { Draw } from "../utils/canvasAnimation/gradient";
import { useEffect, useRef } from "react";

export const useCanvas = () => {

    const DrawAnimation = new Draw();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        if(canvasRef.current){

            const ctx = canvasRef.current.getContext("2d");
        
            if(ctx){

                requestAnimationFrame((time: number) => DrawAnimation.StartAnimation(time, ctx));

                const handleResize = () => {

                    ctx.canvas.width = window.innerWidth;
                    ctx.canvas.height = window.innerHeight - 120;

                }
        
                handleResize();

                window.addEventListener("resize", handleResize);
            
                return () => {

                    window.removeEventListener("resize", handleResize);

                };

            }

        }

    }, []);

    return { canvasRef };

} 