import React, { useState } from 'react';
import './works.scss';
import works from '/src/data/works.json';
import ImageModal from './ImageModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Works() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <p className="worksTitle"> <FontAwesomeIcon icon={faCameraRetro} style={{marginRight: "15px"}} />Nos réalisations</p>
            <div className="works">
                {works.map((work) => (
                    <div
                        className="work"
                        key={work.id}
                        style={{ backgroundImage: `url(${work.img})` }}
                        onClick={() => openModal(work.img)}
                    >
                        <p className="work__title">{work.name}</p>
                    </div>
                ))}
                {selectedImage && <ImageModal imageUrl={selectedImage} onClose={closeModal} />}
            </div>
            <p className="worksDesc">Voir nos autres réalisations sur :
                <a href="https://www.facebook.com/people/Toile-Dart/100057205879381/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} className="worksDesc__icon" style={{color:"white", marginLeft:"15px"}}/></a>
                <a href="https://www.instagram.com/toile_d_art/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="worksDesc__icon" style={{color:"white", marginLeft:"15px"}}/></a>
            </p>
        </>
    );
}

export default Works;
