import './gallery.sass';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import Logements from "../../data/logements.json";
import { useState, useEffect } from "react";

function Gallery() {
    const { id } = useParams();
    const logement = Logements.find(logement => logement.id === id);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrevClick = () => {
        if (!isMobile || currentImageIndex > 0) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
            );
        }
    };

    const handleNextClick = () => {
        if (!isMobile || currentImageIndex < logement.pictures.length - 1) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const isSingleImage = logement.pictures.length === 1;

    return (
        <>
            <img className="banner" src={logement.pictures[currentImageIndex]} alt="Image bannière" />
            <div className={`bannerChevron ${isSingleImage ? 'singleImage' : ''}`}>
                {!isSingleImage && (
                    <div className="bannerChevron__container">
                        <button
                            type="button"
                            onClick={handlePrevClick}
                            disabled={isMobile && currentImageIndex === 0}
                            className={isMobile && currentImageIndex === 0 ? 'hidden-button' : ''}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button
                            type="button"
                            onClick={handleNextClick}
                            disabled={isMobile && currentImageIndex === logement.pictures.length - 1}
                            className={isMobile && currentImageIndex === logement.pictures.length - 1 ? 'hidden-button' : ''}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                )}
                {!isSingleImage && (
                    <p className="bannerChevron__list">{currentImageIndex + 1}/{logement.pictures.length}</p>
                )}
            </div>
        </>
    );
}

export default Gallery;
