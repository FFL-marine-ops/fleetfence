"use client";
import { useState, useCallback } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-16 overflow-hidden">

        {/* Logo section with max-width constraint and min-width */}
        <div className="flex items-center gap-2 min-w-0">
          <Image
            src="/fleetfence-logo.webp"
            alt="FleetFence Logo"
            // Re-adding width and height props for next/image optimization
            width={300}
            height={150}
            className="h-10 w-auto max-w-[140px] sm:max-w-none flex-grow-0 flex-shrink-0"
            priority
            loading="eager"
          />
        </div>

        {/* Nav links with flex-shrink-0 */}
        <div className="hidden md:flex gap-6 flex-shrink-0">
          <a href="#" className="text-brand-darkblue hover:text-brand-blueshade transition-colors">Home</a>
          <a href="#services" className="text-brand-darkblue hover:text-brand-blueshade transition-colors">Services</a>
          <a href="#procurement" className="text-brand-darkblue hover:text-brand-blueshade transition-colors">Procurement</a>
          <a href="#about" className="text-brand-darkblue hover:text-brand-blueshade transition-colors">About</a>
          <a href="#contact" className="text-brand-darkblue hover:text-brand-blueshade transition-colors">Contact</a>
        </div>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <span className="block w-6 h-6 relative">
              <span className="absolute left-0 top-1/2 w-6 h-0.5 bg-brand-darkblue rotate-45"></span>
              <span className="absolute left-0 top-1/2 w-6 h-0.5 bg-brand-darkblue -rotate-45"></span>
            </span>
          ) : (
            <>
          <span className="w-6 h-0.5 bg-brand-darkblue"></span>
          <span className="w-6 h-0.5 bg-brand-darkblue"></span>
          <span className="w-6 h-0.5 bg-brand-darkblue"></span>
            </>
          )}
        </button>
      </div>
      {open && (
        <div
          className="md:hidden bg-white shadow-lg px-4 py-2 flex flex-col gap-4 transition-all duration-300 ease-in-out transform"
          style={{ minHeight: open ? '180px' : '0px' }}
        >
          <a href="#" className="text-brand-darkblue hover:text-brand-blueshade transition-colors">Home</a>
          <a href="#services" className="text-brand-darkblue hover:text-brand-blueshade transition-colors">Services</a>
          <a href="#procurement" className="text-brand-darkblue hover:text-brand-blueshade transition-colors">Procurement</a>
          <a href="#about" className="text-brand-darkblue hover:text-brand-blueshade transition-colors">About</a>
          <a href="#contact" className="text-brand-darkblue hover:text-brand-blueshade transition-colors">Contact</a>
        </div>
      )}
    </nav>
  );
} 