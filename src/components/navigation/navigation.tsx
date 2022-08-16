import { NavLink } from 'react-router-dom';
import './navigation.scss';

export const Navigation = () => {

    return <nav className="navigation">
            <div>
                <NavLink to="/" className="link">HOME</NavLink>
                <NavLink to="/project" className="link">PROJECT</NavLink>
                <NavLink to="/contact" className="link">CONTACT</NavLink>
            </div>
        </nav>

}