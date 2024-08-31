import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home.jsx';
import About from './about/about.jsx';
import Error from './error404/error.jsx';
import Service from './service/service.jsx';
import '../index.css';
import ScrollTop from '../components/scrollTop.jsx';
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';

const App = () => (
    <Router>
        <ScrollTop />
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/logements/:id" element={<Service />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </Router>
);

// Génération du DOM selon l'url de la page
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
