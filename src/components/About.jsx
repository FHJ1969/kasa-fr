import '../styles/About.sass';
import aboutBackground from '../assets/about_background.jpg'

function About() {
    return (
        <main className="about">
            <div className="about__container">
                <img className="about__container--image" src={aboutBackground} alt="Image de fond de la section à propos"/>
            </div>
        </main>
    )
}

export default About;