import React from 'react';
import Logo from "../../components/Logo";
import {Link} from "react-scroll";
import './style.scss'

const NavFooter = () => {
  return (
    <div className='nav-footer'>
      <div className='nav-footer-logo-container'>
        <Logo/>
        <h2 className='nav-footer-logo-desc'>PROFESSIONAL BETTING SYNDICATE</h2>
      </div>
      <div className='nav-footer-tab-wrap'>
        <div className='nav-footer-mob-wrap'>
          <h3 className='nav-footer-link-wrap-heading'>Navigation</h3>
          <div className='nav-footer-link-wrap'>
            <div className='nav-footer-link-wrap-navlinks'>
              <Link smooth='true' className='nav-footer-link-wrap-navlinks-item' to="about-us"><p className='item-text'>About Us</p></Link>
              <Link smooth='true' className='nav-footer-link-wrap-navlinks-item' to="features"><p className='item-text'>Features</p></Link>
            </div>
            <div className='nav-footer-link-wrap-navlinks'>
              <Link smooth='true' className='nav-footer-link-wrap-navlinks-item' to="projects"><p className='item-text'>Partners</p></Link>
              <Link smooth='true' className='nav-footer-link-wrap-navlinks-item' to="contact"><p className='item-text'>Contact</p></Link>
            </div>
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
  );
};

export default NavFooter;