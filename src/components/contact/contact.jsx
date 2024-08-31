import './contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhoneVolume, faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return(
        <div className="contact">
            <p className="contact__title"><FontAwesomeIcon icon={faPaperPlane}/> NOUS CONTACTER</p>
            <p className="contact__description">nos disponibilités (8h-17h)</p>
            <div className="contact__icons">
                <a href="tel:+33767560121" target="_blank"><FontAwesomeIcon icon={faPhoneVolume} className="contact__icons--icon"/></a>
                <a href="mailto:toiledart7@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="contact__icons--icon"/></a>
            </div>
        </div>
    )
}

export default Contact;