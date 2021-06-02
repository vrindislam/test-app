import React, {useState} from 'react';
import './style.scss';

const Indicator = ({scrollPos}) => {
  const [activePage, setActivePage] = useState(0);

  return (
    <div className='indicator'>
      <ul className='indicator-pagination'>
        <li data-menuanchor="dashboard"  className={`indicator-pagination-item ${activePage === 0 ?'active' : ''}`}><a href="#dashboard">Start</a></li>
        <li data-menuanchor="about-us"  className={`indicator-pagination-item ${activePage === 1 ?'active' : ''}`}>{scrollPos > 500 && scrollPos < 1450 && <span className='indicator-pagination-item-desc'>&middot;</span>}<a href="#about-us">About us</a></li>
        <li data-menuanchor="features"  className={`indicator-pagination-item ${activePage === 2 ?'active' : ''}`}>{scrollPos > 1450 && scrollPos < 2600 && <span className='indicator-pagination-item-desc'>&middot;</span>}<a href="#features">Features</a></li>
        <li data-menuanchor="projects" className='indicator-pagination-item'>{scrollPos > 2601 && scrollPos < 3990 && <span className='indicator-pagination-item-desc'>&middot;</span>}<a href="#projects">Projects</a></li>
        <li data-menuanchor="contact" className='indicator-pagination-item'>{scrollPos > 3991 && <span className='indicator-pagination-item-desc'>&middot;</span>}<a href="#contact">Contact</a></li>
      </ul>
      <div className='indicator-bar'>
        <span className={scrollPos > 500 ? 'page-marker' : 'page-marker active'}/>
        <span className={scrollPos > 500 && scrollPos < 1450 ? 'page-marker active' : 'page-marker'}/>
        <span className={scrollPos > 1450 && scrollPos < 2600 ? 'page-marker active' : 'page-marker'}/>
        <span className={scrollPos > 2601 && scrollPos < 3990 ? 'page-marker active' : 'page-marker'}/>
        <span className={scrollPos > 3991 ? 'page-marker active' : 'page-marker'}/>
      </div>
    </div>
  );
};

export default Indicator;