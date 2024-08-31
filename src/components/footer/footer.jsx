import './footer.sass';

//Génération du composant Footer réutiliser dans toutes les pages
function Footer() {
    return (
        <footer className="footer">
            <section className="footer__section">
                <h3 className="footer__section--copyright">© 2024 Toile d'art. Tous droits réservés</h3>
            </section>
        </footer>
    )
}

export default Footer