"use client";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

const MusicControlButton = ({ music, onToggleMusic, className = "" }) => {
  return (
    <div className={`fixed bottom-8 right-8 z-50 ${className}`}>
      <Button
        onClick={onToggleMusic}
        size="icon"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500/80 to-teal-600/80 backdrop-blur-sm border border-emerald-400/50 hover:from-emerald-400/90 hover:to-teal-500/90 hover:border-emerald-300/70 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        aria-label={music ? "Mute background music" : "Unmute background music"}
      >
        {music ? (
          <Volume2 className="h-6 w-6" />
        ) : (
          <VolumeX className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default MusicControlButton;
