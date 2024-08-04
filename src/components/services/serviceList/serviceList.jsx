import './serviceList.sass'
import Logements from "../../../data/logements.json";
import {Link} from "react-router-dom";

function ServiceList() {
    return (
        <div className="homeContainer">
            {Logements.map((logement) => (
                <Link to={`/logements/${logement.id}`} style={{backgroundImage: `url(${logement.cover})`}}
                      key={logement.id} className="homeContainer__box">
                    <h2 className="homeContainer__box--title">{logement.title}</h2>
                </Link>
            ))}
        </div>
    )
}

export default ServiceList;