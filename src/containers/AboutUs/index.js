import React from 'react';
import './style.scss'

const AboutUs = () => {
  return (
    <div className='aboutUs' id='about-us'>
      <div className='aboutUs-heading-container'>
        <h1>About Us</h1>
        <p>Tycoon Syndicate is a shark team of betting professionals established in 2019. We are a team of smart poker
          players, lucky stock traders, talented mathematicians, progressive programmers and experienced investment
          advisors. Our target is the most accurate sports predictions, communication between players, providing
          liquidity to smart players.</p>
      </div>
      <div className='cards-container'>
        <div className="cards-container-item abstraction">
          <div>
            <span>THE WORLD’S MOST</span>
            <p className='cards-container-item-text'>ACCURATE SOCCER & NHL, NBA & MLB, NFL & UFC PREDICTIONS</p>
          </div>
        </div>
        <div className="cards-container-item money">
          <div>
            <span>TYCOON.BET SYNDICATE</span>
            <p className='cards-container-item-text'>Turnover over $200 million per month, high profitability of smart &
              value bets</p>
          </div>
        </div>
        <div className="cards-container-item player">
          <div>
            <span>OUR PREDICTIONS</span>
            <p className='cards-container-item-text'>are based on dynamic technologies and work best when the game is
              fair</p>
          </div>
        </div>
        <div className="cards-container-item world">
          <div>
            <span>ALL WORLD </span>
            <p className='cards-container-item-text'>We live in 8 languages, play 6 sports on all continents, over 100
              sports leagues, 10 currencies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;