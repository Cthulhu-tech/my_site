import { useCanvas } from "../../utils/useCanvas";
import styles from "./canvas.module.scss";

export const Canvas = () => {

    const {canvasRef} = useCanvas();

    return <canvas className={styles.canvas} ref={canvasRef}/>

}