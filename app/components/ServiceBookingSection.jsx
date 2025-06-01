"use client";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  AlertCircle,
  Loader2,
  Star,
  Award,
  Clock,
  Shield,
  Users,
  MapPin,
} from "lucide-react";

const ServiceBookingSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const result = await emailjs.sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We will contact you soon.",
        });
        reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whyChooseUs = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "5-Star Rated Service",
      description:
        "Consistently rated as Brisbane's top aquatic service provider",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Experts",
      description: "Licensed aquatic specialists with 10+ years experience",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Same-Day Service",
      description: "Emergency callouts and same-day service available",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Guarantee",
      description: "Full satisfaction guarantee on all our services",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "1000+ Happy Clients",
      description: "Trusted by Brisbane families and businesses",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Brisbane Local",
      description: "Born and bred in Brisbane, we know the local conditions",
    },
  ];

  return (
    <section className="pt-12 pb-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 bg-emerald-500/20 border-emerald-400 text-emerald-300"
          >
            Brisbane&apos;s #1 Aquatic Service
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Why Choose
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 block">
              Duckaroo Brisbane?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            From Southside to Northside, we&apos;re Brisbane&apos;s most trusted
            aquatic specialists. Here&apos;s why thousands of Queenslanders
            choose Duckaroo for their aquarium and pond needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Why Choose Us Section */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/20 backdrop-blur-md border-2 border-white/30 hover:bg-white/25 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 text-white shadow-lg group-hover:scale-110 group-hover:shadow-emerald-400/30 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed font-medium">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Brisbane Areas We Service */}
            <Card className="bg-white/20 backdrop-blur-md border-2 border-white/30 hover:bg-white/25 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center group-hover:text-emerald-300 transition-colors duration-300">
                  <MapPin className="w-6 h-6 mr-3 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                  Brisbane Areas We Service
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-white/90 text-sm font-medium">
                  <span className="flex items-center hover:text-emerald-300 transition-colors duration-200">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 flex-shrink-0"></span>
                    CBD & Inner City
                  </span>
                  <span className="flex items-center hover:text-emerald-300 transition-colors duration-200">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 flex-shrink-0"></span>
                    Southside
                  </span>
                  <span className="flex items-center hover:text-emerald-300 transition-colors duration-200">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 flex-shrink-0"></span>
                    Northside
                  </span>
                  <span className="flex items-center hover:text-emerald-300 transition-colors duration-200">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 flex-shrink-0"></span>
                    Eastern Suburbs
                  </span>
                  <span className="flex items-center hover:text-emerald-300 transition-colors duration-200">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 flex-shrink-0"></span>
                    Western Suburbs
                  </span>
                  <span className="flex items-center hover:text-emerald-300 transition-colors duration-200">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 flex-shrink-0"></span>
                    Bayside
                  </span>
                  <span className="flex items-center hover:text-emerald-300 transition-colors duration-200">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 flex-shrink-0"></span>
                    Logan
                  </span>
                  <span className="flex items-center hover:text-emerald-300 transition-colors duration-200">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 flex-shrink-0"></span>
                    Ipswich
                  </span>
                  <span className="flex items-center hover:text-emerald-300 transition-colors duration-200">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 flex-shrink-0"></span>
                    Gold Coast
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Booking Form */}
          <div className="lg:pl-8">
            <Card className="bg-black/60 backdrop-blur-lg border-2 border-white/50 text-white shadow-2xl ring-1 ring-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  Book Your Service Today
                </CardTitle>
                <p className="text-white/90 font-medium">
                  Get a free quote from Brisbane&apos;s aquatic experts
                </p>
              </CardHeader>
              <CardContent>
                <form
                  ref={form}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      className="bg-white/25 border-2 border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
                      placeholder="Enter your full name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-semibold">
                      Email *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-white/25 border-2 border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
                      placeholder="Enter your email address"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="bg-white/25 border-2 border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
                      placeholder="Enter your phone number"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="service"
                      className="text-white font-semibold"
                    >
                      Service Type *
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("service", value)}
                    >
                      <SelectTrigger className="bg-white/25 border-2 border-white/40 text-white focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 border-2 border-gray-300 backdrop-blur-lg shadow-2xl">
                        <SelectItem
                          value="tank_cleaning"
                          className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                        >
                          Fish Tank Cleaning
                        </SelectItem>
                        <SelectItem
                          value="pond_cleaning"
                          className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                        >
                          Pond Cleaning
                        </SelectItem>
                        <SelectItem
                          value="tank_setup"
                          className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                        >
                          New Tank Setup
                        </SelectItem>
                        <SelectItem
                          value="pond_setup"
                          className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                        >
                          New Pond Setup
                        </SelectItem>
                        <SelectItem
                          value="maintenance"
                          className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                        >
                          Regular Maintenance
                        </SelectItem>
                        <SelectItem
                          value="consultation"
                          className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                        >
                          Consultation
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <input
                      type="hidden"
                      name="service"
                      {...register("service", {
                        required: "Please select a service",
                      })}
                    />
                    {errors.service && (
                      <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                        <AlertCircle className="w-4 h-4" />
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-white font-semibold"
                    >
                      Additional Details
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      className="bg-white/25 border-2 border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50 min-h-[100px]"
                      placeholder="Tell us about your aquarium or pond..."
                      {...register("message")}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-bold shadow-2xl ring-2 ring-emerald-400/30 hover:ring-emerald-400/50 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Get Free Quote"
                    )}
                  </Button>

                  {submitStatus.message && (
                    <div
                      className={`p-4 rounded-lg flex items-center gap-2 font-medium shadow-lg ${
                        submitStatus.type === "success"
                          ? "bg-emerald-500/40 border-2 border-emerald-400 text-emerald-200"
                          : "bg-red-500/40 border-2 border-red-400 text-red-200"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBookingSection;
