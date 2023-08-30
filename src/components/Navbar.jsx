import SwanDesignLogo from '../assets/SwanDesignLogo.png';
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <img src={SwanDesignLogo} />
      </div>
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