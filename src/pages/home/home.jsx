import './home.sass'
import { Link } from 'react-router-dom'
import Logements from '/src/data/logements.json'
import '../../components/header/header.sass'
import Banner from '../../components/banner/banner.jsx'

// Génération des éléments de la page d'accueil du site
function Home() {
    return (
        <>
        <main>
            <Banner />

            <div className="homeContainer">
                {Logements.map((logement) => (
                    <Link to={`/logements/${logement.id}`} style={{ backgroundImage: `url(${logement.cover})` }} key={logement.id} className="homeContainer__box">
                        <h2 className="homeContainer__box--title">{logement.title}</h2>
                    </Link>
                ))}
            </div>
        </main>
            </>
    )
}

export default Home;