"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      name: "Sarah Mitchell",
      location: "Brisbane CBD",
      rating: 5,
      date: "2 weeks ago",
      review:
        "Absolutely fantastic service! The team cleaned our office aquarium and it looks incredible. Professional, punctual, and the fish are so much happier. Highly recommend for any Brisbane business.",
      service: "Office Aquarium Cleaning",
    },
    {
      name: "David Chen",
      location: "Southside Brisbane",
      rating: 5,
      date: "1 month ago",
      review:
        "Best aquarium service in Brisbane! They set up our new 200L tank perfectly and provided excellent ongoing maintenance advice. The attention to detail is outstanding.",
      service: "New Tank Setup",
    },
    {
      name: "Emma Thompson",
      location: "Gold Coast",
      rating: 5,
      date: "3 weeks ago",
      review:
        "Emergency call-out service was amazing! Our tank had a major issue on Sunday and they came out the same day. Saved all our fish and got everything running perfectly again.",
      service: "Emergency Service",
    },
    {
      name: "Michael Rodriguez",
      location: "Northside Brisbane",
      rating: 5,
      date: "2 months ago",
      review:
        "Regular maintenance service is top-notch. They've been looking after our pond for over a year now. Always reliable, knowledgeable, and fair pricing. Couldn't be happier!",
      service: "Pond Maintenance",
    },
    {
      name: "Lisa Wang",
      location: "Eastern Suburbs",
      rating: 5,
      date: "1 week ago",
      review:
        "Incredible aquascaping work! They transformed our boring tank into a stunning underwater landscape. The plants are thriving and it&apos;s become the centerpiece of our living room.",
      service: "Aquascaping Design",
    },
    {
      name: "James Patterson",
      location: "Western Brisbane",
      rating: 5,
      date: "3 months ago",
      review:
        "Professional fish tank cleaning service that actually cares about the fish welfare. They explained everything they were doing and gave great tips for between visits. 5 stars!",
      service: "Tank Cleaning",
    },
    {
      name: "Rachel Green",
      location: "Logan Area",
      rating: 5,
      date: "2 weeks ago",
      review:
        "Fantastic consultation service! They helped us choose the right equipment and fish for our family aquarium. Kids love watching the fish and the tank is so easy to maintain now.",
      service: "Aquarium Consultation",
    },
    {
      name: "Tony Nguyen",
      location: "Ipswich",
      rating: 5,
      date: "1 month ago",
      review:
        "Best decision we made was calling Duckaroo for our restaurant aquarium. Customers always comment on how beautiful it looks. Professional service and great value for money.",
      service: "Commercial Aquarium",
    },
    {
      name: "Amanda Foster",
      location: "Redlands",
      rating: 5,
      date: "4 weeks ago",
      review:
        "Amazing pond installation! From design to completion, everything was handled professionally. The pond is now the highlight of our backyard and the fish are thriving.",
      service: "Pond Installation",
    },
    {
      name: "Chris Johnson",
      location: "Bayside Brisbane",
      rating: 5,
      date: "2 months ago",
      review:
        "Reliable monthly maintenance keeps our aquarium in perfect condition. The team is knowledgeable, friendly, and always on time. Highly recommend to anyone in Brisbane!",
      service: "Monthly Maintenance",
    },
    {
      name: "Sophie Williams",
      location: "Toowong",
      rating: 5,
      date: "1 week ago",
      review:
        "Outstanding service from start to finish! They relocated our large marine tank when we moved house. Not a single fish was stressed and the tank looks better than ever. True professionals!",
      service: "Aquarium Relocation",
    },
    {
      name: "Mark Thompson",
      location: "Springwood",
      rating: 5,
      date: "3 weeks ago",
      review:
        "Duckaroo saved our koi pond! The water quality was terrible and fish were getting sick. Their team diagnosed the problem quickly and now our pond is crystal clear. Exceptional expertise!",
      service: "Pond Water Treatment",
    },
  ];

  const reviewsPerSlide = 3;
  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, nextSlide]);

  const getCurrentReviews = () => {
    const startIndex = currentSlide * reviewsPerSlide;
    return reviews.slice(startIndex, startIndex + reviewsPerSlide);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 bg-emerald-500/20 border-emerald-400 text-emerald-300 text-lg px-6 py-2"
          >
            Customer Reviews
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            What Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 block">
              Brisbane Customers Say
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it - see why Brisbane families and
            businesses trust Duckaroo for all their{" "}
            <strong>aquarium cleaning</strong> and maintenance needs.
          </p>

          {/* Overall Rating */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="flex items-center gap-1">{renderStars(5)}</div>
            <span className="text-2xl font-bold text-white">5.0</span>
            <span className="text-white/70">Based on 247+ Google Reviews</span>
          </div>
        </div>

        {/* Reviews Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white shadow-lg -translate-x-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white shadow-lg translate-x-6"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
            {getCurrentReviews().map((review, index) => (
              <Card
                key={`${currentSlide}-${index}`}
                className="bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group h-full"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-emerald-400 mb-4 opacity-50" />

                  {/* Review Text */}
                  <p className="text-white/90 text-sm leading-relaxed mb-6 flex-grow">
                    &quot;{review.review}&quot;
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-yellow-400 font-semibold text-sm">
                      {review.rating}.0
                    </span>
                  </div>

                  {/* Customer Info */}
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-semibold text-sm">
                          {review.name}
                        </h4>
                        <p className="text-white/70 text-xs">
                          {review.location}
                        </p>
                      </div>
                      <span className="text-white/60 text-xs">
                        {review.date}
                      </span>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-emerald-500/20 border-emerald-400/50 text-emerald-300 text-xs"
                    >
                      {review.service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-emerald-400 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-white/10 backdrop-blur-md border border-white/30 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Join Our Happy Customers?
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Experience Brisbane&apos;s #1 rated aquarium service. Get your
                free quote today and see why over 1000+ customers trust Duckaroo
                for their aquatic needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-br from-[#8044e2] to-[#0f172a] text-white hover:bg-gradient-to-br hover:from-[#506ef8] hover:to-[#0f172a] border-none px-6 py-6 text-lg"
                >
                  <a href="/service">Get Free Quote</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-br from-[#10b981] to-[#0f172a] text-white hover:bg-gradient-to-br hover:from-[#34d399] hover:to-[#0f172a] border-none px-6 py-6 text-lg"
                >
                  <a href="tel:0457663939">Call (04) 57663939</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
