import { useEffect, useState } from "react";

export const useCursorPosition = () => {

    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {

        const handlerCursor = (event: MouseEvent) => {

            setPosition({x: event.clientX, y: event.clientY});

        }

        window.addEventListener("mousemove", handlerCursor);
            
        return () => window.removeEventListener("mousemove", handlerCursor);

    } , []);

    return { x: position.x, y: position.y };

}