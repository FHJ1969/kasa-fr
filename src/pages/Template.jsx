import { useState } from 'react'
import kasaLogoBlack from '../assets/kasa_logo_black.png'
import kasaLogoWhite from '../assets/kasa_logo_white.png'
import '../styles/Template.sass'

function Template() {
  return (
    <>
      <header className="header" style={{ marginBottom: '50px' }}>
        <img src={kasaLogoWhite} alt="Logo de l'entreprise Kasa" className="header__logo"/>
          <nav className="header__navbar">
              <a className="header__navbar--link">Acceuil</a>
              <a className="header__navbar--link">A propos</a>
          </nav>
      </header>
      <footer className="footer">
          <img src={kasaLogoBlack} alt="Logo de l'entreprise Kasa" className='footer__logo' />
          <h3 className="footer__copyright">© 2020 Kasa. All rights reserved</h3>
      </footer>
    </>
  )
}

export default Template
