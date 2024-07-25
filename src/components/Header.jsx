import { Link, useLocation } from 'react-router-dom';
import './HeaderFooter.sass';
import kasaLogoWhite from "../assets/kasa_logo_white.png";

function Header() {
    const location = useLocation();

    return (
        <header className="header" style={{ marginBottom: '50px' }}>
            <img src={kasaLogoWhite} alt="Logo de l'entreprise Kasa" className="header__logo" />
            <nav className="header__navbar">
                <Link
                    to="/"
                    className={`header__navbar--link header__home ${location.pathname === '/' ? 'active' : ''}`}
                >
                    Accueil
                </Link>
                <Link
                    to="/a-propos"
                    className={`header__navbar--link header__about ${location.pathname === '/a-propos' ? 'active' : ''}`}
                >
                    A propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;
