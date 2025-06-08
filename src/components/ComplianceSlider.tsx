import React, { memo } from "react";
import Image from "next/image";

  const compliance = [
    { name: "NIMASA", logo: "complianceAgency/NIMASA.webp" },
    { name: "NUPRC", logo: "complianceAgency/NUPRC.webp" },
    { name: "NSITF", logo: "complianceAgency/nsitf.webp" },
    { name: "ITF", logo: "complianceAgency/ITF.webp" },
    { name: "FIRS", logo: "complianceAgency/Firs.webp" },
    { name: "Civil Defence", logo: "complianceAgency/civilDefence.webp" },
    { name: "Dun & Bradstreet", logo: "complianceAgency/dunsBrad.webp" },
    { name: "Nigerian Navy", logo: "complianceAgency/NNavy.webp" },
    { name: "NipeX", logo: "complianceAgency/nipex.webp" },
    { name: "NMDPRA", logo: "complianceAgency/Nmdpra.webp" },
    { name: "MSP", logo: "complianceAgency/MSP.webp" },
    { name: "ICOCA", logo: "complianceAgency/icoca.webp" },
    { name: "Shipowners", logo: "complianceAgency/shipowners.webp" },
    { name: "ISO", logo: "complianceAgency/iso.webp" },
    { name: "BIMCO", logo: "complianceAgency/bimco.webp" },
    { name: "NCDMB", logo: "complianceAgency/ncdmb.webp" },
    { name: "IMCA", logo: "complianceAgency/imca.webp" },
  ];

const ComplianceLogo = memo(({ name, logo }: { name: string; logo: string }) => (
  <div className="flex-shrink-0 px-4">
    <Image
      src={`/${logo}`}
      alt={name}
      width={120}
      height={60}
      className="h-12 w-auto object-contain"
      loading="lazy"
      sizes="(max-width: 640px) 6rem, (max-width: 768px) 7rem, (max-width: 1024px) 8rem, 9rem"
    />
  </div>
));

ComplianceLogo.displayName = 'ComplianceLogo';

export default function ComplianceSlider() {
  const loopedCompliance = [...compliance, ...compliance];

  return (
    <div className="relative mt-8 px-6 sm:px-8 md:px-10 lg:px-8 xl:px-12" data-aos="fade-up">
      <div className="w-full overflow-hidden bg-white/50 backdrop-blur-sm py-12">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
        {/* Sliding Track */}
        <div className="compliance-slider-track">
          {loopedCompliance.map((item, index) => (
            <ComplianceLogo
              key={`${item.name}-${index}`} 
              name={item.name}
              logo={item.logo}
              />
          ))}
        </div>
      </div>
    </div>
  );
} 