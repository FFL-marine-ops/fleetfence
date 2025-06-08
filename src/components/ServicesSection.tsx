import GradientSection from "./GradientSection";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

interface Service {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
}

const services = [
  {
    title: "INSHORE",
    subtitle: "SUPPORT VESSELS",
    desc: "We provide all types of light marine vessels to support maritime operations within the coastal waters. Our inshore marine crafts support crew transfers, secure personnel accommodations, light cargo transfers and medical evacuation in the swamps. From Dumb barges, House Boats, Surfer boats, Ambulance boats, Push Tugs, etc.",
    img: "/inshore-support-vessel.webp",
  },
  {
    title: "OFFSHORE",
    subtitle: "SUPPORT VESSELS",
    desc: "We provide all classes of seagoing marine vessels to support maritime operations offshore. These vessels support Drilling rigs and Production platforms, FSOs, and other types of static and dynamic Oil & Gas assets beyond the coast. From PSVs and AHTs with DP capabilities to Jack Up barges, Crane and Pipelay barges, Dive Support Vessels for Saturation & Air Diving and Shuttle tankers.",
    img: "/offshore-support-vessel.webp",
  },
  {
    title: "SECURITY",
    subtitle: "SERVICES",
    desc: "We provide Threat and Vulnerability assessments, Licenced Armed Guards embarkation, Security vessel escort & surveillance, Security threat deterrence etc., and many more bespoke services that match our clients' specific needs. We utilize innovative technologies and modern fleet to ensure that our clients are truly protected. Our highly trained ex Nigerian Navy personnel supports the deployed naval crew from the shore side, ensuring comprehensive protection against maritime threats including piracy, banditry, unauthorized access, and sabotage.",
    img: "/security-escort.webp",
  },
  {
    title: "PROCUREMENT",
    subtitle: "SERVICES",
    desc: "Whether it's first aid kit refills, safety gear, navigational instruments, spare parts, or any other maritime essentials we can procure (that's if it's not currently in our stores), transport and deliver it anywhere within the Gulf of Guinea.",
    img: "/procurement.webp",
  },
];

export default function ServicesSection() {
  return (
    <GradientSection className="py-6" data-aos="fade-up">
      <div className="max-w-full lg:max-w-full mx-auto px-6 sm:px-8 md:px-10 lg:px-8 xl:px-12">
          <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-blue">
              OUR <span className="text-white">SERVICES</span>
            </h2>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, idx) => (
            <ServiceCard key={service.title} service={service} delay={100 + idx * 100} className="w-full max-w-none" />
            ))}
        </div>
      </div>
    </GradientSection>
  );
}

function ServiceCard({ service, delay, className = "" }: { service: Service; delay: number; className?: string }) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden shadow-lg bg-white border border-brand-lightgrey/30 w-full min-h-[340px] flex flex-col justify-end cursor-pointer transition-all duration-300 hover:scale-105 group-hover:h-auto ${className}`}
      style={{ minWidth: 0 }}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Card Image */}
      <Image
        src={service.img}
        alt={service.title}
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
        <h3 className="text-2xl font-bold text-white mb-2 text-center drop-shadow-lg">{service.title} <span className="block text-lg font-semibold text-brand-teal">{service.subtitle}</span></h3>
        <p className="text-base text-white text-center drop-shadow-md font-medium px-1">
          {service.desc}
        </p>
      </div>
    </div>
  );
} 