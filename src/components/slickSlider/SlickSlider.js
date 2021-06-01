import React, {useState} from 'react';
import Slider from 'react-slick'
import iconMarker from "../../assets/icon-marker.svg";
import iconEmail from "../../assets/icon-email.svg";
import iconSkype from "../../assets/icon-skype.svg";
import iconPhone from "../../assets/icon-phone.svg";
import NextArrow from './nextArrow';
import PrevArrow from './prevArrow';

const SlickSlider = () => {

  const [currentSlide, setCurrentSlide] = useState();

  const settings = {
    dots: false,
    dotsClass: "button__bar",
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow className="prev-arrow"/>,
    beforeChange: (prev, next) => {
      setCurrentSlide({currentSlide: next});
    },
    responsive: [
      {
        breakpoint: 1919,
        settings: {
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          autoplay: true,
        }
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <div className='slider-container'>
          <div className='slider-map'>
            <iframe src='https://snazzymaps.com/embed/314476' title='sau-paulo-map'
                    style={{width: "100%", height: "100%", border: "none"}}/>
          </div>
          <div className='contact-info-container'>
            <a className='slider-contact-info' href='https://snazzymaps.com/embed/314476' rel='noreferrer'
               target='_blank'>
              <img src={iconMarker} alt="marker"/>
              <p>Av. das Nações Unidas, 8501 - Pinheiros, São Paulo, Brasil</p>
            </a>
            <a className='slider-contact-info' href="mailto:a@tycoon.bet" rel='noreferrer' target='_blank'>
              <img src={iconEmail} alt="email"/>
              <p className='email-link'>a<span className='email-at'>@</span>tycoon.bet</p>
            </a>
            <a className='slider-contact-info' href="skype:Tycoon Syndicate?call" rel='noreferrer' target='_blank'>
              <img src={iconSkype} alt="skype"/>
              <p className='skype-link'>Tycoon Syndicate (a<span className='email-at'>@</span>tycoon.bet)</p>
            </a>
            <a className='slider-contact-info' href="tel:+447999998818">
              <img src={iconPhone} alt="phone"/>
              <p>+44 7 99999 8818</p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className='slider-container'>
          <div className='slider-map'>
            <iframe src='https://snazzymaps.com/embed/314478' title='sau-paulo-map'
                    style={{width: "100%", height: "100%", border: "none"}}/>
          </div>
          <div>
            <a className='slider-contact-info' href='https://snazzymaps.com/embed/314478' rel='noreferrer'
               target='_blank'>
              <img src={iconMarker} alt="marker"/>
              <p>Av Vitacura 2736, Las Condes, Región Metropolitana, Chile</p>
            </a>
            <a className='slider-contact-info' href="tel:+5511977211111">
              <img src={iconPhone} alt="phone"/>
              <p>+55 11 9772 11111</p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className='slider-container'>
          <div className='slider-map'>
            <iframe src='https://snazzymaps.com/embed/314479' title='sau-paulo-map'
                    style={{width: "100%", height: "100%", border: "none"}}/>
          </div>
          <div>
            <a className='slider-contact-info' href='https://snazzymaps.com/embed/314479' rel='noreferrer'
               target='_blank'>
              <img src={iconMarker} alt="marker"/>
              <p>Circuito de Playas 156, Cercado de Lima, Peru</p>
            </a>
            <a className='slider-contact-info' href="tel:+5511977211111">
              <img src={iconPhone} alt="phone"/>
              <p>+55 11 9772 11111</p>
            </a>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default SlickSlider;