import './presta.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons';
import Prestas from '/src/data/prestas.json';

function Presta() {
    return (
        <>
            <div className="prestaTitle">
                <p className="prestaTitle__title">
                    <FontAwesomeIcon icon={faFillDrip} /> Nos prestations
                </p>
            </div>

            <div className="presta">
                {Prestas.map((presta) => (
                    <div className="prestas" key={presta.id}>
                        <div className="prestas__title">{presta.title}</div>
                        <img className="prestas__img" src={presta.img} alt="image"></img>
                        <div className="prestas__desc">{presta.desc}</div>
                        <a href="#" className="prestas__link">En savoir plus</a>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Presta;
