import { Canvas } from '../../components/canvas/canvas';
import styles from './homeStyle.module.scss';

export const HomeView = () => {

    return <main className={styles.main}>
        <Canvas/>
    </main>

}