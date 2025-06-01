"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HERO_VARIANTS = [
  {
    bg: "/heroBgLP.jpg",
    headline: "Fleet Fence Limited",
    subheadline: "Sailing Security, Riding on Waves of Reliability",
    tagline: "Delivering innovative, safe, and efficient support to the Oil & Gas and Shipping industries in the Gulf of Guinea.",
    logo: "/fleetfence-logo.png",
  },
  {
    bg: "/heroBgOne.jpg",
    headline: "Integrated Maritime Solutions",
    subheadline: "Modern Fleet, Global Standards",
    tagline: "Your trusted partner for maritime security and operational excellence in the Gulf of Guinea.",
    logo: "/fleetfence-logo.png",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [flipping, setFlipping] = useState(false);
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % HERO_VARIANTS.length);
        setFlipping(false);
      }, 600); // flip duration
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const hero = HERO_VARIANTS[active];
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-white text-blue-800 -mb-20 pt-8 pb-40 min-h-[750px] px-0">
      {/* Responsive Background Image with Soft Zoom */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src={hero.bg}
          alt="Hero Background"
          fill
          className={`w-full h-full transition-transform duration-[3000ms] ease-in-out animate-hero-zoom
            object-cover md:object-cover sm:object-cover object-contain
          `}
          style={{ zIndex: 1 }}
          priority
        />
        {/* Light glass-like overlay for clarity, image is main focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 via-neutral-800/20 to-neutral-700/10 transition-opacity duration-1000" style={{ zIndex: 2 }} />
      </div>
      {/* Hero Content in Glasmorphic Card with Flip Animation */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center w-full min-h-[340px] sm:min-h-[360px] md:min-h-[400px] transition-all duration-1000 ease-in-out
          ${flipping ? 'animate-hero-flip' : ''}
        `}
        key={active}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight transition-all duration-1000 text-white mb-3 tracking-tight text-center" style={{ textShadow: '0 3px 16px #000c, 0 1px 1px #000a' }}>
          {hero.headline}
        </h1>
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-2 transition-all duration-1000 text-white text-xl md:text-2xl font-semibold tracking-tight text-center" style={{ textShadow: '0 2px 8px #000b' }}>
          {hero.subheadline}
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mt-3 transition-all duration-1000 font-medium tracking-tight text-center" style={{ textShadow: '0 1px 6px #000a' }}>
          {hero.tagline}
        </p>
        <a href="#contact" className="bg-white/80 text-brand-darkblue px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded font-semibold shadow hover:bg-brand-lightgrey transition mt-4 mb-2 text-base sm:text-lg md:text-xl drop-shadow-md">Request a Quote</a>
      </div>
      {/* Child Cards */}
      <div className="relative z-20 flex flex-col md:flex-row gap-4 md:gap-6 mt-6 mb-2 w-full max-w-4xl justify-center items-center">
        <div className="bg-white rounded-2xl shadow-xl border border-brand-lightgrey/30 p-4 sm:p-6 flex-1 min-w-[180px] md:min-w-[220px] max-w-md mx-auto hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-darkblue mb-2">Modern Fleet</h3>
          <p className="text-base sm:text-base md:text-lg text-gray-700">State-of-the-art vessels equipped for safety, efficiency, and reliability in all operations.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-brand-lightgrey/30 p-4 sm:p-6 flex-1 min-w-[180px] md:min-w-[220px] max-w-md mx-auto hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-darkblue mb-2">Expert Crew</h3>
          <p className="text-base sm:text-base md:text-lg text-gray-700">Highly trained professionals dedicated to delivering superior maritime solutions.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-brand-lightgrey/30 p-4 sm:p-6 flex-1 min-w-[180px] md:min-w-[220px] max-w-md mx-auto hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-darkblue mb-2">Global Standards</h3>
          <p className="text-base sm:text-base md:text-lg text-gray-700">Compliance with international regulations and best practices for your peace of mind.</p>
        </div>
      </div>
      {/* Ship image with rocking animation, perfectly centered and responsive, overlaps slider */}
      <div className="absolute right-0 bottom-[-30px] md:bottom-[-40px] z-[999] w-[60vw] max-w-[500px] min-w-[120px] pr-8 md:pr-16 pointer-events-none" data-aos="fade-left" data-aos-delay="400">
        <Image
          src="/hero-vessel.png"
          alt="Hero Vessel"
          width={500}
          height={250}
          className="animate-ship-rock w-full"
          priority
        />
      </div>
      <style jsx global>{`
        @keyframes hero-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        .animate-hero-zoom {
          animation: hero-zoom 10s ease-in-out infinite alternate;
        }
        @keyframes hero-flip {
          0% { transform: rotateY(0deg); opacity: 1; }
          40% { transform: rotateY(90deg); opacity: 0.2; }
          60% { transform: rotateY(90deg); opacity: 0.2; }
          100% { transform: rotateY(0deg); opacity: 1; }
        }
        .animate-hero-flip {
          animation: hero-flip 0.6s cubic-bezier(0.4,0.2,0.2,1);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
} 