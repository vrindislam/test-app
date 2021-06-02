import React from 'react';
import Logo from "../../components/Logo";
import './style.scss'
import Footer from "../Footer";

const NavFooter = () => {
  const width = window.innerWidth
  return (
    <div className='footer-wrap'>
    <div className='nav-footer'>
      <div className='nav-footer-logo-container'>
        <Logo/>
        <h2 className='nav-footer-logo-desc'>PROFESSIONAL BETTING SYNDICATE</h2>
      </div>
      <div className='nav-footer-tab-wrap'>
        <div className='nav-footer-mob-wrap'>
          <h3 className='nav-footer-link-wrap-heading'>Navigation</h3>
          <div className='nav-footer-link-wrap'>
            <ul className='nav-footer-link-wrap-navlinks'>
              <li data-menuanchor="about-us1"><a className='nav-footer-link-wrap-navlinks-item' href={width > 1919 ? '#about-us1' : '#about-us'}><p className='item-text'>About Us</p></a></li>
              <li data-menuanchor="features1"><a className='nav-footer-link-wrap-navlinks-item' href={width > 1919 ? '#features1' : '#features'}><p className='item-text'>Features</p></a></li>
            </ul>
            <ul className='nav-footer-link-wrap-navlinks'>
              <li data-menuanchor="projects1"><a className='nav-footer-link-wrap-navlinks-item' href={width > 1919 ? '#projects1' : '#projects'}><p className='item-text'>Partners</p></a></li>
              <li data-menuanchor="contact1"><a className='nav-footer-link-wrap-navlinks-item' href={width > 1919 ? '#contact1' : '#contact'}><p className='item-text'>Contact</p></a></li>
            </ul>
          </div>
        </div>
        <div className='nav-footer-social-media'>
          <h3 className='nav-footer-link-wrap-heading'>Social Media</h3>
          <a className='nav-footer-social-media-telegram' href="https://t.me/tycoon_bet" target='_blank'
             rel="noreferrer">
            <p>Telegram CHANNEL</p></a>
          <a className='nav-footer-social-media-chat' href="https://t.me/tycoon_chat" target='_blank' rel="noreferrer">
            <p>Telegram
              CHAT</p></a>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default NavFooter;