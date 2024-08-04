import Chevron from "../../../assets/chevron.png";
import {useParams} from "react-router-dom";
import Logements from "../../../data/logements.json";
import {useState} from "react";
import './collapseService.sass';

function CollapseService(){
    const { id } = useParams();
    const logement = Logements.find(logement => logement.id === id);

    const [openBox, setOpenBox] = useState(null);

    //Eléments prenant en charge le statut du carousel image
    const HandleClick = (id) => {
        setOpenBox(openBox === id ? null : id);
    };
    return (
        <article className="aboutContainer">
            <div className="aboutContainer__box">
                <div className="aboutContainer__box--red">
                    <h3 className="aboutContainer__box--title">Description</h3>
                    <button
                        onClick={() => HandleClick('description')}
                        type="button"
                        className="aboutContainer__box--button"
                    >
                        <img
                            className={`aboutContainer__box--icon ${openBox === 'description' ? 'open' : ''}`}
                            src={Chevron}
                            alt="Icone chevron"
                        />
                    </button>
                </div>
                <p className={`aboutContainer__box--desc ${openBox === 'description' ? 'open' : ''}`}>
                    {logement.description}
                </p>
            </div>

            <div className="aboutContainer__box">
                <div className="aboutContainer__box--red">
                    <h3 className="aboutContainer__box--title">Equipements</h3>
                    <button
                        onClick={() => HandleClick('equipments')}
                        type="button"
                        className="aboutContainer__box--button"
                    >
                        <img
                            className={`aboutContainer__box--icon ${openBox === 'equipments' ? 'open' : ''}`}
                            src={Chevron}
                            alt="Icone chevron"
                        />
                    </button>
                </div>
                <div className={`aboutContainer__box--desc ${openBox === 'equipments' ? 'open' : ''}`}
                     style={{display: 'flex', flexDirection: 'column'}}>
                    {logement.equipments.map((equipement) => (
                        <p key={equipement}>{equipement}</p>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default CollapseService;