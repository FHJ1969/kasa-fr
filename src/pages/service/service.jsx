// service.jsx
import { useParams, Navigate } from 'react-router-dom';
import Logements from '/src/data/logements.json';
import Gallery from "../../components/gallery/gallery.jsx";
import CollapseService from "../../components/collapseService/collapseService.jsx";
import ServiceInfos from "../../components/serviceInfos/serviceInfos.jsx";

//Génération de a page service qui affiche les détails des offres proposées sur la page d'acceuil
function Service() {
    const { id } = useParams();
    const Logement = Logements.find(Logement => Logement.id === id);

    // Redirection vers la page error si logement n'est pas défini
    if (!Logement) {
        return <Navigate to="/error" />;
    }

    //Génération du DOM
    return (
        <>
            <main className="main">
                <Gallery />
                <ServiceInfos />
                <CollapseService />
            </main>
        </>
    );
}

export default Service;