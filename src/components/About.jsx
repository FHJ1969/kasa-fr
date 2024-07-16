import '../styles/About.sass';
import aboutBackground from '../assets/about_background.jpg'
import Chevron from '../assets/chevron.png'

function About() {
    return (
        <main className="about">
            <div className="about__imageContainer">
                <img className="about__imageContainer--image" src={aboutBackground} alt="Image de fond de la section à propos"/>
            </div>

            <div className="aboutContainer">
                <div className="aboutContainer__box">
                    <h3 className="aboutContainer__box--title">Fiabilité</h3>
                    <img style={{cursor: "pointer"}} src={Chevron} alt="Icone chevron"/>
                </div>
                <div className="aboutContainer__box">
                    <h3 className="aboutContainer__box--title">Respect</h3>
                    <img style={{cursor: "pointer"}} src={Chevron} alt="Icone chevron"/>
                </div>
                <div className="aboutContainer__box">
                    <h3 className="aboutContainer__box--title">Service</h3>
                    <img style={{cursor: "pointer"}} src={Chevron} alt="Icone chevron"/>
                </div>
                <div className="aboutContainer__box">
                    <h3 className="aboutContainer__box--title">Sécurité</h3>
                    <img style={{cursor: "pointer"}} src={Chevron} alt="Icone chevron" className="aboutContainer__box--icon"/>
                </div>
            </div>
        </main>
    )
}

export default About;