import Image from "next/image";

const clients = [
  { src: "/Clients/seaGuardian.webp", alt: "Sea Guardian" },
  { src: "/Clients/generalHydrocarbons.webp", alt: "General Hydrocarbons Ltd" },
  { src: "/Clients/tcoMarine.webp", alt: "TCO Marine Limited" },
  { src: "/Clients/brightWater.webp", alt: "Brightwater Energy Solutions" },
  { src: "/Clients/HabinLimited.webp", alt: "Habin Limited" },
  { src: "/Clients/maersk.webp", alt: "Maersk Line" },
  { src: "/Clients/mariLog.webp", alt: "MariLog Limited" },
  { src: "/Clients/DDgrand.webp", alt: "D Grand" },
  { src: "/Clients/Bricks.webp", alt: "Bricks NG" },
  { src: "/Clients/oceanSafe.webp", alt: "Ocean Safe" },
  { src: "/Clients/temileAndsons.webp", alt: "Temile & Sons" },
];

export default function ClientsSlider() {
  return (
    <section className="w-full bg-white py-12 px-6 sm:px-8 md:px-10 lg:px-8 xl:px-12" data-aos="fade-up">
      <div className="max-w-5xl mx-auto mb-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-darkblue mb-2 md:mb-4">
          CLIENTS & PARTNERSHIPS
        </h2>
        <p className="text-base sm:text-base md:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          FleetFence Limited serves a diverse clientele including offshore oil and gas operators, renewable energy companies, government agencies, and maritime security firms. We prioritize building long-term partnerships based on mutual trust, reliability, and shared commitment to excellence.
        </p>
      </div>
      <div className="max-w-5xl mx-auto rounded-2xl shadow-lg p-1 bg-gradient-to-r from-brand-darkblue to-brand-teal">
        <div className="p-6 md:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {clients.map((client, i) => (
              <div key={i} className="bg-white rounded-lg shadow flex items-center justify-center h-24 md:h-28 p-2" data-aos="fade-up" data-aos-delay={100 + i * 50}>
                <Image src={client.src} alt={client.alt} width={120} height={60} className="object-contain max-h-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 