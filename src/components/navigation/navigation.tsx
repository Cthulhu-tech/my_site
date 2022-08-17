import { NavLink } from 'react-router-dom';
import './navigation.scss';

export const Navigation = () => {

    return <nav className="navigation">
        <div className="container__title">
            <p className="navigation__title">Daniar M.</p>
        </div>
            <div className="container__links">
                <NavLink to="/" className="link">HOME</NavLink>
                <NavLink to="/project" className="link">PROJECT</NavLink>
                <NavLink to="/contact" className="link">CONTACT</NavLink>
            </div>
        </nav>

}