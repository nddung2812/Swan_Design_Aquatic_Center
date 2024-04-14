import "../styles/Footer.css";
import {
  TfiYoutube,
  TfiFacebook,
  TfiInstagram,
  TfiEmail,
} from "react-icons/tfi";
import payment from "../../public/payment.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-ctn">
      <div className="footer-top-ctn">
        <div className="footer-top-item">
          <Link href="https://duckaroo.com.au/collections/all">
            Shop With Us
          </Link>
          <Link href="https://duckaroo.com.au/pages/contact-us">
            Contact Us
          </Link>
        </div>
        <div className="footer-top-item">
          <Link href="https://duckaroo.com.au/collections/all">Products</Link>
          <a href="">Exhibition</a>
          <Link href="https://duckaroo.com.au/collections/bucephalandra-anubias">
            Rare Bucephalandra - Anubias
          </Link>
        </div>
        <div className="footer-top-item">
          <Link href="https://duckaroo.com.au/pages/about-us">About Us</Link>
          <Link href="https://duckaroo.com.au/blogs/news">Blogs</Link>
          <Link href="https://duckaroo.com.au/collections/accessories">
            Other Accessories
          </Link>
        </div>
      </div>
      <div className="footer-bottom-ctn">
        <div className="subfooter">
          <div className="footer-copyright">
            Copyright &copy; 2023 - Aquatic Swan Design
          </div>
          <div className="footer-social-medias">
            <Link href="https://www.facebook.com/aquaticswandesign">
              <TfiFacebook />
            </Link>
            <Link href="https://www.youtube.com/@aquaticswandesigntv1518">
              <TfiYoutube />
            </Link>
            <Link href={`https://www.instagram.com/__duckaroo__/`}>
              <TfiInstagram />
            </Link>
            <Link href="mailto:aquaticswandesign@gmail.com">
              <TfiEmail />
            </Link>
          </div>
          <div className="footer-payment">
            <Image src={payment} alt="payment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
