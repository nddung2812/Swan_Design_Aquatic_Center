"use client";
import { useState } from "react";
import ReactHowler from "react-howler";
import "./page.css";
import Duckweeds from "./components/Duckweeds";
import Footer from "./components/Footer";
import HomeBanner from "./components/HomeBanner";
import { Preloader } from "./components/Preloader.jsx";
import dynamic from "next/dynamic";

export const runtime = "edge";

const NavbarWithNoSSR = dynamic(() => import("./components/Navbar"), {
  ssr: false,
});

const WaterWaveNoSSr = dynamic(() => import("react-water-wave"), {
  ssr: false,
});

const Home = () => {
  const [music, setMusic] = useState(true);
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
            <video
              autoPlay="autoplay"
              muted
              defaultMuted
              playsInline
              loop="loop"
              preload="auto"
              stop
            >
              <source
                src="https://res.cloudinary.com/dhvj8x2nq/video/upload/q_auto/v1739712678/koifish_feh63y.mp4"
                type="video/mp4"
              />
            </video>
            <ReactHowler
              src="https://res.cloudinary.com/dhvj8x2nq/video/upload/v1739712674/bluedream_hjtsse.mp3"
              preload={true}
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
