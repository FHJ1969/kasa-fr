// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../pages/home/home.jsx';
import About from './about/About.jsx';
import Error from './error404/error.jsx';
import Service from './service/Service.jsx';
import '../index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Génération du DOM selon l'url de la page
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/logements" element={<Service />} />
                <Route path="/logements/:id" element={<Service />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
