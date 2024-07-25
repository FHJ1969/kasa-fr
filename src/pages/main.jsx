// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../pages/home/home.jsx';
import About from './about/About.jsx';
import Error from './error404/error.jsx';
import Card from './service/Card.jsx';
import '../styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/logements" element={<Card />} />
                <Route path="/logements/:id" element={<Card />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
