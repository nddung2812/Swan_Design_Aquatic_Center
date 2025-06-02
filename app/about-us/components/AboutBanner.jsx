import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  Droplets,
  Fish,
  Leaf,
} from "lucide-react";

const AboutBanner = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "15+ Years Experience",
      description: "Brisbane's most experienced aquarium specialists",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "1000+ Happy Customers",
      description: "Trusted by Brisbane families & businesses",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "5-Star Rated Service",
      description: "247+ verified Google reviews",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const services = [
    "Professional Fish Tank Cleaning",
    "Aquarium Maintenance Plans",
    "New Tank Setup & Installation",
    "Pond Cleaning & Maintenance",
    "Emergency Aquarium Services",
    "Aquascaping Design",
    "Equipment Installation",
    "Fish Health Consultations",
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 relative z-10">
      {/* Hero Section */}
      <div className="text-center max-w-6xl mx-auto mb-16 mt-16">
        <Badge
          variant="outline"
          className="mb-6 bg-emerald-500/20 border-emerald-400 text-emerald-300 text-lg px-6 py-2"
        >
          Brisbane&apos;s #1 Aquarium Service Since 2020
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          About
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 block mt-2 pb-2">
            Duckaroo Brisbane
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed space-y-4">
          <p>
            <strong className="text-emerald-300">Duckaroo</strong> has been
            Brisbane&apos;s premier
            <strong> fish tank cleaning</strong> and{" "}
            <strong>aquarium maintenance service</strong> since 2020. We
            specialize in creating and maintaining stunning aquatic environments
            across Brisbane, Gold Coast, and all Queensland areas.
          </p>

          <p>
            From <strong>professional aquarium cleaning</strong> in Brisbane CBD
            to
            <strong> pond maintenance</strong> in Southside Brisbane, our
            certified aquatic technicians deliver exceptional service with
            same-day availability and 100% satisfaction guarantee.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/90">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold">Call: (04) 57663939</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold">aquaticswandesign@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold">Servicing All Brisbane & QLD</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-sm sm:max-w-2xl mx-auto mb-12">
          <Button
            asChild
            size="lg"
            className="w-full max-w-xs sm:w-auto sm:max-w-none bg-gradient-to-br from-[#8044e2] to-[#0f172a] text-white hover:bg-gradient-to-br hover:from-[#506ef8] hover:to-[#0f172a] border-none px-4 sm:px-8 py-6 text-base sm:text-lg"
          >
            <Link href="/service">Get Free Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="w-full max-w-xs sm:w-auto sm:max-w-none bg-gradient-to-br from-[#10b981] to-[#0f172a] text-white hover:bg-gradient-to-br hover:from-[#34d399] hover:to-[#0f172a] border-none px-4 sm:px-8 py-6 text-base sm:text-lg"
          >
            <Link
              href="https://duckaroo.com.au/collections/all"
              target="_blank"
              rel="noreferrer"
            >
              Shop Aquarium Plants
            </Link>
          </Button>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <CardContent className="p-6 text-center">
              <div
                className={`inline-flex p-4 rounded-full bg-gradient-to-r ${achievement.color} mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
              >
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-white/70">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Our Story Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our <span className="text-emerald-400">Story</span>
          </h2>
          <div className="text-white/80 space-y-4 leading-relaxed">
            <p>
              Founded in 2010 by passionate aquarists,{" "}
              <strong className="text-emerald-300">Duckaroo</strong> began as a
              small Brisbane-based business with a simple mission: to bring the
              beauty and tranquility of aquatic life to homes and businesses
              across Queensland.
            </p>
            <p>
              What started as weekend <strong>fish tank cleaning</strong>{" "}
              services has grown into Brisbane&apos;s most trusted{" "}
              <strong>aquarium maintenance company</strong>, serving over 1000+
              satisfied customers from Brisbane CBD to Gold Coast and everywhere
              in between.
            </p>
            <p>
              Our team of certified aquatic technicians combines 15+ years of
              experience with cutting-edge techniques to deliver exceptional{" "}
              <strong>aquarium cleaning</strong>, maintenance, and design
              services that exceed expectations every time.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-4">
            Our <span className="text-emerald-400">Services</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-white/90 text-sm font-medium">
                  {service}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-emerald-500/20 rounded-lg border border-emerald-400/30">
            <p className="text-emerald-200 text-sm font-semibold">
              🚀 Same-day service available | 📞 Emergency callouts 24/7 | 💯
              100% satisfaction guarantee | 🏆 Brisbane&apos;s #1 rated service
            </p>
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="max-w-6xl mx-auto">
        <Card className="bg-white/15 backdrop-blur-md border border-white/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-emerald-300 text-center">
              Why Choose Duckaroo for Brisbane Aquarium Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80 text-sm space-y-0 leading-relaxed">
              <div className="space-y-4">
                <p>
                  <strong>Local Brisbane Expertise:</strong> Born and bred in
                  Brisbane, we understand Queensland&apos;s unique water
                  conditions, climate challenges, and local aquarium needs
                  better than anyone else.
                </p>
                <p>
                  <strong>Comprehensive Services:</strong> From routine{" "}
                  <strong>fish tank cleaning</strong> to emergency aquarium
                  repairs, <strong>pond maintenance</strong>, and custom
                  aquascaping design - we&apos;re your one-stop solution for all
                  aquatic needs.
                </p>
                <p>
                  <strong>Certified Professionals:</strong> Our team holds
                  industry certifications and undergoes continuous training to
                  stay current with the latest aquarium maintenance techniques
                  and technologies.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  <strong>Service Areas:</strong> We proudly serve all Brisbane
                  suburbs including CBD, Southside (Logan, Springwood),
                  Northside (Chermside, Redcliffe), Eastern suburbs (Wynnum,
                  Capalaba), Western suburbs (Toowong, Ipswich), plus Gold Coast
                  and regional Queensland.
                </p>
                <p>
                  <strong>Customer Satisfaction:</strong> With 247+ five-star
                  Google reviews and a 100% satisfaction guarantee, we&apos;re
                  committed to exceeding your expectations on every visit.
                </p>
                <p>
                  <strong>Emergency Support:</strong> Aquarium emergencies
                  don&apos;t wait for business hours. That&apos;s why we offer
                  24/7 emergency <strong>fish tank cleaning</strong> and
                  maintenance services across Brisbane and surrounding areas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default AboutBanner;
