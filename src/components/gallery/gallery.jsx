import './gallery.sass';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useParams} from "react-router-dom";
import Logements from "../../data/logements.json";
import {useState} from "react";

function Gallery(){
    const { id } = useParams();
    const logement = Logements.find(logement => logement.id === id);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
        );
    };
    return (

        <>
            <img className="banner" src={logement.pictures[currentImageIndex]} alt="Image bannière"/>
            <div className="bannerChevron">
                <div className="bannerChevron__container">
                    <button type="button" onClick={handlePrevClick}>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </button>
                    <button type="button" onClick={handleNextClick}>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </button>
                </div>
                <p className="bannerChevron__list">{currentImageIndex + 1}/{logement.pictures.length}</p>
            </div>
        </>
    )
}

export default Gallery