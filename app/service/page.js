"use client";
import { useState, useEffect, useRef } from "react";
import ReactHowler from "react-howler";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MusicControlButton from "../components/MusicControlButton";
import ServiceBanner from "./serviceComponents/banner";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Service() {
  const [music, setMusic] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
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
    // Try to play video after component mounts
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          setShowPlayButton(true);
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main
        className="min-h-screen relative overflow-hidden w-full max-w-[2560px] mx-auto"
        itemScope
        itemType="https://schema.org/ProfessionalService"
      >
        {/* Fallback Dark Background */}
        <div className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-30" />

        {/* Full Screen Background Video */}
        <video
          ref={videoRef}
          className="fixed top-0 left-0 w-screen h-screen object-cover -z-20"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
          }}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setShowPlayButton(true)}
          aria-label="Background video of aquarium fish swimming"
        >
          {/* Mobile-optimized smaller video */}
          <source
            src="https://res.cloudinary.com/dhvj8x2nq/video/upload/q_auto:low,w_720/v1739712678/koifish_feh63y.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
          {/* Desktop full quality video */}
          <source
            src="https://res.cloudinary.com/dhvj8x2nq/video/upload/q_auto/v1739712678/koifish_feh63y.mp4"
            type="video/mp4"
            media="(min-width: 769px)"
          />
        </video>

        {/* Video Play Button for Mobile */}
        {showPlayButton && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 md:hidden">
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
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/40 -z-10" />

        {/* Background Music */}
        <ReactHowler
          src="https://res.cloudinary.com/dhvj8x2nq/video/upload/v1739712674/bluedream_hjtsse.mp3"
          preload={true}
          playing={music}
          volume={0.4}
          loop={true}
        />

        {/* Music Control Button */}
        <MusicControlButton music={music} onToggleMusic={handleMusic} />

        <div className="relative z-10 w-full">
          <Navbar />
          <ServiceBanner />
          <Footer />
        </div>
      </main>
    </>
  );
}
