import SwanDesignLogo from '../../public/swan-logo-transparent.png';
import '../styles/Navbar.css'
import HamburgerMenu from './HamburgerMenu.jsx';
import Image from "next/image";
import Link from "next/link"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <Image src={SwanDesignLogo} alt='swan logo' className="navbar-logo-img"/>
      </div>
      <div className="navbar-items-ctn">
        <HamburgerMenu />
        <>
            <Link href="/" rel="noreferrer" className="navbar-item navbar-desktop">Home</Link>
            <div className="navbar-item navbar-desktop">Blogs</div>
            {/* <div className="navbar-item navbar-desktop">D.I.Y Tips</div> */}
            <div className="navbar-item navbar-desktop">Exhibition</div>
            <div className="navbar-item navbar-desktop">Contact</div>
        </>
        <div className='navbar-main-CTAs'>
          <Link target="_blank" href="https://duckaroo.com.au" rel="noreferrer">
            <button className="navbar-btn">Products</button>
          </Link>
          <Link target="_blank" href="/service" rel="noreferrer">
            <button className="navbar-btn">Services</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar