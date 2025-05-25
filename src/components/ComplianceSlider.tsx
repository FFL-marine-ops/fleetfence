import React from "react";
import Image from "next/image";

export default function ComplianceSlider() {
  const compliance = [
    { name: "NIMASA", logo: "complianceAgency/NIMASA.jpg" },
    { name: "NUPRC", logo: "complianceAgency/NUPRC.jpeg" },
    { name: "NSITF", logo: "complianceAgency/nsitf.png" },
    { name: "ITF", logo: "complianceAgency/ITF.jpeg" },
    { name: "FIRS", logo: "complianceAgency/Firs.jpeg" },
    { name: "Civil Defence", logo: "complianceAgency/civilDefence.png" },
    { name: "Dun & Bradstreet", logo: "complianceAgency/dunsBrad.jpg" },
    { name: "Nigerian Navy", logo: "complianceAgency/NNavy.webp" },
    { name: "NipeX", logo: "complianceAgency/nipex.png" },
    { name: "NMDPRA", logo: "complianceAgency/Nmdpra.jpeg" },
    { name: "MSP", logo: "complianceAgency/MSP.jpeg" },
    { name: "ICOCA", logo: "complianceAgency/icoca.png" },
    { name: "Shipowners", logo: "complianceAgency/shipowners.jpeg" },
    { name: "ISO", logo: "complianceAgency/iso.png" },
    { name: "BIMCO", logo: "complianceAgency/bimco.jpeg" },
    { name: "NCDMB", logo: "complianceAgency/ncdmb.jpeg" },
    { name: "IMCA", logo: "complianceAgency/imca.jpg" },
  ];

  // Double the compliance array for a seamless loop
  const loopedCompliance = [...compliance, ...compliance];

  return (
    <div className="relative mt-24" data-aos="fade-up">
      <div className="w-full overflow-hidden bg-white/50 backdrop-blur-sm py-12">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
        {/* Sliding Track */}
        <div className="compliance-slider-track">
          {loopedCompliance.map((item, index) => (
            <div 
              key={`${item.name}-${index}`} 
              className="flex-none mx-8 sm:mx-12 w-24 sm:w-28 md:w-32 lg:w-36 h-16 sm:h-20 md:h-24 lg:h-28 relative"
            >
              <Image
                src={`/${item.logo}`}
                alt={`${item.name} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 6rem, (max-width: 768px) 7rem, (max-width: 1024px) 8rem, 9rem"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 