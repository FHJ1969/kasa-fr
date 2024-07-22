import './home.sass'
import Logements from '/src/data/logements.json'
import '../../components/HeaderFooter.sass'

function Banner () {
    return (
        <div className="imageContainer">
            <h2 className="imageContainer__title">Chez vous, partout et ailleurs</h2>
        </div>
    )
}

function Home() {
    return (
        <main>
            <Banner />
            <a href="#" className="homeContainer">
                {Logements.map((logement) => (
                    <section key={logement.id} className="homeContainer__box">
                        <h2 className="homeContainer__box--title">{logement.title}</h2>
                    </section>
                ))}
            </a>
        </main>
    )
}

export default Home;