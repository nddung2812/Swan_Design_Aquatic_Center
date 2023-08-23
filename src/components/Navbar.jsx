import SwanDesignLogo from '../assets/SwanDesignLogo.png';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="navbar-logo">
        <img src={SwanDesignLogo}/>
    </div>
    <div className="navbar-items-ctn">
        <div className="navbar-item">Home</div>
        <div className="navbar-item">Blogs</div>
        <div className="navbar-item">Exhibition</div>
        <div className="navbar-item">Contact</div>
        <button className="navbar-btn">Products</button>
    </div>
    </div>
  )
}

export default Navbar