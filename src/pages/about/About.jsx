//Importation des dépendances
import './About.sass';
import aboutBackground from '../../assets/about_background.jpg'
import Chevron from '../../assets/chevron.png'
import aboutJSON from '../../data/about.json'

//Génération dynamique de la bannière de la page A propos et Acueuil
function Banner () {
    return (
        <div className="about__imageContainer">
            <img className="about__imageContainer--image" src={aboutBackground}
                 alt="Image de fond de la section à propos"/>
        </div>
    )
}

//Génération dynamique de la page A propos
function About() {
    return (
        <main className="about">
            <Banner/>
            <div className="aboutContainer">
                {aboutJSON.map((aboutBox) => (
                    <div key={aboutJSON.id} className="aboutContainer__box">
                        <div className="aboutContainer__box--red">
                            <h3 className="aboutContainer__box--title">{aboutBox.name}</h3>
                            <button type="button" className="aboutContainer__box--button">
                                <img className="aboutContainer__box--icon" src={Chevron} alt="Icone chevron"/>
                            </button>
                        </div>
                        <p className="aboutContainer__box--desc">{aboutBox.desc}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}

//Exportation des éléments DOM à réutiliser
export { Banner, About as default };