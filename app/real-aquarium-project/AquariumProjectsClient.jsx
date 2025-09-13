"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Star,
  Fish,
  Droplets,
  Leaf,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Luxury Office Aquarium Transformation",
    location: "Brisbane CBD",
    date: "2024-01-15",
    type: "Commercial Maintenance",
    description:
      "Complete transformation of a 200L office aquarium including professional cleaning, aquascaping, and ongoing maintenance program.",
    rating: 5,
    client: "Corporate Office Brisbane",
    media: [
      {
        type: "video",
        url: "https://res.cloudinary.com/dhvj8x2nq/video/upload/q_auto:good,w_1280,h_720/v1739712678/koifish_feh63y.mp4",
        thumbnail:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=center",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=600&fit=crop&crop=center",
      },
    ],
    tags: ["Office Aquarium", "Professional Cleaning", "Aquascaping"],
  },
  {
    id: 2,
    name: "Saltwater Reef Tank Setup & Maintenance",
    location: "Gold Coast",
    date: "2024-01-22",
    type: "Marine Aquarium",
    description:
      "Full saltwater reef tank installation with custom rock work, coral placement, and specialized marine fish care program.",
    rating: 5,
    client: "Residential Home",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&h=600&fit=crop&crop=center",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dhvj8x2nq/video/upload/q_auto:good,w_1280,h_720/v1739712678/koifish_feh63y.mp4",
        thumbnail:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=center",
      },
    ],
    tags: ["Saltwater Tank", "Reef Setup", "Marine Fish"],
  },
  {
    id: 3,
    name: "Planted Freshwater Ecosystem",
    location: "North Brisbane",
    date: "2024-02-05",
    type: "Planted Tank",
    description:
      "Stunning planted freshwater aquarium with CO2 system, advanced lighting, and diverse plant selection for natural ecosystem balance.",
    rating: 5,
    client: "Family Home",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=600&fit=crop&crop=center",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dhvj8x2nq/video/upload/q_auto:good,w_1280,h_720/v1739712678/koifish_feh63y.mp4",
        thumbnail:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=center",
      },
    ],
    tags: ["Planted Tank", "CO2 System", "Aquascaping"],
  },
  {
    id: 4,
    name: "Emergency Tank Rescue & Recovery",
    location: "South Brisbane",
    date: "2024-02-18",
    type: "Emergency Service",
    description:
      "Emergency intervention for neglected aquarium - complete water system overhaul, fish health recovery, and new maintenance schedule.",
    rating: 5,
    client: "Residential Rescue",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&h=600&fit=crop&crop=center",
      },
      {
        type: "video",
        url: "https://res.cloudinary.com/dhvj8x2nq/video/upload/q_auto:good,w_1280,h_720/v1739712678/koifish_feh63y.mp4",
        thumbnail:
          "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=600&fit=crop&crop=center",
      },
    ],
    tags: ["Emergency Service", "Tank Recovery", "Fish Health"],
  },
];

