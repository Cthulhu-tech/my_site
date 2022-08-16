import { useCanvas } from '../../hooks/useCanvas';
import './homeStyle.scss';

export const HomeView = () => {

    const {canvasRef} = useCanvas();

    return <canvas ref={canvasRef} className="canvas"/>

}