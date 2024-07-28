import './home.sass'
import { Link } from 'react-router-dom'
import Logements from '/src/data/logements.json'
import '../../components/headerFooter.sass'
import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import Banner from '../../components/banner.jsx'

// Génération des éléments de la page d'accueil du site
function Home() {
    return (
        <>
            <Header />
        <main>
            <Banner />

            <article className="homeContainer">
                {Logements.map((logement) => (
                    <Link to={`/logements/${logement.id}`} style={{ backgroundImage: `url(${logement.cover})` }} key={logement.id} className="homeContainer__box">
                        <h2 className="homeContainer__box--title">{logement.title}</h2>
                    </Link>
                ))}
            </article>
        </main>
            <Footer />
            </>
    )
}

export default Home;