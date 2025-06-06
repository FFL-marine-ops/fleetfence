import Image from "next/image";

const complianceLogos = [
  { src: "/complianceAgency/NIMASA.jpg", alt: "NIMASA" },
  { src: "/complianceAgency/NUPRC.jpeg", alt: "NUPRC" },
  { src: "/complianceAgency/nsitf.png", alt: "NSITF" },
  { src: "/complianceAgency/ITF.jpeg", alt: "ITF" },
  { src: "/complianceAgency/Firs.jpeg", alt: "FIRS" },
  { src: "/complianceAgency/civilDefence.png", alt: "Civil Defence" },
  { src: "/complianceAgency/dunsBrad.jpg", alt: "Dun & Bradstreet" },
  { src: "/complianceAgency/NNavy.webp", alt: "Nigerian Navy" },
  { src: "/complianceAgency/nipex.png", alt: "NipeX" },
  { src: "/complianceAgency/Nmdpra.jpeg", alt: "NMDPRA" },
  { src: "/complianceAgency/MSP.jpeg", alt: "MSP" },
  { src: "/complianceAgency/icoca.png", alt: "ICOCA" },
  { src: "/complianceAgency/shipowners.jpeg", alt: "Shipowners" },
  { src: "/complianceAgency/iso.png", alt: "ISO" },
  { src: "/complianceAgency/bimco.jpeg", alt: "BIMCO" },
  { src: "/complianceAgency/ncdmb.jpeg", alt: "NCDMB" },
  { src: "/complianceAgency/imca.jpg", alt: "IMCA" },
];

export default function ComplianceSection() {
  return (
    <section className="w-full bg-white py-12 px-6 sm:px-8 md:px-10 lg:px-8 xl:px-12" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Text Section */}
        <div className="flex-1 mb-6 md:mb-0 md:mr-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-darkblue mb-4">COMPLIANCE</h2>
          <p className="text-base sm:text-base md:text-lg text-gray-700 mb-4">
            We are currently registered with the NIMASA and NUPRC among others to provide maritime solutions within the Nigerian EEZ. Our strategic collaboration with key players throughout the Gulf of Guinea ensures that we can also operate in this region.
          </p>
          <p className="text-base sm:text-base md:text-lg text-gray-700 mb-4">
            We ensure that all our security personnel, both shoreside and currently servicing Nigerian Navy crew deployed onboard, operate professionally and efficiently in line with the requirements of ISO 18788:2015 Security Operations Management to mitigate any risks.
          </p>
          <p className="text-base sm:text-base md:text-lg text-gray-700">
            We operate in line with the standards prescribed by the International Maritime Organization (IMO), Flag State Law of Nigeria, International Code for the Security of Ships and of Port Facilities (ISPS) and all applicable licensing laws that set the standard for the safety and security in the maritime industry.
          </p>
        </div>
        {/* Logos Grid with Gradient Card */}
        <div className="flex-1 w-full">
          <div className="rounded-2xl shadow-lg p-1 bg-gradient-to-r from-brand-darkblue to-brand-teal">
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center items-center">
                {complianceLogos.map((logo, i) => (
                  <div key={i} className="bg-white rounded-lg shadow flex items-center justify-center h-24 md:h-28 p-2">
                    <Image src={logo.src} alt={logo.alt} width={80} height={80} className="object-contain max-h-16" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 