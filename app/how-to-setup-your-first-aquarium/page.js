"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Banner Component
function AquariumGuideBanner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1757335537/bucephalandra_bush_oyiznj"
        alt="Beautiful planted aquarium setup guide - The Ultimate Beginner's Guide"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            The Ultimate Beginner&apos;s Guide
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
            to Your First Aquarium
          </p>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Everything you need to know to set up and maintain a thriving
            aquarium ecosystem
          </p>
        </div>
      </div>
    </div>
  );
}

// Two-Column Image Section
function ImageSection() {
  return (
    <div className="my-12 lg:my-16">
      <div className="grid md:grid-cols-2 gap-8">
        <Link
          href="https://duckaroo.com.au/collections/accessories"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 cursor-pointer">
            <Image
              src="https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1756906679/best-small-fish-tank-filter_c3egvr"
              alt="Essential aquarium equipment including filter, heater, and lighting"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/60" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
                Essential Equipment
              </h3>
              <p className="text-sm">Filter, heater, lighting, and more</p>
              <p className="text-xs mt-2 opacity-90">Shop Accessories →</p>
            </div>
          </div>
        </Link>
        <Link
          href="https://duckaroo.com.au/collections/aquarium-shrimp"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 cursor-pointer">
            <Image
              src="https://res.cloudinary.com/dhvj8x2nq/image/upload/f_auto,q_auto/v1757336118/different-types-of-guppy-rainbow-fish_panpilai-paipa_Shutterstock-3-1_rvoint"
              alt="Beginner-friendly fish species including bettas, guppies, and tetras"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/60" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
                Beginner Fish Species
              </h3>
              <p className="text-sm">
                Hardy, beautiful fish perfect for new aquarists
              </p>
              <p className="text-xs mt-2 opacity-90">
                Shop Live Fish & Shrimp →
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

// Table of Contents Component
function TableOfContents() {
  const [activeSection, setActiveSection] = useState("");

  const sections = useMemo(() => [
    { id: "introduction", title: "Introduction & Nitrogen Cycle" },
    { id: "step1", title: "Find Local Resources" },
    { id: "step2", title: "Decide on Setup Type" },
    { id: "step3", title: "Choose Your Fish" },
    { id: "step4", title: "Select Plants" },
    { id: "step5", title: "Tanks & Stands" },
    { id: "step6", title: "Filters" },
    { id: "step7", title: "Heaters" },
    { id: "step8", title: "Lighting" },
    { id: "step9", title: "Miscellaneous Equipment" },
    { id: "step10", title: "Setting Up Your Tank" },
    { id: "step11", title: "Cycling Your Tank" },
    { id: "step12", title: "Adding Fish & Plants" },
    { id: "step13", title: "Monitoring" },
    { id: "step14", title: "Feeding & Maintenance" },
    { id: "samples", title: "Sample Setups" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg mb-8 border border-gray-600">
      <h2 className="text-2xl font-bold text-white mb-4">Guide Contents</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`block p-2 rounded transition-colors duration-200 hover:bg-blue-600 ${
              activeSection === section.id
                ? "bg-blue-600 text-white font-semibold"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {section.title}
          </a>
        ))}
      </div>
    </div>
  );
}

// Main Content Component
function GuideContent() {
  return (
    <div className="prose prose-lg max-w-none text-gray-100">
      {/* Introduction */}
      <section id="introduction" className="mb-12">
        <div className="bg-gray-800/30 border-l-4 border-gray-500 p-6 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Before We Begin
          </h2>
          <p className="text-gray-200">
            Setting up an aquarium can be a daunting task, and the vast majority
            of issues people run into could have been prevented with research.
            If you&apos;ve made it to this page, congratulations, you have already
            taken the first step towards responsible fish keeping.
          </p>
        </div>

        <div className="bg-blue-900/30 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="text-xl font-bold text-blue-200 mb-3">
            Understanding the Nitrogen Cycle
          </h3>
          <p className="text-gray-200 mb-3">
            The nitrogen cycle is the most misunderstood and fundamental part of
            fish keeping:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-200">
            <li>
              <strong>Ammonia Production:</strong> Fish poop, uneaten food, and
              decaying organic matter create ammonia in the water
            </li>
            <li>
              <strong>Ammonia is Toxic:</strong> Ammonia is highly toxic to fish
              and will kill them eventually
            </li>
            <li>
              <strong>Beneficial Bacteria:</strong> Friendly bacteria convert
              ammonia into nitrite (still toxic)
            </li>
            <li>
              <strong>Final Conversion:</strong> More bacteria convert nitrite
              into nitrate (relatively harmless in small quantities)
            </li>
            <li>
              <strong>Filter Home:</strong> This bacteria colony primarily lives
              in your filter and needs water flow to survive
            </li>
          </ol>
        </div>
      </section>

      {/* Step 1 */}
      <section id="step1" className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Step 1: Find Your Local Resources
        </h2>
        <div className="bg-gray-800/30 p-6 rounded-lg">
          <p className="mb-4">
            Local fish stores and hobby groups will be your best friend, and
            more than willing to help you. Simple google searches and facebook
            groups should help you here.
          </p>
          <div className="bg-gray-800 p-4 rounded border-l-4 border-gray-500">
            <h4 className="font-bold text-gray-200 mb-2">Pro Tips:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li>Find locally owned fish stores (not Petco or Petsmart)</li>
              <li>Visit on weekdays or when business is slow</li>
              <li>Ask employees about local groups and area-specific advice</li>
              <li>Take notes on fish you like, but don&apos;t buy anything yet</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section id="step2" className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Step 2: Decide What Sort of Setup You Want
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-900/30 p-6 rounded-lg">
            <h4 className="font-bold text-blue-200 mb-3">
              Tank Size Considerations
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>
                <strong>Larger tanks are easier:</strong> More stable water
                parameters
              </li>
              <li>
                <strong>Minimum 10 gallons</strong> for beginners
              </li>
              <li>
                <strong>Go as big as practical</strong> for your space and
                budget
              </li>
              <li>Larger water volume = less prone to fluctuations</li>
            </ul>
          </div>
          <div className="bg-gray-800/30 p-6 rounded-lg">
            <h4 className="font-bold text-gray-200 mb-3">
              Live Plants: Pros & Cons
            </h4>
            <div className="mb-3">
              <strong className="text-gray-300">Advantages:</strong>
              <ul className="list-disc list-inside text-sm text-gray-200 mt-1">
                <li>Add beauty and natural behavior</li>
                <li>Consume excess nutrients</li>
                <li>Help maintain water quality</li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-300">Considerations:</strong>
              <ul className="list-disc list-inside text-sm text-gray-200 mt-1">
                <li>Require proper lighting</li>
                <li>May need nutrient supplementation</li>
                <li>Need balance to prevent algae</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section id="step3" className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Step 3: Deciding on Fish
        </h2>
        <p className="mb-4">
          There are a million different types of fish in the hobby and it can be
          overwhelming to choose. Focus on beginner-friendly, hardy species
          without special requirements.
        </p>
        <div className="bg-gray-800/30 p-6 rounded-lg">
          <h4 className="font-bold text-gray-200 mb-3">Helpful Resources:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>
              <strong>duckaroo.com.au</strong> - Care sheets for specific fish
            </li>
            <li>
              <strong>aqadvisor.com</strong> - Calculate tank capacity and
              compatibility
            </li>
            <li>Search &quot;beginner friendly fish&quot; for species recommendations</li>
            <li>Avoid fish requiring live foods or extreme pH requirements</li>
          </ul>
        </div>
      </section>

      {/* Image Section Here */}
      <ImageSection />

      {/* Step 4 */}
      <section id="step4" className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Step 4: Deciding on Plants
        </h2>
        <div className="bg-gray-800/30 p-6 rounded-lg">
          <h4 className="font-bold text-gray-200 mb-3">
            Recommended for Beginners: Epiphytes
          </h4>
          <p className="mb-3">
            Epiphytes attach to decorations and take nutrients from the water
            rather than substrate. This eliminates the need for expensive,
            plant-specific substrates.
          </p>
          <div className="bg-gray-800 p-4 rounded border-l-4 border-gray-500">
            <strong>Popular Epiphyte Options:</strong>
            <ul className="list-disc list-inside mt-2 text-gray-200">
              <li>Anubias species</li>
              <li>Java Fern</li>
              <li>Java Moss</li>
              <li>Marimo Moss Balls</li>
            </ul>
            <p className="mt-3 text-sm text-gray-300">
              <em>
                Tip: You can always add terra cotta pots with fancy substrate
                later for rooting plants.
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* Step 5 */}
      <section id="step5" className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Step 5: Equipment Pt.1 - Tanks, Stands, and Lids
        </h2>
        <div className="space-y-6">
          <div className="bg-blue-900/30 p-6 rounded-lg">
            <h4 className="font-bold text-blue-200 mb-3">Tanks</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>
                <strong>Glass aquariums with plastic frames</strong> are your
                best option
              </li>
              <li>
                <strong>Buy new if possible</strong> - Petco/Petsmart have
                &quot;dollar per gallon&quot; sales
              </li>
              <li>
                <strong>Used tanks:</strong> Check Craigslist/Facebook
                Marketplace
              </li>
              <li>
                <strong>Always leak test</strong> before bringing inside
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/30 p-6 rounded-lg">
            <h4 className="font-bold text-gray-200 mb-3">Stands</h4>
            <div className="bg-gray-800 p-4 rounded border-l-4 border-gray-500">
              <p className="mb-3">
                <strong>Critical:</strong> Water weighs ~8 lbs per gallon!
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-200">
                <li>10-20 gallons: Sturdy table/desk (if level)</li>
                <li>40+ gallons: Purpose-built stand required</li>
                <li>DIY options available with moderate skills</li>
                <li>Ensure stand is level</li>
                <li>Consider yoga mat between tank and stand</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800/30 p-6 rounded-lg">
            <h4 className="font-bold text-white mb-3">Lids</h4>
            <p>
              Glass lids prevent fish from jumping and reduce evaporation.
              Essential for most setups.
            </p>
          </div>
        </div>
      </section>

      {/* Step 6 */}
      <section id="step6" className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Step 6: Equipment Pt.2 - Filters
        </h2>
        <p className="mb-4">
          Filters provide space for beneficial bacteria and keep water moving to
          prevent stagnation.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-900/30 p-6 rounded-lg">
            <h4 className="font-bold text-blue-200 mb-3">Hang-On-Back (HOB)</h4>
            <p className="text-sm mb-3">
              <em>Top Recommendation</em>
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-200">
              <li>Hangs off back of tank</li>
              <li>Sucks water up, filters, returns</li>
              <li>Easy to maintain</li>
              <li>Great for beginners</li>
            </ul>
          </div>

          <div className="bg-gray-800/30 p-6 rounded-lg">
            <h4 className="font-bold text-gray-200 mb-3">Sponge Filters</h4>
            <p className="text-sm mb-3">
              <em>Budget Option</em>
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-200">
              <li>Uses air pump and bubbles</li>
              <li>Cheapest option</li>
              <li>Can run on battery backup</li>
              <li>Good for power outage areas</li>
            </ul>
          </div>

          <div className="bg-gray-800/30 p-6 rounded-lg">
            <h4 className="font-bold text-gray-200 mb-3">Canister Filters</h4>
            <p className="text-sm mb-3">
              <em>Large Tanks (55+)</em>
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-200">
              <li>External canister with media</li>
              <li>Uses hoses to/from tank</li>
              <li>Best for larger setups</li>
              <li>Most filtration capacity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step 7 */}
      <section id="step7" className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Step 7: Equipment Pt.3 - Heaters
        </h2>
        <div className="bg-gray-800/30 p-6 rounded-lg">
          <p className="mb-4">
            Heaters maintain proper temperatures for cold-blooded fish. They&apos;re
            the most failure-prone equipment, so invest in quality.
          </p>
          <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-200 mb-2">Important Notes:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li>Buy from reputable brands</li>
              <li>Get a separate thermometer to verify performance</li>
              <li>Check wattage guides for proper sizing</li>
              <li>Monitor regularly for malfunction</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step 8 */}
      <section id="step8" className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Step 8: Equipment Pt.4 - Lights
        </h2>
        <div className="bg-gray-800/30 p-6 rounded-lg">
          <p className="mb-4">
            Lights allow you to view fish and maintain plant growth. Too much
            light causes algae.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-bold mb-2 text-white">Budget Options:</h4>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-200">
                <li>Desk lamps with 6500K LED bulbs</li>
                <li>6500K shop lights for larger tanks</li>
                <li>Wall timers from hardware store</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-bold mb-2 text-white">Aquarium-Specific:</h4>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-200">
                <li>Built-in timers</li>
                <li>Adjustable intensity</li>
                <li>Programmable schedules</li>
                <li>Plant-specific spectrums</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-800 p-3 rounded mt-4">
            <strong className="text-gray-200">Timer Essential:</strong>{" "}
            <span className="text-gray-200">
              Prevents algae and gives fish regular day/night cycle
            </span>
          </div>
        </div>
      </section>

      {/* Step 9 */}
      <section id="step9" className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Step 9: Equipment Pt.5 - Miscellaneous
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-900/30 p-6 rounded-lg">
            <h4 className="font-bold text-blue-200 mb-3">Water Changes</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>
                <strong>Small tanks:</strong> 5-gallon bucket + siphon
              </li>
              <li>
                <strong>Large tanks (40+):</strong> Python system
              </li>
              <li>Python hooks to sink for direct fill/drain</li>
            </ul>
          </div>

          <div className="bg-gray-800/30 p-6 rounded-lg">
            <h4 className="font-bold text-gray-200 mb-3">Essential Supplies</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>
                <strong>Dechlorinator</strong> (if on municipal water)
              </li>
              <li>
                <strong>Water test kits</strong> (API Master Kit recommended)
              </li>
              <li>
                <strong>Fish net</strong>
              </li>
              <li>
                <strong>Unscented ammonia</strong> (for cycling)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step 10 */}
      <section id="step10" className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Step 10: Setting Up Your Tank
        </h2>
        <div className="bg-gray-800/30 p-6 rounded-lg">
          <ol className="list-decimal list-inside space-y-3 text-gray-200">
            <li>
              <strong>Location:</strong> Away from direct sunlight, high-traffic
              area for monitoring
            </li>
            <li>
              <strong>Substrate:</strong> Rinse sand/gravel thoroughly before
              adding
            </li>
            <li>
              <strong>Decorations:</strong> Rinse all decorations
            </li>
            <li>
              <strong>Fill tank:</strong> Add dechlorinated water
            </li>
            <li>
              <strong>Equipment:</strong> Install all equipment per manufacturer
              instructions
            </li>
            <li>
              <strong>Initial lighting:</strong> Low intensity, 6 hours on/18
              hours off
            </li>
          </ol>
        </div>
      </section>

      {/* Step 11 */}
      <section id="step11" className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Step 11: Cycling Your Tank
        </h2>
        <div className="bg-gray-800/30 p-6 rounded-lg border-l-4 border-blue-500">
          <p className="mb-4 font-semibold">
            <strong>Critical:</strong> Never add fish before establishing
            beneficial bacteria colony!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-bold text-gray-200 mb-3">
                Fast Method (Recommended)
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>
                  <strong>Get used filter media</strong> from established tank
                </li>
                <li>Ask local fish stores or hobbyists</li>
                <li>Often free or for cost of 6-pack</li>
                <li>
                  <strong>Time: 3-7 days</strong>
                </li>
                <li>Don&apos;t rinse the used media!</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-bold text-gray-200 mb-3">From Scratch</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>Add ammonia source</li>
                <li>Wait for bacteria to develop</li>
                <li>
                  <strong>Time: 4-8 weeks</strong>
                </li>
                <li>Test water parameters daily</li>
                <li>Follow established cycling guides</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step 12 */}
      <section id="step12" className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Step 12: Fish and Plants
        </h2>
        <div className="space-y-6">
          <div className="bg-blue-900/30 p-6 rounded-lg">
            <h4 className="font-bold text-blue-200 mb-3">Adding Fish</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-200">
              <li>
                <strong>Buy from local fish stores</strong> (avoid chain stores
                when possible)
              </li>
              <li>
                <strong>Temperature acclimate:</strong> Float sealed bag for 15
                minutes
              </li>
              <li>
                <strong>Net transfer:</strong> Pour fish into net over bucket,
                then release into tank
              </li>
              <li>
                <strong>Avoid contaminated water</strong> from the bag
              </li>
              <li>
                <strong>Lights off</strong> initially to reduce stress
              </li>
              <li>Fish may not eat for first few days - this is normal</li>
            </ol>
          </div>

          <div className="bg-gray-800/30 p-6 rounded-lg">
            <h4 className="font-bold text-gray-200 mb-3">Adding Plants</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-200">
              <li>
                <strong>Rinse with tap water</strong> to remove pests/algae
              </li>
              <li>
                <strong>Consider hydrogen peroxide dip</strong> for extra
                precaution
              </li>
              <li>
                <strong>Attach epiphytes</strong> to decorations with cotton
                thread
              </li>
              <li>Do this before adding fish to avoid stress</li>
              <li>Allow time for plants to attach firmly</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Step 13 */}
      <section id="step13" className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Step 13: Monitoring Your Fish and Plants
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/30 p-6 rounded-lg">
            <h4 className="font-bold text-gray-200 mb-3">Fish Health Signs</h4>
            <p className="mb-3">Check daily for first few weeks:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li>White spots or patches</li>
              <li>Clamped fins</li>
              <li>Swimming difficulties</li>
              <li>Dropsy (flared scales)</li>
              <li>Loss of appetite</li>
              <li>Unusual behavior</li>
            </ul>
          </div>

          <div className="bg-blue-900/30 p-6 rounded-lg">
            <h4 className="font-bold text-blue-200 mb-3">Water Testing</h4>
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <strong>First Week:</strong> Test daily
                <br />
                <span className="text-sm text-gray-300">
                  Watch for ammonia/nitrite spikes
                </span>
              </div>
              <div className="bg-blue-900/40 p-3 rounded">
                <strong className="text-blue-200">Emergency Action:</strong>
                <br />
                <span className="text-gray-200">
                  If ammonia or nitrite {">"}0.25 ppm: 30-50% water change
                  immediately
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/30 p-6 rounded-lg mt-6">
          <h4 className="font-bold text-gray-200 mb-3">Lighting Adjustment</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>
              <strong>No algae:</strong> Slowly increase intensity and duration
            </li>
            <li>
              <strong>Algae present:</strong> Reduce lighting, increase flow,
              larger water changes
            </li>
            <li>Adjust in 30-minute increments weekly</li>
            <li>Target: 6-8 hours for planted tanks</li>
          </ul>
        </div>
      </section>

      {/* Step 14 */}
      <section id="step14" className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Step 14: Feeding Your Fish and Weekly Maintenance
        </h2>
        <div className="space-y-6">
          <div className="bg-gray-800/30 p-6 rounded-lg">
            <h4 className="font-bold text-gray-200 mb-3">Feeding Guidelines</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>
                <strong>Once daily</strong> feeding
              </li>
              <li>
                <strong>3-minute rule:</strong> Only what they can eat in 3
                minutes
              </li>
              <li>
                <strong>Species-specific food:</strong> Research your fish&apos;s
                dietary needs
              </li>
              <li>
                <strong>Overfeeding risks:</strong> Bloating, illness, water
                quality issues
              </li>
            </ul>
          </div>

          <div className="bg-blue-900/30 p-6 rounded-lg">
            <h4 className="font-bold text-blue-200 mb-3">Weekly Maintenance</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-200">
              <li>
                <strong>20-30% water change</strong> (most important task)
              </li>
              <li>
                <strong>Test water parameters</strong> with test kit
              </li>
              <li>
                <strong>Keep nitrates below 20 ppm</strong>
              </li>
              <li>
                <strong>Scrape algae</strong> from glass
              </li>
              <li>
                <strong>Vacuum substrate</strong> to remove debris
              </li>
              <li>
                <strong>Trim dead plants</strong>
              </li>
            </ol>
          </div>

          <div className="bg-gray-800/30 p-6 rounded-lg">
            <h4 className="font-bold text-white mb-3">Monthly Tasks</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>
                <strong>Clean filter media</strong> in tank water (not tap
                water!)
              </li>
              <li>
                <strong>Rinse sponge filters</strong> in bucket of tank water
              </li>
              <li>Never use soap or hot water on biological media</li>
              <li>Replace mechanical media as needed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sample Setups */}
      <section id="samples" className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Sample Aquarium Setups
        </h2>
        <p className="mb-6 text-gray-200">
          Here are four complete setup examples for different budgets and
          experience levels. Mix and match as needed for your specific
          situation.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sample 1 */}
          <div className="bg-gray-800/30 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-200 mb-4">
              Sample 1: Budget 10-Gallon Betta
            </h3>
            <div className="mb-4">
              <h4 className="font-semibold text-white mb-2">Equipment:</h4>
              <ul className="text-sm space-y-1 text-gray-200">
                <li>• 10-gallon tank</li>
                <li>• Hikari Bacto-Surge sponge filter (small)</li>
                <li>• Tetra Whisper 20 air pump</li>
                <li>• Aqueon 50W preset heater</li>
                <li>• Desk lamp with 6500K LED</li>
                <li>• Pool filter sand</li>
                <li>• SeaChem Prime dechlorinator</li>
                <li>• API Freshwater Master Test Kit</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <strong className="text-gray-300">Inhabitants:</strong> 1 Betta, 1
              Apple/Mystery Snail
            </div>
          </div>

          {/* Sample 2 */}
          <div className="bg-gray-800/30 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-200 mb-4">
              Sample 2: Planted 10-Gallon Betta
            </h3>
            <div className="mb-4">
              <h4 className="font-semibold text-white mb-2">Equipment:</h4>
              <ul className="text-sm space-y-1 text-gray-200">
                <li>• 10-gallon tank with glass lid</li>
                <li>• AquaClear 5-20 gallon filter</li>
                <li>• EHEIM Jager heater</li>
                <li>• Finnex Planted Plus 24/7 light</li>
                <li>• Aquarium sand/gravel</li>
                <li>• SeaChem Prime</li>
                <li>• API Test Kit</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <strong className="text-gray-300">Inhabitants:</strong> 1 Betta, 1
              Apple Snail, Anubias, Java Fern, Java Moss, Marimo Balls
            </div>
          </div>

          {/* Sample 3 */}
          <div className="bg-gray-800/30 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-200 mb-4">
              Sample 3: 20-Gallon Guppy Tank
            </h3>
            <div className="mb-4">
              <h4 className="font-semibold text-white mb-2">Equipment:</h4>
              <ul className="text-sm space-y-1 text-gray-200">
                <li>• 20-gallon long tank + stand</li>
                <li>• 2 Hikari sponge filters (small)</li>
                <li>• Tetra Whisper 40 air pump</li>
                <li>• EHEIM Jager heater</li>
                <li>• Finnex Stingray 30&quot; light</li>
                <li>• Pool filter sand</li>
                <li>• Glass lid</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <strong className="text-gray-300">Inhabitants:</strong> 4 Guppies
              (mixed), Guppy Grass
            </div>
          </div>

          {/* Sample 4 */}
          <div className="bg-gray-800/30 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-200 mb-4">
              Sample 4: 40-Gallon Community Tank
            </h3>
            <div className="mb-4">
              <h4 className="font-semibold text-white mb-2">Equipment:</h4>
              <ul className="text-sm space-y-1 text-gray-200">
                <li>• 40-gallon breeder tank + stand</li>
                <li>• AquaClear 50 + sponge filter</li>
                <li>• EHEIM Jager heater</li>
                <li>• Nicrew Classic 30-36&quot; light</li>
                <li>• Python water changer system</li>
                <li>• Pool filter sand + decorations</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <strong className="text-gray-300">Inhabitants:</strong> 1 Pearl
              Gourami, 10 Neon Tetras, 10 Panda Corydoras, Live Plants
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <div className="bg-blue-900/30 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">
            You&apos;re Ready to Begin!
          </h2>
          <p className="text-gray-200 mb-4">
            This guide should be enough to get you started in fishkeeping.
            Remember that the hobby is full of different opinions, and there&apos;s
            always more to learn.
          </p>
          <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-200 mb-2">Keep Learning:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li>Join local fishkeeping groups</li>
              <li>Continue researching your specific fish species</li>
              <li>Don&apos;t be afraid to ask questions</li>
              <li>
                Start with the sample setups and modify as you gain experience
              </li>
              <li>Most importantly: enjoy the journey!</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

// Main Page Component
export default function AquariumGuidePage() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen bg-gray-900">
        <AquariumGuideBanner />

        <div className="max-w-6xl mx-auto px-4 py-12">
          <TableOfContents />
          <GuideContent />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
