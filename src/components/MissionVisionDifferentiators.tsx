import GradientSection from "./GradientSection";
import { FaShip, FaShieldAlt, FaHandshake, FaLightbulb } from "react-icons/fa";
import { GiLighthouse, GiWorld } from "react-icons/gi";

export function MissionVisionSection() {
  return (
    <GradientSection className="py-6" data-aos="fade-up">
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
              <p className="text-lg text-gray-700 leading-relaxed">To deliver innovative maritime solutions that provides superior value to clients with a focus on safety, efficiency and sustainability, within the Nigerian EEZ and throughout the Gulf of Guinea.</p>
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
              <p className="text-lg text-gray-700 leading-relaxed">To be the preferred maritime solutions provider in the Gulf of Guinea, based on proven superior service delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </GradientSection>
  );
}

export function KeyDifferentiatorsSection() {
  return (
    <GradientSection className="py-6" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-brand-lightgrey/30 p-4 sm:p-6 rounded-2xl">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-darkblue mb-4">
            KEY <span className="text-brand-teal">DIFFERENTIATORS</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="100">
              <div className="flex-shrink-0">
                <span className="text-brand-darkblue/90">
                  <FaShieldAlt size={32} />
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-darkblue mb-1">
                  SAFETY <span className="text-brand-teal">AND COMPLIANCE</span>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">Stringent adherence to international safety standards and regulatory requirements, ensuring operations are conducted with the highest level of safety and environmental responsibility.</p>
              </div>
            </div>
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
              <div className="flex-shrink-0">
                <span className="text-brand-darkblue/90">
                  <GiWorld size={32} />
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-darkblue mb-1">
                  GULF <span className="text-brand-teal">REACH</span>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">Strategic partnerships and operational capability to support maritime operations across the GoG HRA, facilitating seamless operations in diverse naval, maritime and political environments.</p>
              </div>
            </div>
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
              <div className="flex-shrink-0">
                <span className="text-brand-darkblue/90">
                  <FaHandshake size={32} />
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-darkblue mb-1">
                  CUSTOMER <span className="text-brand-teal">CENTRIC</span>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">Dedicated to understanding and meeting the unique needs of each client through personalized service solutions and responsive shoreside support.</p>
              </div>
            </div>
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
              <div className="flex-shrink-0">
                <span className="text-brand-darkblue/90">
                  <FaLightbulb size={32} />
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-brand-darkblue mb-1">
                  INNOVATION <span className="text-brand-teal">DRIVEN</span>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">Continuous investment in technological advancements and modernization to enhance efficiency, reliability, and sustainability of services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GradientSection>
  );
} 