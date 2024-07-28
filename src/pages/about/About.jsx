import { useState } from 'react';
import './About.sass';
import Chevron from '../../assets/chevron.png';
import aboutJSON from '../../data/about.json';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Banner from '../../components/Banner.jsx'

//Génération de la page A propos, composé d'une liste déroulante de boîtes'
function About() {
    const [openBox, setOpenBox] = useState(null);

    const HandleClick = (id) => {
        setOpenBox(openBox === id ? null : id);
    };

    return (
        <>
            <Header />
            <main className="about">
                <Banner />
                <div className="aboutContainer">
                    {aboutJSON.map((aboutBox) => (
                        <div key={aboutBox.id} className="aboutContainer__box">
                            <div className="aboutContainer__box--red">
                                <h3 className="aboutContainer__box--title">{aboutBox.name}</h3>
                                <button
                                    onClick={() => HandleClick(aboutBox.id)}
                                    type="button"
                                    className="aboutContainer__box--button"
                                >
                                    <img
                                        className={`aboutContainer__box--icon ${openBox === aboutBox.id ? 'open' : ''}`}
                                        src={Chevron}
                                        alt="Icone chevron"
                                    />
                                </button>
                            </div>
                            <p
                                className={`aboutContainer__box--desc ${openBox === aboutBox.id ? 'open' : ''}`}
                            >
                                {aboutBox.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default About;
