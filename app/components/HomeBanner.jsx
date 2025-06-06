import { TfiMusic, TfiControlPause } from "react-icons/tfi";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Droplets, Fish } from "lucide-react";

const HomeBanner = ({ music, setMusic }) => {
  const services = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Bucephalandra",
      description: "Discover rare aquatic plant variants",
      href: "https://duckaroo.com.au/collections/aquarium-plants",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "D.I.Y Projects",
      description: "Premium aquascaping supplies",
      href: "https://duckaroo.com.au/pages/our-services",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Fish className="w-8 h-8" />,
      title: "Probiotics",
      description: "Powered by Koika technology",
      href: "https://duckaroo.com.au/collections/aquarium-probiotics",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 relative z-10">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16 mt-16">
        <h1
          className="hero-title text-4xl md:text-6xl lg:text-7xl mb-6"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 700,
            lineHeight: 1.1,
            color: "white",
            textAlign: "center",
            fontDisplay: "swap",
          }}
        >
          Transform Your Space with
          <span
            className="hero-gradient-text"
            style={{
              background: "linear-gradient(to right, #34d399, #14b8a6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block",
              marginTop: "0.5rem",
              paddingBottom: "0.5rem",
            }}
          >
            Duckaroo
          </span>
        </h1>

        <p
          className="hero-subtitle text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 400,
            lineHeight: 1.5,
            color: "rgba(255, 255, 255, 0.8)",
            textAlign: "center",
            fontDisplay: "swap",
            fontSize: "clamp(1.125rem, 4vw, 1.5rem)",
            maxWidth: "42rem",
            margin: "0 auto 2rem auto",
          }}
        >
          Creating stunning aquatic landscapes that bring the tranquility of
          nature into your home or office
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-sm sm:max-w-2xl mx-auto">
          <Button
            asChild
            size="lg"
            className="w-full max-w-xs sm:w-auto sm:max-w-none bg-gradient-to-br from-[#8044e2] to-[#0f172a] text-white hover:bg-gradient-to-br hover:from-[#506ef8] hover:to-[#0f172a] border-none px-4 sm:px-8 py-6 text-base sm:text-lg"
          >
            <Link href="/service">Get Free Consultation</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="w-full max-w-xs sm:w-auto sm:max-w-none bg-gradient-to-br from-[#10b981] to-[#0f172a] text-white hover:bg-gradient-to-br hover:from-[#34d399] hover:to-[#0f172a] border-none px-4 sm:px-8 py-6 text-base sm:text-lg"
          >
            <Link href="/about-us">Discover Our Story</Link>
          </Button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            target="_blank"
            rel="noreferrer"
          >
            <Card className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-white/70">{service.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default HomeBanner;
