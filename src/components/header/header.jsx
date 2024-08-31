import {Link, NavLink} from 'react-router-dom';
import './header.sass';
import kasaLogoWhite from "../../assets/kasa_logo_white.png";

//Génération du composant Header réutilisé dans toutes les pages
function Header() {
    return (
        <header className="header">
            <Link to="/"><img src={kasaLogoWhite} alt="Logo de l'entreprise Kasa" className="header__logo"/></Link>
            <nav className="header__navbar">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? 'header__navbar--link header__home active'
                            : 'header__navbar--link header__home'
                    }
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/a-propos"
                    className={({ isActive }) =>
                        isActive
                            ? 'header__navbar--link header__about active'
                            : 'header__navbar--link header__about'
                    }
                >
                    A propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
