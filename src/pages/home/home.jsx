import Banner from '../../components/banner/banner.jsx'
import ServiceList from "../../components/services/serviceList/serviceList.jsx";

// Génération des éléments de la page d'accueil du site
function Home() {
    return (
        <>
        <main>
            <Banner />
            <ServiceList />
        </main>
            </>
    )
}

export default Home;