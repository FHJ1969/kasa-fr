import Carousel from '/src/components/carousel/carousel.jsx'
import ObtenirDevis from "../../components/obtenirUnDevis/obtenirUnDevis.jsx";
import Presta from "../../components/presta/presta.jsx";
import Works from '/src/components/works/works.jsx'
import About from '/src/components/about/about.jsx'
import Contact from '/src/components/contact/contact.jsx'

// Génération des éléments de la page d'accueil du site
function Home() {
    return (
        <>
        <main>
            <Carousel />
            <ObtenirDevis />
            <Presta />
            <Works />
            <About />
            <Contact />
        </main>
            </>
    )
}

export default Home;