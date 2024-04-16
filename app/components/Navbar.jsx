import SwanDesignLogo from "../../public/swan-logo-transparent.png";
import "../styles/Navbar.css";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link href={"/"}>
          <Image
            src={SwanDesignLogo}
            alt="swan logo"
            className="navbar-logo-img"
          />
        </Link>
      </div>
      <div className="navbar-items-ctn">
        <>
          <Link
            href="/"
            rel="noreferrer"
            className="navbar-item navbar-desktop"
          >
            Home
          </Link>
          <Link
            href="https://duckaroo.com.au/blogs/news"
            rel="noreferrer"
            className="navbar-item navbar-desktop"
          >
            Blogs
          </Link>
          {/* <div className="navbar-item navbar-desktop">D.I.Y Tips</div> */}
          <Link
            href="https://duckaroo.com.au/collections/aquarium-designs"
            rel="noreferrer"
            className="navbar-item navbar-desktop"
          >
            Exhibition
          </Link>
          <Link
            href="https://duckaroo.com.au/pages/contact-us"
            rel="noreferrer"
            className="navbar-item navbar-desktop"
          >
            Contact
          </Link>
        </>
        <div className="navbar-main-CTAs">
          <Link href="https://duckaroo.com.au/collections/all" rel="noreferrer">
            <button className="navbar-btn">Products</button>
          </Link>
          <Link href="/service" rel="noreferrer">
            <button className="navbar-btn">Services</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
