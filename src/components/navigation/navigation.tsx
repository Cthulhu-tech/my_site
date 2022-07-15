import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';

export const Navigation = () => {

    return <nav className={styles.navigation}>
            <div>
                <NavLink to="/" className={({isActive}) => isActive ? styles.active + ' ' + styles.link : styles.link}>HOME</NavLink>
                <NavLink to="/project" className={({isActive}) => isActive ? styles.active + ' ' + styles.link : styles.link}>PROJECT</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? styles.active + ' ' + styles.link : styles.link}>CONTACT</NavLink>
            </div>
        </nav>

}