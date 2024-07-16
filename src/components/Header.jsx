import '../styles/Header.sass';
import kasaLogoWhite from "../assets/kasa_logo_white.png";

function Header () {
    return (
        <header className="header" style={{marginBottom: '50px'}}>
            <img src={kasaLogoWhite} alt="Logo de l'entreprise Kasa" className="header__logo"/>
            <nav className="header__navbar">
                <a className="header__navbar--link">Acceuil</a>
                <a className="header__navbar--link">A propos</a>
            </nav>
        </header>
    )
}

export default Header