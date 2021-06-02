import React, {useState} from 'react';
import './style.scss'
import burgerCross from '../../assets/burger-cross.svg'
import burgerSpans from '../../assets/burger-spans.svg'

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const width = window.innerWidth;

  const menuToggle = () => {
    setMenu(!menu)
  }
  return (
    <div className='navbar'>
      {menu
        ?
        <div className='navbar-wrap'>
          <ul className='navbar-wrap-links'>
            <li data-menuanchor="about-us"><a className='navbar-link' href='#about-us'>About Us</a></li>
            <li data-menuanchor="features"><a className='navbar-link' href='#features'>Features</a></li>
            <li data-menuanchor="projects"><a className='navbar-link' href='#projects'>Projects</a></li>
            <li data-menuanchor="contact"><a className='navbar-link' href='#contact'>Contact</a></li>
          </ul>
          <div onClick={menuToggle} className='navbar-burger active'>
            <img src={burgerCross} alt="burger-menu"/>
          </div>
        </div>
        :
        <div onClick={menuToggle} className='navbar-burger static'>
          <img src={burgerSpans} alt="burger-menu"/>
        </div>
      }
      <ul className='navbar-web-links'>
        <li data-menuanchor="about-us1"><a className='navbar-link' href={width > 1919 ? '#about-us1' : '#about-us'}>About Us</a></li>
        <li data-menuanchor="features1"><a className='navbar-link' href={width > 1919 ? '#features1' : '#features'}>Features</a></li>
        <li data-menuanchor="projects1"><a className='navbar-link' href={width > 1919 ? '#projects1' : '#projects'}>Projects</a></li>
        <li data-menuanchor="contact1"><a className='navbar-link' href={width > 1919 ? '#contact1' : '#contact'}>Contact</a></li>
      </ul>
    </div>
  );
};

export default NavBar;