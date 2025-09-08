"use client";
import { useState, useEffect, useRef } from "react";
import HomeBanner from "./components/HomeBanner";
import ServiceBookingSection from "./components/ServiceBookingSection";
import Navbar from "./components/Navbar";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import dynamic from "next/dynamic";
import FavoritesPopup from "./components/FavoritesPopup";
import { getFavorites } from "./utils/favorites";

export const runtime = "edge";

// Lazy load heavy components to improve LCP
const ReactHowler = dynamic(() => import("react-howler"), {
  ssr: false,
  loading: () => null,
});

const Duckweeds = dynamic(() => import("./components/Duckweeds"), {
  ssr: false,
  loading: () => null,
});

const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
  loading: () => null,
});

const MusicControlButton = dynamic(
  () => import("./components/MusicControlButton"),
  {
    ssr: false,
    loading: () => null,
  }
);

const Home = () => {
  const [music, setMusic] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [componentsLoaded, setComponentsLoaded] = useState(false);
  const [showFavoritesPopup, setShowFavoritesPopup] = useState(false);

  const videoRef = useRef(null);

  const handleMusic = () => {
    setMusic(!music);
  };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setShowPlayButton(false);
        })
        .catch((error) => {
          console.log("Video autoplay failed:", error);
          setShowPlayButton(true);
        });
    }
  };

  useEffect(() => {
    // Delay loading heavy components until after LCP - reduced for better perceived performance
    const componentTimer = setTimeout(() => {
      setComponentsLoaded(true);
    }, 1000);

    // Check for favorites and show popup after components load
    const favoritesTimer = setTimeout(() => {
      const favorites = getFavorites();
      if (favorites.length > 0) {
        setShowFavoritesPopup(true);
      }
    }, 3000); // Show popup 3 seconds after page load

    // Try to play video immediately
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setShowPlayButton(true);
      });
    }

    return () => {
      clearTimeout(componentTimer);
      clearTimeout(favoritesTimer);
    };
  }, []);

  return (
    <>
      {/* Fallback Dark Background */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-30"
        style={{ minWidth: "100vw", minHeight: "100vh" }}
      />

      {/* Background Video - Desktop Only for Performance */}
      <div className="hidden md:block">
        <video
          ref={videoRef}
          className="fixed top-0 left-0 w-full h-full object-cover -z-20"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            minWidth: "100vw",
            minHeight: "100vh",
          }}
          autoPlay
          muted
          playsInline
          loop
          preload="none"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23334155'/%3E%3C/svg%3E"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setShowPlayButton(true)}
          onCanPlay={() => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => setShowPlayButton(true));
            }
          }}
        >
          <source
            src="https://res.cloudinary.com/dhvj8x2nq/video/upload/q_auto:good,w_1280,h_720/v1739712678/koifish_feh63y.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Mobile Static Background - Blue Ocean Theme */}
      <div
        className="md:hidden fixed top-0 left-0 w-full h-full -z-20"
        style={{
          minWidth: "100vw",
          minHeight: "100vh",
          background:
            "linear-gradient(180deg, #0a1628 0%, #0c1f4a 25%, #1e3a8a 50%, #1e40af 75%, #1d4ed8 100%)",
        }}
      />

      {/* Video Play Button for Desktop Only */}
      {showPlayButton && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 hidden md:block">
          <Button
            onClick={handleVideoPlay}
            size="lg"
            className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 text-white shadow-2xl"
          >
            <Play className="h-8 w-8 ml-1" />
          </Button>
        </div>
      )}

      {/* Dark overlay for better text readability */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/30 -z-10"
        style={{ minWidth: "100vw", minHeight: "100vh" }}
      />

      {/* Navigation - Load immediately for LCP */}
      <Navbar />

      {/* Main Content - Critical for LCP */}
      <div className="min-h-screen relative overflow-x-hidden w-full max-w-[2560px] mx-auto">
        <main className="relative z-10 w-full overflow-x-hidden">
          <HomeBanner setMusic={setMusic} music={music} />
          <ServiceBookingSection />
        </main>
      </div>

      {/* Heavy components - Load after LCP */}
      {componentsLoaded && (
        <>
          {/* Background Music */}
          <ReactHowler
            src="https://res.cloudinary.com/dhvj8x2nq/video/upload/v1739712674/bluedream_hjtsse.mp3"
            preload={false}
            playing={music}
            volume={0.4}
            loop={true}
          />

          {/* Music Control Button */}
          <MusicControlButton music={music} onToggleMusic={handleMusic} />

          {/* Floating Elements - Desktop only */}
          <div className="hidden xl:block">
            <Duckweeds />
          </div>

          {/* Footer */}
          <Footer />
        </>
      )}

      {/* Favorites Popup */}
      <FavoritesPopup
        isOpen={showFavoritesPopup}
        onClose={() => setShowFavoritesPopup(false)}
      />
    </>
  );
};

export default Home;
