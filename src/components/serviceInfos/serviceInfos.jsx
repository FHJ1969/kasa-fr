import './serviceInfos.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {useParams} from "react-router-dom";
import Logements from "../../data/logements.json";

function ServiceInfos() {
    const { id } = useParams();
    const logement = Logements.find(logement => logement.id === id);

    const rating = logement?.rating || 0; // Par défaut à 0 si logement est indéfini
    const totalStars = 5;
    return (
        <div className="main__content">
            <article className="titleContainer">
                <h2 className="titleContainer__title">{logement.title}</h2>
                <h3 className="titleContainer__location">{logement.location}</h3>
                <div className="titleContainer__tags">
                    {logement.tags.map((tag) => (
                        <h4 className="titleContainer__tags--item" key={tag}>{tag}</h4>
                    ))}
                </div>
            </article>
            <article className="rateContainer">
                <section className="rateContainer__profile">
                    <h3 className="rateContainer__profile--name">
                        {logement.host.name}
                    </h3>
                    <img className="rateContainer__profile--picture" src={logement.host.picture}
                         alt={logement.host.name}/>
                </section>
                <section className="rateContainer__rate">
                    {[...Array(totalStars)].map((_, index) => (
                        <FontAwesomeIcon
                            key={index}
                            className={`rateContainer__rate--star ${index < rating ? '' : 'empty'}`}
                            icon={faStar}
                        />
                    ))}
                </section>
            </article>
        </div>
    )
}

export default ServiceInfos;