import './error.sass'
import '/src/components/headerFooter.sass'
import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import {Link} from "react-router-dom";

//Génération dynamique d'une page spécialement conçu dans le cas d'une erreur 404
function Error () {
    return (
        <>
            <Header />
        <main>
            <article className="error">
                <h2 className="error__title">404</h2>
                <h3 className="error__desc">Oups! La page que vous demandez n'existe pas.</h3>
                <Link to="/" className="error__return">Retourner sur la page d’accueil</Link>
            </article>
        </main>
            <Footer />
        </>
    )
}

export default Error