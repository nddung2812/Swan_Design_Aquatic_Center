"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Star,
} from "lucide-react";
import Layout from "@/app/components/Layout";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "(04) 5766 3939",
      description: "Available 8AM - 6PM",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "aquaticswandesign@gmail.com",
      description: "24/7 Support",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      content: "Brisbane, QLD",
      description: "Service Area",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Hours",
      content: "Mon - Sun 8AM - 6PM",
      description: "Emergency service available",
    },
  ];

  return (
    <Layout className="bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 relative">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/20 border-blue-400 text-blue-300 text-lg px-6 py-2">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 block mt-2">
                Our Team
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Ready to transform your aquatic space? Get in touch with
              Brisbane&apos;s premier aquarium service specialists for a free
              consultation.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="px-4 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      {info.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-2">
                      {info.title}
                    </h3>
                    <p className="text-white/90 font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-white/60 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-2xl mb-2">
                    Send us a Message
                  </CardTitle>
                  <p className="text-white/70">
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                        required
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      />
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your aquarium needs..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-xl mb-2">
                      <MessageSquare className="w-5 h-5 inline mr-2" />
                      Why Choose Us?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                        Professional aquarium maintenance since 2020
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                        Same-day emergency service available
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                        Expert aquascaping and plant care
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                        Complete tank setup and maintenance
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                        Serving all Brisbane and surrounding areas
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-xl mb-2">
                      Quick Links
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/service">Get Free Quote</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/products">Browse Products</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/blogs">Read Our Blog</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link
                          href="https://duckaroo.com.au/collections/aquarium-designs"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Gallery
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
