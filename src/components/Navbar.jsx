import SwanDesignLogo from '../assets/SwanDesignLogo.png';
import { useState } from 'react';
import '../styles/Navbar.css'
import HamburgerMenu from './HamburgerMenu.jsx';
const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <img src={SwanDesignLogo} />
      </div>
      <HamburgerMenu />
      <div className="navbar-items-ctn">
        <div className="navbar-item">Home</div>
        <div className="navbar-item">Blogs</div>
        <div className="navbar-item">D.I.Y Tips</div>
        <div className="navbar-item">Exhibition</div>
        <div className="navbar-item">Contact</div>
        <a target="_blank" href="https://duckaroo.com.au" rel="noreferrer">
          <button className="navbar-btn">Products</button>
        </a>
      </div>
    </div>
  )
}

export default Navbar