export default function AquariumProjectsClient() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const openLightbox = (project, mediaIndex) => {
    setSelectedMedia(project);
    setCurrentMediaIndex(mediaIndex);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    setCurrentMediaIndex(0);
  };

  const nextMedia = () => {
    if (selectedMedia) {
      setCurrentMediaIndex((prev) =>
        prev === selectedMedia.media.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevMedia = () => {
    if (selectedMedia) {
      setCurrentMediaIndex((prev) =>
        prev === 0 ? selectedMedia.media.length - 1 : prev - 1
      );
    }
  };

  const MediaItem = ({
    media,
    className = "",
    onClick,
    showPlayIcon = false,
    badge = null,
  }) => {
    const isVideo = media.type === "video";
    const mediaUrl = isVideo ? media.thumbnail || media.url : media.url;

    return (
      <div
        className={`relative group cursor-pointer overflow-hidden rounded-lg ${className}`}
        onClick={onClick}
      >
        <div className="relative w-full h-full">
          <Image
            src={mediaUrl}
            alt={`Media content`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Video Play Button Overlay */}
          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 backdrop-blur-sm rounded-full p-3 group-hover:bg-black/80 transition-all duration-300">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
          )}

          {/* General hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <Eye
              className={`${
                isVideo ? "w-5 h-5" : "w-6 h-6"
              } text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
          </div>

          {/* Badge overlay */}
          {badge && <div className="absolute bottom-2 right-2">{badge}</div>}
        </div>
      </div>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-teal-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-emerald-500/30 border-emerald-400 text-emerald-100">
            Real Results From Brisbane&apos;s #1 Fish Tank Service
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real Aquarium Projects
          </h1>

          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            See the stunning transformations and professional results from our
            expert
            <strong className="text-emerald-300">
              {" "}
              fish tank cleaning service
            </strong>{" "}
            across Brisbane. From emergency rescues to luxury installations,
            discover why customers trust
            <strong className="text-emerald-300">
              {" "}
              Duckaroo&apos;s professional aquarium maintenance
            </strong>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3"
            >
              <Link href="/service">Get Your Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
            >
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Customer Success Stories
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Browse our portfolio of successful aquarium projects across
              Brisbane. Each project showcases our commitment to excellence in
              fish tank cleaning and maintenance.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-emerald-400/50 transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className="p-6 pb-4">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-white/70 mb-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(project.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {project.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(project.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                          <span className="text-white/70 text-sm ml-2">
                            {project.client}
                          </span>
                        </div>
                      </div>

                      <Badge className="bg-blue-500/20 border-blue-400 text-blue-200">
                        {project.type}
                      </Badge>
                    </div>

                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-white/20 text-white/70 hover:border-emerald-400/50 hover:text-emerald-300 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Image Gallery - Dynamic Grid Layout */}
                  <div className="p-6 pt-0">
                    {/* Hero Image - Full Width Landscape */}
                    <div className="mb-3">
                      <div
                        className="relative group cursor-pointer overflow-hidden rounded-lg"
                        onClick={() => openLightbox(project, 0)}
                      >
                        <div className="relative aspect-[16/9] w-full">
                          <Image
                            src={
                              project.media[0].type === "video"
                                ? project.media[0].thumbnail ||
                                  project.media[0].url
                                : project.media[0].url
                            }
                            alt={`${project.name} - Main Image`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                          />
                          {/* Video Play Button Overlay */}
                          {project.media[0].type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-black/60 backdrop-blur-sm rounded-full p-4 group-hover:bg-black/80 transition-all duration-300">
                                <Play className="w-12 h-12 text-white fill-white" />
                              </div>
                            </div>
                          )}

                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                            <Eye
                              className={`${
                                project.media[0].type === "video"
                                  ? "w-5 h-5"
                                  : "w-6 h-6"
                              } text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            />
                          </div>
                          {/* Main Image Badge */}
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-black/50 backdrop-blur-sm border-white/20 text-white text-xs">
                              Featured
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Media Grid */}
                    {project.media.length > 1 && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {project.media.slice(1).map((media, mediaIndex) => (
                          <div
                            key={mediaIndex + 1}
                            className={`relative ${
                              // Make some media span 2 columns for variety
                              (mediaIndex + 1) % 3 === 0 ? "md:col-span-2" : ""
                            }`}
                          >
                            <div
                              className={`relative ${
                                (mediaIndex + 1) % 3 === 0
                                  ? "aspect-[16/9]" // Landscape for every 3rd media
                                  : "aspect-square" // Square for others
                              } w-full group cursor-pointer overflow-hidden rounded-lg`}
                              onClick={() =>
                                openLightbox(project, mediaIndex + 1)
                              }
                            >
                              <Image
                                src={
                                  media.type === "video"
                                    ? media.thumbnail || media.url
                                    : media.url
                                }
                                alt={`${project.name} - Media ${
                                  mediaIndex + 2
                                }`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                              />

                              {/* Video Play Button Overlay */}
                              {media.type === "video" && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="bg-black/60 backdrop-blur-sm rounded-full p-2 group-hover:bg-black/80 transition-all duration-300">
                                    <Play className="w-6 h-6 text-white fill-white" />
                                  </div>
                                </div>
                              )}

                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                <Eye
                                  className={`${
                                    media.type === "video"
                                      ? "w-4 h-4"
                                      : "w-5 h-5"
                                  } text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                />
                              </div>
                              {/* Media Counter */}
                              <div className="absolute bottom-2 right-2">
                                <Badge className="bg-black/70 backdrop-blur-sm border-none text-white text-xs">
                                  {media.type === "video" ? "📹" : "📸"}{" "}
                                  {mediaIndex + 2}/{project.media.length}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* View All Media Button */}
                    {project.media.length > 4 && (
                      <div className="mt-3 text-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openLightbox(project, 0)}
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          View All {project.media.length} Media
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Aquarium?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join hundreds of satisfied Brisbane customers who trust our
            professional fish tank cleaning and maintenance services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3"
            >
              <Link href="/service">Book Your Service</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
            >
              <Link href="/contact">Call (04) 5766 3939</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {selectedMedia.media.length > 1 && (
              <>
                <button
                  onClick={prevMedia}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextMedia}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Media Content */}
            <div className="relative aspect-video w-full">
              {selectedMedia.media[currentMediaIndex].type === "video" ? (
                <video
                  src={selectedMedia.media[currentMediaIndex].url}
                  controls
                  autoPlay
                  muted
                  className="w-full h-full object-contain rounded-lg"
                  poster={selectedMedia.media[currentMediaIndex].thumbnail}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={selectedMedia.media[currentMediaIndex].url}
                  alt={`${selectedMedia.name} - Media ${currentMediaIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              )}
            </div>

            {/* Media Info */}
            <div className="bg-black/50 backdrop-blur-sm p-4 rounded-b-lg">
              <h3 className="text-white font-semibold text-lg">
                {selectedMedia.name}
              </h3>
              <p className="text-white/70">
                {selectedMedia.media[currentMediaIndex].type === "video"
                  ? "📹 Video"
                  : "📸 Image"}{" "}
                {currentMediaIndex + 1} of {selectedMedia.media.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
