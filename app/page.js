"use client";
import { useState } from "react";
import ReactHowler from "react-howler";
import "./page.css";
import Duckweeds from "./components/Duckweeds";
import Footer from "./components/Footer";
import HomeBanner from "./components/HomeBanner";
import { Preloader } from "./components/Preloader.jsx";
import dynamic from "next/dynamic";
const NavbarWithNoSSR = dynamic(() => import("./components/Navbar"), {
  ssr: false,
});

const WaterWaveNoSSr = dynamic(() => import("react-water-wave"), {
  ssr: false,
});

const Home = () => {
  const [music, setMusic] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadedData = () => {
    setIsLoading(false);
  };
  return (
    <>
      <Preloader />
      <WaterWaveNoSSr
        dropRadius={30}
        perturbance={0.05}
        interactive={true}
        resolution={512}
      >
        {() => (
          <main className="home-page-container">
                {isLoading && <div className="corp-video-loader-ctn">
            <div className="corp-video-loader"></div>
            <div className="corp-video-textloader">Loading...</div>
          </div>}
            <video
              autoPlay="autoplay"
              muted
              defaultMuted
              playsInline
              loop="loop"
              preload="auto"
              onLoadedData={handleLoadedData}
              style={{ display: isLoading ? "none" : "block" }}
              stop
            >
              <source
                src='https://firebasestorage.googleapis.com/v0/b/aquatic-swan-design.appspot.com/o/tinywow_Koifish_52130439.mp4?alt=media&token=8c1f6c99-1e67-4241-9f83-04e724c932d7'
                type="video/mp4"
              />
            </video>
            <ReactHowler
              src="https://firebasestorage.googleapis.com/v0/b/aquatic-swan-design.appspot.com/o/Blue%20Dream%20-%20Cheel.mp3?alt=media&token=2cc7a283-16a3-4494-a9fe-6e79e867ed81"
              playing={music}
              volume={0.4}
              loop={true}
            />
            <Duckweeds />
            <NavbarWithNoSSR />
            <HomeBanner setMusic={setMusic} music={music} />
            <Footer />
          </main>
        )}
      </WaterWaveNoSSr>
    </>
  );
};

export default Home;
