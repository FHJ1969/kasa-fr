import './error.sass'
import {Link} from "react-router-dom";

//Génération dynamique d'une page spécialement conçu dans le cas d'une erreur 404
function Error () {
    return (
        <>
        <main>
            <div className="error">
                <h2 className="error__title">404</h2>
                <h3 className="error__desc">Oups! La page que vous demandez n'existe pas.</h3>
                <Link to="/" className="error__return">Retourner sur la page d’accueil</Link>
            </div>
        </main>
        </>
    )
}

export default Error