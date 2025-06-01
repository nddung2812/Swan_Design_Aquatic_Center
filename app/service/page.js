"use client";
import { useState } from "react";
import ReactHowler from "react-howler";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceBanner from "./serviceComponents/banner";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

export default function Service() {
  const [music, setMusic] = useState(true);

  const handleMusic = () => {
    setMusic(!music);
  };

  return (
    <>
      <main
        className="min-h-screen relative overflow-hidden w-full max-w-[2560px] mx-auto"
        itemScope
        itemType="https://schema.org/ProfessionalService"
      >
        {/* Full Screen Background Video */}
        <video
          className="fixed top-0 left-0 w-screen h-screen object-cover -z-20"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
          }}
          autoPlay="autoplay"
          muted
          playsInline
          loop="loop"
          preload="auto"
          aria-label="Background video of aquarium fish swimming"
        >
          <source
            src="https://res.cloudinary.com/dhvj8x2nq/video/upload/q_auto/v1739712678/koifish_feh63y.mp4"
            type="video/mp4"
          />
        </video>

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
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={handleMusic}
            size="icon"
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white shadow-lg"
            aria-label={
              music ? "Mute background music" : "Unmute background music"
            }
          >
            {music ? (
              <Volume2 className="h-6 w-6" />
            ) : (
              <VolumeX className="h-6 w-6" />
            )}
          </Button>
        </div>

        <div className="relative z-10 w-full">
          <Navbar />
          <ServiceBanner />
          <Footer />
        </div>
      </main>
    </>
  );
}
