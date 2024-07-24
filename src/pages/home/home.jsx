import './home.sass'
import { Link } from 'react-router-dom'
import Logements from '/src/data/logements.json'
import '../../components/HeaderFooter.sass'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'

function Home() {
    return (
        <>
            <Header />
        <main>
            <div className="imageContainer">
                <h2 className="imageContainer__title">Chez vous, partout et ailleurs</h2>
            </div>

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