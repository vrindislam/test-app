import React from 'react';
import logoTab from '../../assets/dashboard-logo-tab.svg'
import './style.scss';
import {animateScroll as scroll} from "react-scroll";

const Logo = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  }
  return (
    <div className='tycoon-logo-container' onClick={scrollToTop}>
      <img
        className='tycoon-logo-container-tycoon-logo'
        src={logoTab}
        alt="tycoon-logo"
      />
    </div>
  );
};

export default Logo;