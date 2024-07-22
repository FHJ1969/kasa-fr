import './error.sass'
import '/src/components/HeaderFooter.sass'

function Error () {
    return (
        <main>
            <article className="error">
                <h2 className="error__title">404</h2>
                <h3 className="error__desc">Oups! La page que vous demandez n'existe pas.</h3>
                <a href="#" className="error__return">Retourner sur la page d’accueil</a>
            </article>
        </main>
    )
}

export default Error