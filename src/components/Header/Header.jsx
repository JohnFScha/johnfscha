import React from 'react'
import './Header.scss'
import CTA from './CTA'
import Me from '../../assets/me-header.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Welcome</h5>
        <h1>John F.</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <HeaderSocials />
        
        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
      <CTA />
    </header>
  )
}

export default Header