import React, {useState} from 'react';
import './style.scss'
import Slider from 'react-slick'
import NextArrow from "../../components/slickSlider/nextArrow";
import PrevArrow from "../../components/slickSlider/prevArrow";

const Features = () => {
  const width = window.innerWidth
  const [currentSlide, setCurrentSlide] = useState();

  const settings = {
    dots: true,
    dotsClass: "button__bar",
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    beforeChange: (prev, next) => {
      setCurrentSlide({currentSlide: next});
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplay: true,
        }
      },
    ],
  }

  return (
    <div className='features' id='features'>
      <div className='features-heading-container'>
        <h1>Features</h1>
      </div>
      {width > 1919
        ?
        <div className='features-cards'>
          <div className='card'>
            <div className='card-background research'>
              <span>Research</span>
            </div>
            <div className='card-text-container'>
              <p>
                Our research team possesses a fantastic, encyclopaedic knowledge of the beautiful game
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='card-background analytics'>
              <span>Data Analytics</span>
            </div>
            <div className='card-text-container'>
              <p>
                Massive volumes of data converge into our bespoke analytics tool, providing an unparalleled level of
                insight for our expert teams across the entire world of sport
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='card-background execution'>
              <span>Execution</span>
            </div>
            <div className='card-text-container'>
              <p>
                A specialist team uses highly customised methodologies to place vast volumes of our partners bets into
                the market </p>
            </div>
          </div>
        </div>
        :
        <div className="features-slider-wrap">
          <Slider {...settings}>
            <div className='features-slide-container'>
              <div className='card'>
                <div className='card-background research'>
                  <span>Research</span>
                </div>
                <div className='card-text-container'>
                  <p>
                    Our research team possesses a fantastic, encyclopaedic knowledge of the beautiful game
                  </p>
                </div>
              </div>
            </div>
            <div className='features-slide-container'>
              <div className='card'>
                <div className='card-background analytics'>
                  <span>Data Analytics</span>
                </div>
                <div className='card-text-container'>
                  <p>
                    Massive volumes of data converge into our bespoke analytics tool, providing an unparalleled level of
                    insight for our expert teams across the entire world of sport
                  </p>
                </div>
              </div>
            </div>
            <div className='features-slide-container'>
              <div className='card'>
                <div className='card-background execution'>
                  <span>Execution</span>
                </div>
                <div className='card-text-container'>
                  <p>
                    A specialist team uses highly customised methodologies to place vast volumes of our partners bets
                    into
                    the market </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      }
    </div>
  );
};

export default Features;