import GradientSection from "./GradientSection";
import { FaShip, FaAnchor, FaShieldAlt, FaShoppingCart } from "react-icons/fa";

const services = [
  {
    title: "INSHORE",
    subtitle: "SUPPORT VESSELS",
    icon: FaShip,
    desc: "We provide all types of light marine vessels to support maritime operations within the coastal waters. Our inshore marine crafts support crew transfers, secure personnel accommodations, light cargo transfers and medical evacuation in the swamps. From Dumb barges, House Boats, Surfer boats, Ambulance boats, Push Tugs, etc.",
  },
  {
    title: "OFFSHORE",
    subtitle: "SUPPORT VESSELS",
    icon: FaAnchor,
    desc: "We provide all classes of seagoing marine vessels to support maritime operations offshore. These vessels support Drilling rigs and Production platforms, FSOs, and other types of static and dynamic Oil & Gas assets beyond the coast. From PSVs and AHTs with DP capabilities to Jack Up barges, Crane and Pipelay barges, Dive Support Vessels for Saturation & Air Diving and Shuttle tankers.",
  },
  {
    title: "SECURITY",
    subtitle: "SERVICES",
    icon: FaShieldAlt,
    desc: "We provide Threat and Vulnerability assessments, Licenced Armed Guards embarkation, Security vessel escort & surveillance, Security threat deterrence etc., and many more bespoke services that match our clients' specific needs. We utilize innovative technologies and modern fleet to ensure that our clients are truly protected. Our highly trained ex Nigerian Navy personnel supports the deployed naval crew from the shore side, ensuring comprehensive protection against maritime threats including piracy, banditry, unauthorized access, and sabotage.",
  },
  {
    title: "PROCUREMENT",
    subtitle: "SERVICES",
    icon: FaShoppingCart,
    desc: "Whether it's first aid kit refills, safety gear, navigational instruments, spare parts, or any other maritime essentials we can procure (that's if it's not currently in our stores), transport and deliver it anywhere within the Gulf of Guinea.",
  },
];

export default function ServicesSection() {
  return (
    <GradientSection className="py-6" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-brand-lightgrey/30 p-4 sm:p-6 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-brand-darkblue">
              OUR <span className="text-brand-teal">SERVICES</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, idx) => (
              <div key={service.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors" data-aos="fade-up" data-aos-delay={100 + idx * 100}>
                <div className="flex-shrink-0 mt-1">
                  <span className="text-brand-darkblue/90">
                    <service.icon size={32} />
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-brand-darkblue mb-1">
                    {service.title} <span className="text-brand-teal">{service.subtitle}</span>
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GradientSection>
  );
} 