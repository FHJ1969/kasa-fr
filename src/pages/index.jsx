// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../pages/home/home.jsx';
import About from './about/about.jsx';
import Error from './error404/error.jsx';
import Service from './service/service.jsx';
import '../index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";

//Génération du DOM selon l'url de la page
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/logements" element={<Service />} />
                <Route path="/logements/:id" element={<Service />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
