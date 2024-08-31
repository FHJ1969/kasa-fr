import './carousel.sass';
import { useState, useEffect } from "react";
import image1 from "/src/assets/landing-page/peinture-generale.png"
import image2 from "/src/assets/landing-page/peinture-exterieur.png"
import image3 from "/src/assets/landing-page/papier-peint.png"


const Carousel = () => {
    const images = [image1, image2, image3];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            // Fade out before the image changes
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
                setFade(true); // Fade dans la nouvelle image
            }, 300); // Fade out (300ms)
        }, 3000); // 3 pour chaque slides

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div className="carousel">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="carousel__image"
                    style={{
                        opacity: fade ? 1 : 0,
                        transition: "opacity 0.3s ease-in-out",
                    }}
                />
                <div className="carouselCover"></div>
            </div>
            <div className="carouselCaption">
                <p className="carouselCaption__title1 carouselCaption__title">notre savoir faire,</p>
                <p className="carouselCaption__title2 carouselCaption__title">vos envies</p>
                <a href="#" className="carouselCaption__link">VOIR NOS OFFRES</a>
            </div>
        </>
    );
};

export default Carousel;