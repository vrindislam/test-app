import React from 'react';
import './style.scss';
import {animateScroll as scroll, Link} from "react-scroll";

const Indicator = ({scrollPos}) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  }
  return (
    <div className='indicator'>
      <ul className='indicator-pagination'>
        <li className='indicator-pagination-item' onClick={scrollToTop}>Start</li>
        <li className='indicator-pagination-item'>{scrollPos > 500 && scrollPos < 1450 && <span className='indicator-pagination-item-desc'>&middot;</span>}<Link smooth='true' activeClass='active' to="aboutUs">About us</Link></li>
        <li className='indicator-pagination-item'>{scrollPos > 1450 && scrollPos < 2600 && <span className='indicator-pagination-item-desc'>&middot;</span>}<Link smooth='true' activeClass='active' to="features">Features</Link></li>
        <li className='indicator-pagination-item'>{scrollPos > 2601 && scrollPos < 3990 && <span className='indicator-pagination-item-desc'>&middot;</span>}<Link smooth='true' activeClass='active' to="projects">Projects</Link></li>
        <li className='indicator-pagination-item'>{scrollPos > 3991 && <span className='indicator-pagination-item-desc'>&middot;</span>}<Link smooth='true' activeClass='active' to="contact">Contact</Link></li>
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