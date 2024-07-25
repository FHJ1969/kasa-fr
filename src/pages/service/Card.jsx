// Card.jsx
import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Logements from '/src/data/logements.json';
import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header.jsx";
import './Card.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Chevron from "../../assets/chevron.png";

function Card() {
    const { id } = useParams();
    const logement = Logements.find(logement => logement.id === id);

    const [openBox, setOpenBox] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const HandleClick = (id) => {
        setOpenBox(openBox === id ? null : id);
    };

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

    const rating = logement?.rating || 0; // Default to 0 if logement is undefined
    const totalStars = 5;

    // Redirect to error page if logement is undefined
    if (!logement) {
        return <Navigate to="/error" />;
    }

    return (
        <>
            <Header />
            <main className="main">
                <img className="banner" src={logement.pictures[currentImageIndex]} alt="Image bannière" />
                <div className="bannerChevron">
                    <div className="bannerChevron__container">
                        <button type="button" onClick={handlePrevClick}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button type="button" onClick={handleNextClick}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                    <p className="bannerChevron__list">{currentImageIndex + 1}/{logement.pictures.length}</p>
                </div>

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
                            <img className="rateContainer__profile--picture" src={logement.host.picture} alt={logement.host.name} />
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
                        <div className={`aboutContainer__box--desc ${openBox === 'equipments' ? 'open' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
                            {logement.equipments.map((equipement) => (
                                <p key={equipement}>{equipement}</p>
                            ))}
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}

export default Card;