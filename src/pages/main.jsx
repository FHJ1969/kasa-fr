import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import About from '../components/About.jsx'
import '../styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
      <About />
      <Footer />
  </React.StrictMode>,
)
