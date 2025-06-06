import React from 'react';
import GradientSection from "./GradientSection";
import { FaShip, FaShieldAlt, FaHandshake, FaLightbulb, FaArrowRight } from "react-icons/fa";
import { GiLighthouse, GiWorld } from "react-icons/gi";
import Image from "next/image";

interface Differentiator {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
}

export function MissionVisionSection() {
  return (
    <GradientSection className="py-6 px-6 sm:px-8 md:px-10 lg:px-8 xl:px-12" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-white border border-brand-lightgrey/30 p-3 sm:p-4 rounded-2xl transition-all duration-300 relative" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
              <span className="text-brand-darkblue/90">
                <FaShip size={32} />
              </span>
            </div>
            <div className="ml-12 sm:ml-16">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-darkblue mb-1">
                MISSION <span className="text-brand-teal">STATEMENT</span>
              </h2>
              <p className="text-base sm:text-base md:text-lg text-gray-700 leading-relaxed">To deliver innovative maritime solutions that provides superior value to clients with a focus on safety, efficiency and sustainability, within the Nigerian EEZ and throughout the Gulf of Guinea.</p>
            </div>
          </div>
          <div className="bg-white border border-brand-lightgrey/30 p-3 sm:p-4 rounded-2xl transition-all duration-300 relative" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
              <span className="text-brand-darkblue/90">
                <GiLighthouse size={32} />
              </span>
            </div>
            <div className="ml-12 sm:ml-16">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-darkblue mb-1">
                VISION <span className="text-brand-teal">STATEMENT</span>
              </h2>
              <p className="text-base sm:text-base md:text-lg text-gray-700 leading-relaxed">To be the preferred maritime solutions provider in the Gulf of Guinea, based on proven superior service delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </GradientSection>
  );
}

const differentiators = [
  {
    icon: <FaShieldAlt size={32} />,
    title: 'SAFETY',
    subtitle: 'AND COMPLIANCE',
    desc: 'Stringent adherence to international safety standards and regulatory requirements, ensuring operations are conducted with the highest level of safety and environmental responsibility.',
    img: '/differentiator-safety.png',
  },
  {
    icon: <GiWorld size={32} />,
    title: 'GULF',
    subtitle: 'REACH',
    desc: 'Strategic partnerships and operational capability to support maritime operations across the GoG HRA, facilitating seamless operations in diverse naval, maritime and political environments.',
    img: '/differentiator-gulf-reach.jpg',
  },
  {
    icon: <FaHandshake size={32} />,
    title: 'CUSTOMER',
    subtitle: 'CENTRIC',
    desc: 'Dedicated to understanding and meeting the unique needs of each client through personalized service solutions and responsive shoreside support.',
    img: '/differentiator-customer.png',
  },
  {
    icon: <FaLightbulb size={32} />,
    title: 'INNOVATION',
    subtitle: 'DRIVEN',
    desc: 'Continuous investment in technological advancements and modernization to enhance efficiency, reliability, and sustainability of services.',
    img: '/differentiator-innovation.jpg',
  },
];

export function KeyDifferentiatorsSection() {
  return (
    <div className="py-6 bg-white px-4 sm:px-6 md:px-8 lg:px-10" data-aos="fade-up">
      <div className="max-w-full mx-auto">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-darkblue mb-4">
            KEY <span className="text-brand-teal">DIFFERENTIATORS</span>
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {differentiators.map((item, idx) => (
            <DifferentiatorCard key={item.title} differentiator={item} delay={100 + idx * 100} className="w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}

function DifferentiatorCard({ differentiator, delay, className = "" }: { differentiator: Differentiator; delay: number; className?: string }) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden shadow-lg bg-white border border-brand-lightgrey/30 w-full min-w-0 min-h-[340px] flex flex-col justify-end cursor-pointer transition-all duration-300 hover:scale-105 group-hover:h-auto ${className}`}
      style={{ minWidth: 0 }}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Card Image */}
      <Image
        src={differentiator.img}
        alt={differentiator.title}
        fill
        className="object-cover w-full h-full rounded-2xl"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* Arrow Button (hide on hover) */}
      <div className="absolute bottom-4 right-4 z-20 transition-opacity duration-200 group-hover:opacity-0">
        <div className="w-10 h-10 rounded-full bg-brand-darkblue flex items-center justify-center shadow-lg">
          <FaArrowRight className="text-white text-xl" />
        </div>
      </div>
      {/* Hover Overlay with Text and Gradient */}
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-brand-darkblue/90 via-brand-darkblue/70 to-transparent flex flex-col items-center justify-center p-6">
        <div className="mb-2">{differentiator.icon}</div>
        <h3 className="text-2xl font-bold text-white mb-1 text-center drop-shadow-lg">{differentiator.title} <span className="block text-lg font-semibold text-brand-teal">{differentiator.subtitle}</span></h3>
        <p className="text-base text-white text-center drop-shadow-md font-medium px-1">
          {differentiator.desc}
        </p>
      </div>
    </div>
  );
} 