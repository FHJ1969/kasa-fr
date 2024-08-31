import './about.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faLocationDot} from '@fortawesome/free-solid-svg-icons';

function About() {
    return(
        <div className="about">
            <div className="about__about">
                <p className="about__about--title"> <FontAwesomeIcon icon={faComments} /> Qui sommes-nous ?</p>
                <p className="about__about--description">Notre entreprise Toile d'Art
                    basé à Mèze et opérant dans l’hérault est spécialisée pour toutes prestations de peinture et rénovation de votre habitation.<br/><br/>
                    Reconnue dans le département,  nous saurons vous proposer des prestations de qualité à la hauteur de vos attentes et de vos projets.
                </p>
            </div>

            <div className="about__locations">
                <p className="about__locations--title"><FontAwesomeIcon icon={faLocationDot}/> Zones d'intervention</p>
                <p className="about__locations--description">Nous intervenons dans ces secteurs :</p>
                <ul className="about__locations--list">
                    <li>Hérault</li>
                    <li>Mèze et ses alentours</li>
                    <li>Sète</li>
                    <li>Montpellier</li>
                </ul>
            </div>
        </div>
    )
}

export default About