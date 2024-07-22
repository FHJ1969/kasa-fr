import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Home from '../pages/home/home.jsx'
//import About from './about/About.jsx'
//import Error from './error404/error.jsx'
import '../styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header />
        <Home />
      <Footer />
  </React.StrictMode>
)
