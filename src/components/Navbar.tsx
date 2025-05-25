"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-brand-darkblue">FleetFence</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-brand-blueshade hover:text-brand-darkblue transition-colors">Home</a>
          <a href="#services" className="text-brand-blueshade hover:text-brand-darkblue transition-colors">Services</a>
          <a href="#procurement" className="text-brand-blueshade hover:text-brand-darkblue transition-colors">Procurement</a>
          <a href="#about" className="text-brand-blueshade hover:text-brand-darkblue transition-colors">About</a>
          <a href="#contact" className="text-brand-blueshade hover:text-brand-darkblue transition-colors">Contact</a>
        </div>
        <button className="md:hidden flex flex-col gap-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? (
            // X icon
            <span className="block w-6 h-6 relative">
              <span className="absolute left-0 top-1/2 w-6 h-0.5 bg-brand-darkblue rotate-45"></span>
              <span className="absolute left-0 top-1/2 w-6 h-0.5 bg-brand-darkblue -rotate-45"></span>
            </span>
          ) : (
            // Hamburger icon
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
          className={`md:hidden bg-white shadow-lg px-4 py-2 flex flex-col gap-4 transition-all duration-300 ease-in-out transform ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          style={{ minHeight: open ? '180px' : '0px' }}
        >
          <a href="#" className="text-brand-blueshade hover:text-brand-darkblue transition-colors">Home</a>
          <a href="#services" className="text-brand-blueshade hover:text-brand-darkblue transition-colors">Services</a>
          <a href="#procurement" className="text-brand-blueshade hover:text-brand-darkblue transition-colors">Procurement</a>
          <a href="#about" className="text-brand-blueshade hover:text-brand-darkblue transition-colors">About</a>
          <a href="#contact" className="text-brand-blueshade hover:text-brand-darkblue transition-colors">Contact</a>
        </div>
      )}
    </nav>
  );
} 