import "../styles/Homebanner.css";
import { TfiMusic, TfiControlPause } from "react-icons/tfi";
import Link from "next/link";

const HomeBanner = ({ music, setMusic }) => {
  const handleMusic = () => {
    setMusic(!music);
  };
  return (
    <main className="homebanner-ctn">
      <h1>Aquatic Plants and Fish</h1>
      <h2>Bringing the ocean to you by Aquatic Swan Design</h2>
      <p>Your Source for Healthy Aquarium Fish and Lush Plants</p>
      <Link
        href="https://duckaroo.com.au/pages/about-us"
        className="homebanner-main-cta-btn"
      >
        About Us
      </Link>
      <div className="homebanner-cta-ctn">
        <a
          target="_blank"
          href="https://duckaroo.com.au/collections/aquarium-plants"
          rel="noreferrer"
        >
          <div className="cta-card cta-btn1">
            <h2>Bucephalandra</h2>
            <p>Discover rare variants</p>
          </div>
        </a>
        <a
          target="_blank"
          href="https://duckaroo.com.au/pages/our-services"
          rel="noreferrer"
        >
          <div className="cta-card cta-btn2">
            <h2>D.I.Y Projects</h2>
            <p>Checkout top-quality items</p>
          </div>
        </a>
        <a
          target="_blank"
          href="https://duckaroo.com.au/collections/aquarium-probiotics"
          rel="noreferrer"
        >
          <div className="cta-card cta-btn3">
            <h2>Probiotics</h2>
            <p>Powered by Koika</p>
          </div>
        </a>
      </div>
      <div className="music-controal-ctn">
        <div className="music-btn" onClick={handleMusic}>
          {music ? <TfiMusic color="#fff" /> : <TfiControlPause color="#fff" />}
        </div>
        <p>Sound</p>
      </div>
    </main>
  );
};

export default HomeBanner;
