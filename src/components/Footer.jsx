import './HeaderFooter.sass';
import kasaLogoBlack from "../assets/kasa_logo_black.png";

//Génération du composant Footer réutiliser dans toutes les pages
function Footer() {
    return (
        <footer className="footer">
            <section className="footer__section">
                <div className='footer__section--logo'>
                    <img style={{width: "120px"}} src={kasaLogoBlack} alt="Logo Kasa" />
                </div>
                <h3 className="footer__section--copyright">© 2020 Kasa. All rights reserved</h3>
            </section>
        </footer>
    )
}

export default Footer