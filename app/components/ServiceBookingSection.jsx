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
  Phone,
  Mail,
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
        "service_nyo9717", // EmailJS service ID
        "template_lqh6rse", // EmailJS template ID
        form.current,
        "PlnxkEthyMpuKG_kJ" // EmailJS public key
      );

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Brisbane's #1 aquarium experts will contact you within 2 hours.",
        });
        reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong. Please call us directly at (04) 57663939 for immediate assistance.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whyChooseUs = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "★★★★★ 5-Star Brisbane Service",
      description:
        "Rated #1 fish tank cleaning service in Brisbane with 247+ verified Google reviews",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Aquarium Technicians",
      description:
        "Licensed Queensland aquatic specialists with 15+ years experience in Brisbane conditions",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Same-Day Emergency Service",
      description:
        "24/7 emergency fish tank cleaning across Brisbane, Gold Coast & QLD",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Satisfaction Guarantee",
      description:
        "Full money-back guarantee on all Brisbane aquarium cleaning services",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "1000+ Happy Brisbane Families",
      description:
        "Trusted by Brisbane residents, businesses & aquarium enthusiasts since 2010",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Local Brisbane Experts",
      description:
        "Born & bred in Brisbane - we understand QLD water conditions & climate",
    },
  ];

  const brisbaneAreas = [
    "Brisbane CBD & Inner City",
    "Southside Brisbane (Logan, Springwood, Carindale)",
    "Northside Brisbane (Chermside, Aspley, Redcliffe)",
    "Eastern Suburbs (Wynnum, Manly, Capalaba)",
    "Western Suburbs (Toowong, Indooroopilly, Ipswich)",
    "Bayside Brisbane (Redland Bay, Victoria Point)",
    "Logan City & Surrounds",
    "Ipswich & Springfield",
    "Gold Coast (Southport, Surfers Paradise)",
  ];

  return (
    <section
      className="pt-12 pb-20 px-4 relative z-10"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-7xl mx-auto">
        {/* SEO-Optimized Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 bg-emerald-500/20 border-emerald-400 text-emerald-300"
          >
            Brisbane&apos;s #1 Fish Tank & Aquarium Cleaning Service
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Why Choose
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 block">
              Duckaroo Brisbane?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            From Southside to Northside, we&apos;re Brisbane&apos;s most trusted
            <strong> fish tank cleaning</strong> and{" "}
            <strong>aquarium maintenance specialists</strong>. Here&apos;s why
            thousands of Queenslanders choose Duckaroo for their
            <strong> professional aquarium services</strong>.
          </p>

          {/* Contact Information for SEO */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/90">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">Call: (04) 57663939</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">info@duckaroo.com.au</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">
                Servicing All Brisbane & QLD
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Why Choose Us Section */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/25 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 text-white shadow-lg group-hover:scale-110 group-hover:shadow-emerald-400/30 transition-all duration-300">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300"
                          itemProp="name"
                        >
                          {feature.title}
                        </h3>
                        <p
                          className="text-white/90 text-sm leading-relaxed font-medium"
                          itemProp="description"
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Brisbane Service Areas - SEO Optimized */}
            <Card className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/25 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center group-hover:text-emerald-300 transition-colors duration-300">
                  <MapPin className="w-6 h-6 mr-3 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                  Brisbane Fish Tank Cleaning Service Areas
                </h2>
                <p className="text-white/80 text-sm mb-4 font-medium">
                  Professional aquarium cleaning and maintenance services across
                  all Brisbane suburbs:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/90 text-sm font-medium">
                  {brisbaneAreas.map((area, index) => (
                    <span
                      key={index}
                      className="flex items-center hover:text-emerald-300 transition-colors duration-200"
                    >
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 flex-shrink-0"></span>
                      {area}
                    </span>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-emerald-500/20 rounded-lg border border-emerald-400/30">
                  <p className="text-emerald-200 text-sm font-semibold">
                    🚀 Same-day service available | 📞 Emergency callouts 24/7 |
                    💯 Free quotes for all Brisbane locations
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* SEO Content Block */}
            <Card className="bg-white/15 backdrop-blur-md border border-white/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-4 text-emerald-300">
                  Brisbane&apos;s Premier Aquarium & Fish Tank Cleaning Experts
                </h3>
                <div className="text-white/80 text-sm space-y-3 leading-relaxed">
                  <p>
                    <strong>Duckaroo</strong> has been Brisbane&apos;s trusted{" "}
                    <strong>fish tank cleaning service</strong> since 2010. Our
                    certified aquarium technicians specialize in{" "}
                    <strong>professional aquarium maintenance</strong>,
                    <strong>pond cleaning</strong>, and{" "}
                    <strong>fish tank setup</strong> across Brisbane, Gold
                    Coast, and Queensland.
                  </p>
                  <p>
                    Whether you need <strong>emergency tank cleaning</strong> in
                    Brisbane CBD,
                    <strong>regular aquarium maintenance</strong> in Southside
                    Brisbane, or
                    <strong>pond installation</strong> on the Gold Coast, our
                    local experts deliver 5-star service with same-day
                    availability.
                  </p>
                  <p className="font-semibold text-emerald-200">
                    📍 Servicing: Brisbane • Gold Coast • Logan • Ipswich •
                    Redlands • Moreton Bay
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Service Booking Form */}
          <div className="lg:pl-8">
            <Card className="bg-black/60 backdrop-blur-lg border border-white/50 text-white shadow-2xl ring-1 ring-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  Get Your FREE Brisbane Aquarium Quote
                </CardTitle>
                <p className="text-white/90 font-medium">
                  Brisbane&apos;s #1 rated fish tank cleaning experts • Same-day
                  service available
                </p>
                <div className="flex justify-center items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-yellow-400 font-semibold ml-2">
                    4.9/5 (247 reviews)
                  </span>
                </div>
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
                      className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
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
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
                      placeholder="your.email@example.com"
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
                      className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
                      placeholder="(07) XXXX-XXXX"
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
                      htmlFor="location"
                      className="text-white font-semibold"
                    >
                      Brisbane Location *
                    </Label>
                    <Input
                      type="text"
                      id="location"
                      name="location"
                      className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50"
                      placeholder="e.g. Southside Brisbane, CBD, Gold Coast"
                      {...register("location", {
                        required: "Location is required for service quote",
                      })}
                    />
                    {errors.location && (
                      <p className="text-red-400 text-sm flex items-center gap-1 font-medium">
                        <AlertCircle className="w-4 h-4" />
                        {errors.location.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="service"
                      className="text-white font-semibold"
                    >
                      Service Required *
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("service", value)}
                    >
                      <SelectTrigger className="bg-white/25 border border-white/40 text-white focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50">
                        <SelectValue placeholder="Select your aquarium service" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 border border-gray-300 backdrop-blur-lg shadow-2xl">
                        <SelectItem
                          value="fish_tank_cleaning"
                          className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                        >
                          🐠 Fish Tank Cleaning (Brisbane)
                        </SelectItem>
                        <SelectItem
                          value="aquarium_maintenance"
                          className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                        >
                          🔧 Regular Aquarium Maintenance
                        </SelectItem>
                        <SelectItem
                          value="pond_cleaning"
                          className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                        >
                          🏞️ Pond Cleaning & Maintenance
                        </SelectItem>
                        <SelectItem
                          value="tank_setup"
                          className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                        >
                          🆕 New Aquarium Setup
                        </SelectItem>
                        <SelectItem
                          value="pond_installation"
                          className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                        >
                          🏗️ Pond Installation
                        </SelectItem>
                        <SelectItem
                          value="emergency_service"
                          className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                        >
                          🚨 Emergency Tank Service
                        </SelectItem>
                        <SelectItem
                          value="consultation"
                          className="text-gray-900 hover:bg-emerald-100 focus:bg-emerald-100 cursor-pointer"
                        >
                          💬 Aquatic Consultation
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
                      Tell Us About Your Aquarium
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 focus:border-emerald-400 focus:bg-white/30 focus:ring-2 focus:ring-emerald-400/50 min-h-[100px]"
                      placeholder="Tank size, fish types, current issues, preferred service time..."
                      {...register("message")}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-6 text-lg font-bold shadow-2xl ring-2 ring-emerald-400/30 hover:ring-emerald-400/50 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending Your Request...
                      </>
                    ) : (
                      <>Book A Service</>
                    )}
                  </Button>

                  <div className="text-center text-white/70 text-sm">
                    <p>
                      ✅ Same-day quotes • ✅ No obligation • ✅ Brisbane local
                      experts
                    </p>
                  </div>

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
