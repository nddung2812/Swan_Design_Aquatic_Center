import SwanDesignLogo from '../../public/swan-logo-transparent.png';
import '../styles/Navbar.css'
import HamburgerMenu from './HamburgerMenu.jsx';
import Image from "next/image";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <Image src={SwanDesignLogo} alt='swan logo' className="navbar-logo-img"/>
      </div>
      <div className="navbar-items-ctn">
        <HamburgerMenu />
        <>
            <div className="navbar-item navbar-desktop">Home</div>
            <div className="navbar-item navbar-desktop">Blogs</div>
            <div className="navbar-item navbar-desktop">D.I.Y Tips</div>
            <div className="navbar-item navbar-desktop">Exhibition</div>
            <div className="navbar-item navbar-desktop">Contact</div>
        </>
          <a target="_blank" href="https://duckaroo.com.au" rel="noreferrer">
            <button className="navbar-btn">Products</button>
          </a>
      </div>
    </div>
  )
}

export default Navbar