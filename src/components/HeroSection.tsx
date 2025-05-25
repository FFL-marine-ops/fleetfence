"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-white text-brand-darkblue overflow-visible -mb-20 pt-8 -pb-0">
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Optional: subtle background pattern or gradient can go here */}
      </div>
      {/* Hero Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-1 md:gap-2 text-center w-full max-w-3xl mx-auto" data-aos="fade-down">
        {/* Logo */}
        <Image
          src="/fleetfence-logo.png"
          alt="FleetFence Logo"
          width={160}
          height={160}
          className="mx-auto -mb-20 w-44 h-44 md:w-60 md:h-60 object-contain"
          priority
        />
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg leading-tight" data-aos="fade-up">
          <span className="text-brand-darkblue">Fleet</span>
          <span className="text-brand-teal">Fence</span>{' '}
          <span className="text-brand-darkblue">Limited</span>
        </h1>
        <div className="flex justify-center items-center gap-2 mt-2" data-aos="fade-up" data-aos-delay="100">
          <span className="italic text-brand-teal text-lg md:text-xl font-semibold">Sailing Security,</span>
          <span className="text-brand-darkblue text-lg md:text-xl font-bold">Riding on Waves of Reliability</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold drop-shadow-lg mt-3" data-aos="fade-up" data-aos-delay="200">
          <span className="text-brand-darkblue">Integrated </span>
          <span className="text-brand-teal">Maritime </span>
          <span className="text-brand-darkblue">Solutions</span>
        </h2>
        <p className="text-md md:text-xl max-w-2xl mt-2" data-aos="fade-up" data-aos-delay="300">
          <span className="text-brand-darkblue">Delivering </span>
          <span className="text-brand-teal">innovative</span>
          <span className="text-brand-darkblue">, safe, and </span>
          <span className="text-brand-teal">efficient</span>
          <span className="text-brand-darkblue"> support to the Oil & Gas and Shipping industries in the Gulf of Guinea.</span>
        </p>
        <a href="#contact" className="bg-brand-darkblue text-white px-6 py-3 rounded font-semibold shadow hover:bg-brand-lightgrey transition mt-4 mb-4" data-aos="zoom-in" data-aos-delay="400">Request a Quote</a>
      </div>
      {/* Child Cards */}
      <div className="relative z-20 flex flex-col md:flex-row gap-6 mt-6 mb-2 w-full max-w-4xl justify-center items-center">
        <div className="bg-white rounded-2xl shadow-xl border border-brand-lightgrey/30 p-6 flex-1 min-w-[220px] hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-lg font-bold text-brand-darkblue mb-2">Modern Fleet</h3>
          <p className="text-gray-700">State-of-the-art vessels equipped for safety, efficiency, and reliability in all operations.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-brand-lightgrey/30 p-6 flex-1 min-w-[220px] hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-lg font-bold text-brand-darkblue mb-2">Expert Crew</h3>
          <p className="text-gray-700">Highly trained professionals dedicated to delivering superior maritime solutions.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-brand-lightgrey/30 p-6 flex-1 min-w-[220px] hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-bold text-brand-darkblue mb-2">Global Standards</h3>
          <p className="text-gray-700">Compliance with international regulations and best practices for your peace of mind.</p>
        </div>
      </div>
      {/* Ship image with rocking animation, perfectly centered and responsive, overlaps slider */}
      <div className="relative flex justify-end z-50 -mt-10 -mb-20 -pb-10 w-full pr-8 md:pr-16" data-aos="fade-left" data-aos-delay="400">
        <div className="w-[60vw] max-w-[500px] min-w-[120px]">
          <Image
            src="/hero-vessel.png"
            alt="Hero Vessel"
            width={500}
            height={250}
            className="animate-ship-rock w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
} 