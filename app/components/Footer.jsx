import '../styles/Footer.css'
import { TfiYoutube, TfiFacebook, TfiInstagram, TfiMusic } from "react-icons/tfi";
import payment from '../../public/payment.png'
import Image from "next/image";

const Footer = () => {
  return (
    <div className='footer-ctn'>
      <div className="footer-top-ctn">
        <div className="footer-top-item">
          <a href="">About Us</a>
          <a href="">Blogs</a>
          <a href="">D.I.Y Tips</a>
        </div>
        <div className="footer-top-item">
          <a href=''>Products</a>
          <a href=''>Exhibition</a>
          <a href=''>Rare Bucephalandra - Anubias</a>
        </div>
        <div className="footer-top-item">
          <a href=''>Contact Us</a>
          <a href=''>Shop With Us</a>
        </div>
      </div>
      <div className="footer-bottom-ctn">
        <div className='subfooter'>
          <div className="footer-copyright">Copyright &copy; 2023 - Aquatic Swan Design</div>
          <div className="footer-social-medias">
            <h3><TfiYoutube /></h3>
            <h3><TfiFacebook /></h3>
            <h3><TfiInstagram /></h3>
            <h3><TfiMusic /></h3>
          </div>
          <div className='footer-payment'>
            <Image src={payment} alt="payment" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer