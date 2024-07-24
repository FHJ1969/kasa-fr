import './error.sass'
import '/src/components/HeaderFooter.sass'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import {Link} from "react-router-dom";

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