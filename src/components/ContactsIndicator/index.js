import React from 'react';
import './style.scss';

const ContactsIndicator = () => {
  return (
    <div className='contacts-indicator'>
      <span className='contacts-indicator-text'>Follow us</span>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a className='contacts-indicator-telegram' href="https://t.me/tycoon_bet" target='_blank' rel="noreferrer"/>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a className='contacts-indicator-instagram' href="https://t.me/tycoon_chat" target='_blank' rel="noreferrer"/>
    </div>
  );
};

export default ContactsIndicator;