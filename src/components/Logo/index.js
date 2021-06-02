import React from 'react';
import logoTab from '../../assets/dashboard-logo-tab.svg'
import './style.scss';

const Logo = () => {
  const width = window.innerWidth

  return (
    <ul className='tycoon-logo-container' data-menuanchor="dashboard">
      <li data-menuanchor="dashboard1"><a href="#dashboard1">
        <img
          className='tycoon-logo-container-tycoon-logo'
          src={logoTab}
          alt="tycoon-logo"
        />
      </a>
      </li>
    </ul>
  );
};

export default Logo;