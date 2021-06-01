import React, {useState} from 'react';
import {NavbarData} from "../../utils/NavbarData";
import './style.scss'
import burgerCross from '../../assets/burger-cross.svg'
import burgerSpans from '../../assets/burger-spans.svg'
import {Link} from "react-scroll";

const NavBar = () => {
  const [menu, setMenu] = useState(false)

  const menuToggle = () => {
    setMenu(!menu)
  }
  const links = NavbarData.map((link, index) =>
    <Link className={link.cName} smooth='true' activeClass='active' key={index} to={link.path}>{link.title}</Link>
  )
  return (
    <div className='navbar'>
      {menu
        ?
        <div className='navbar-wrap'>
          <div className='navbar-wrap-links'>{links}</div>
          <div onClick={menuToggle} className='navbar-burger active'>
            <img src={burgerCross} alt="burger-menu"/>
          </div>
        </div>
        :
        <div onClick={menuToggle} className='navbar-burger static'>
          <img src={burgerSpans} alt="burger-menu"/>
        </div>
      }
      <div className='navbar-web-links'>{links}</div>
    </div>
  );
};

export default NavBar;