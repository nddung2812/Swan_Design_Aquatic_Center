'use client'
import '../styles/HamburgerMenu.css';
import { useState } from 'react';

const HamburgerMenu = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleMenuClick = () => {
    setMenuToggle(!menuToggle)
  }
  return (
    <>
      {!menuToggle ? (
        <div className="menu-toggle" onClick={handleMenuClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      ) : (
        <div className='navbar-mobile-wrapper'>
          <div>
            <div className="navbar-item">Home</div>
            <div className="navbar-item">Blogs</div>
            <div className="navbar-item">D.I.Y Tips</div>
            <div className="navbar-item">Exhibition</div>
            <div className="navbar-item">Contact</div>
          </div>
          <div>
            <div className='navbar-close-btn' onClick={handleMenuClick}>&#10005;</div>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;



