import React from 'react';
import './style.scss'
import SlickSlider from "../../components/slickSlider/SlickSlider";

const Contact = () => {

  return (
    <div className='contact'>
      <div className='contact-background'>
        <div className='contact-heading'>
          <h1>Contact</h1>
        </div>
        <div className='contact-background-map'>
          <SlickSlider/>
        </div>
      </div>
    </div>
  );
};

export default Contact;