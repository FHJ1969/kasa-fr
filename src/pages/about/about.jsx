import Banner from '../../components/banner/banner.jsx'
import CollapseAbout from "../../components/collapse/collapseAbout/collapseAbout.jsx";

//Génération de la page A propos, composé d'une liste déroulante de boîtes'
function About() {
    return (
        <>
            <main className="about">
                <Banner />
                <CollapseAbout />
            </main>
        </>
    );
}

export default About;
