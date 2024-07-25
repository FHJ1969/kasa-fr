import aboutBackground from "../assets/about_background.jpg";
import homeBackground from "../assets/home_background.jpg";
import './Banner.sass';

function Banner () {
    const isHomePage = location.pathname === '/';
    const backgroundImage = isHomePage ? homeBackground : aboutBackground;

    return (
        <div className="about__imageContainer">
            <img
                className="about__imageContainer--image"
                src={backgroundImage}
                alt="Image bannière de paysage"
            />
            <div className="about__imageContainer--overlay"></div>
            {isHomePage ? <h2 className="about__imageContainer--title">Chez vous, partout et ailleurs</h2> : ""}
        </div>
    );
}

export default Banner;
