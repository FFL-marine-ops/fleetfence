import GradientSection from "./GradientSection";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <GradientSection className="pt-6 pb-20" data-aos="fade-up">
      <div className="w-full max-w-none mx-0">
        <div className="mb-8">
          <div className="bg-white border border-brand-lightgrey/30 shadow px-8 py-4 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center m-0">
              <span className="text-brand-darkblue">CONTACT </span>
              <span className="text-brand-teal">US</span>
            </h2>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
              <form className="flex flex-col gap-4 bg-white/10 backdrop-blur-sm p-6 rounded shadow">
                <input type="text" placeholder="Name" className="px-3 sm:px-4 py-2 sm:py-3 rounded border text-base sm:text-base md:text-lg" />
                <input type="email" placeholder="Email" className="px-3 sm:px-4 py-2 sm:py-3 rounded border text-base sm:text-base md:text-lg" />
                <textarea placeholder="Message" className="px-3 sm:px-4 py-2 sm:py-3 rounded border min-h-[100px] text-base sm:text-base md:text-lg" />
                <button type="submit" className="bg-brand-darkblue text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold hover:bg-brand-blueshade transition text-base sm:text-base md:text-lg">Send Message</button>
              </form>
            </div>
            <div className="flex flex-col gap-6 justify-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white border border-brand-lightgrey/30 p-6 rounded-2xl shadow flex flex-col gap-4">
                <div className="flex justify-center gap-4 sm:gap-6 mb-2 text-xl sm:text-2xl">
                  <a href="https://wa.me/2347058268955" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-brand-darkblue hover:text-brand-teal transition"><FaWhatsapp /></a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-brand-darkblue hover:text-brand-teal transition"><FaXTwitter /></a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-darkblue hover:text-brand-teal transition"><FaInstagram /></a>
                  <a href="https://www.linkedin.com/company/FleetFence-Limited" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-brand-darkblue hover:text-brand-teal transition"><FaLinkedin /></a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-darkblue mt-1"><FaEnvelope size={24} /></span>
                  <div>
                    <span className="font-bold text-brand-darkblue text-sm sm:text-base">Email:</span>
                    <div>
                      <a href="mailto:FleetFence@FleetFence.com" className="text-gray-700 text-base sm:text-base md:text-lg">FleetFence@FleetFence.com</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-darkblue mt-1"><FaPhoneAlt size={24} /></span>
                  <div>
                    <span className="font-bold text-brand-darkblue text-sm sm:text-base">Phone:</span>
                    <div>
                      <a href="tel:+2347058268955" className="text-gray-700 text-base sm:text-base md:text-lg">+234 705 826 8955</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-darkblue mt-1"><FaMapMarkerAlt size={24} /></span>
                  <div>
                    <span className="font-bold text-brand-darkblue text-sm sm:text-base">Address:</span>
                    <div className="text-gray-700 text-base sm:text-base md:text-lg">
                      B/N E13 Phase 2, RIVTAF Golf Estate Trans Amadi Industrial Estate, 500221 Port Harcourt, Rivers state.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GradientSection>
  );
} 