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
                src="https://znjf1ip6migqhqsx.public.blob.vercel-storage.com/Koifish-yTANtUJgMxz90jG7i5JvODHDj2RVQO.mp4"
                type="video/mp4"
              />
            </video>
            <ReactHowler
              src="https://znjf1ip6migqhqsx.public.blob.vercel-storage.com/BlueDream-3zIGmjQ2jnpCR09dSO0k2olRfYnEEO.mp3"
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
