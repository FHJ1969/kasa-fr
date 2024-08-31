import {NavLink} from 'react-router-dom';
import './header.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope, faSquarePhone, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

//Génération du composant Header réutilisé dans toutes les pages
function Header() {
    return (
        <>
            <div className="contactHeader">
                <div className="contactHeader__icons">
                    <a href="mailto:toiledart7@gmail.com"><FontAwesomeIcon style={{margin:"0 10px"}} icon={faSquareEnvelope} className="contactHeader__icons--icon" /></a>
                    <a href="tel:+33767560121"><FontAwesomeIcon style={{margin:"0 10px"}} icon={faSquarePhone} className="contactHeader__icons--icon" /></a>
                    <p className="contactHeader__icons--title">Toile d'Art - Peintres en batîment</p>
                </div>
                <h3 className="contactHeader__devis">Obtenir un devis<FontAwesomeIcon icon={faNoteSticky} style={{marginLeft:"5px"}}/></h3>
            </div>

            <header className="header">
                <NavLink to="/" style={{textDecoration:"none"}}><p className="header__title">Toile d'Art</p></NavLink>
                <nav className="header__navbar">
                    <a href="https://www.facebook.com/people/Toile-Dart/100057205879381/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} className="header__navbar--logo"/></a>
                    <a href="https://www.instagram.com/toile_d_art/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="header__navbar--logo"/></a>
                </nav>
            </header>

            <nav className="navbar">
                <NavLink to="/" style={{textDecoration:"none"}}><p className="navbar__link">ACCEUIL</p></NavLink>
                <NavLink to="/" style={{textDecoration:"none"}}><p className="navbar__link">SERVICES</p></NavLink>
                <NavLink to="/" style={{textDecoration:"none"}}><p className="navbar__link">NOS TRAVAUX</p></NavLink>
                <NavLink to="/" style={{textDecoration:"none"}}><p className="navbar__link">A PROPOS</p></NavLink>
                <NavLink to="/" style={{textDecoration:"none"}}><p className="navbar__link">CONTACT</p></NavLink>
            </nav>
        </>
    );
}

export default Header;
