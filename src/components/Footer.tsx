import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-darkblue text-brand-lightgrey pt-12 pb-4 px-4 mt-16 relative z-10" data-aos="fade-up">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Left: Logo, tagline, social icons */}
          <div className="flex-1 min-w-[220px] flex flex-col gap-4" data-aos="fade-up" data-aos-delay="100">
            <span className="font-bold text-xl sm:text-2xl md:text-3xl text-white">FleetFence</span>
            <span className="text-sm sm:text-base md:text-lg text-brand-lightgrey/80 max-w-xs">Delivering innovative, safe, and efficient support to the Oil & Gas and Shipping industries in the Gulf of Guinea.</span>
            <div className="flex gap-2 sm:gap-3 text-xl sm:text-2xl mt-2">
              <a href="https://wa.me/2347058268955" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white hover:text-brand-teal transition"><FaWhatsapp /></a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-white hover:text-brand-teal transition"><FaXTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-brand-teal transition"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/FleetFence-Limited" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-brand-teal transition"><FaLinkedin /></a>
            </div>
          </div>
          {/* Center: Services and Company */}
          <div className="flex-1 flex flex-row justify-center gap-12 min-w-[320px]" data-aos="fade-up" data-aos-delay="200">
            <div>
              <span className="font-bold text-base sm:text-lg md:text-xl text-brand-lightgrey tracking-wider">SERVICES</span>
              <ul className="mt-2 flex flex-col gap-1 text-brand-lightgrey/90">
                <li><a href="#" className="hover:underline">Inshore Support Vessels</a></li>
                <li><a href="#" className="hover:underline">Offshore Support Vessels</a></li>
                <li><a href="#" className="hover:underline">Security Services</a></li>
                <li><a href="#" className="hover:underline">Procurement</a></li>
              </ul>
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg md:text-xl text-brand-lightgrey tracking-wider">COMPANY</span>
              <ul className="mt-2 flex flex-col gap-1 text-brand-lightgrey/90">
                <li><a href="#about" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Our Team</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          {/* Right: Newsletter */}
          <div className="flex-1 min-w-[220px] flex flex-col gap-2 items-start md:items-end" data-aos="fade-up" data-aos-delay="300">
            <span className="font-bold text-base sm:text-lg md:text-xl text-brand-lightgrey tracking-wider">SUBSCRIBE TO OUR NEWSLETTER</span>
            <span className="text-xs sm:text-sm md:text-base text-brand-lightgrey/80 mb-2 md:text-right">Get the latest updates on maritime trends and company news.</span>
            <form className="flex gap-2 w-full max-w-xs md:justify-end">
              <input type="email" placeholder="Enter your email" className="px-2 sm:px-3 py-2 rounded text-brand-darkblue w-full text-sm sm:text-base" />
              <button className="bg-brand-lightgrey text-brand-darkblue px-3 sm:px-4 py-2 rounded font-semibold text-sm sm:text-base">Subscribe</button>
            </form>
          </div>
        </div>
        <hr className="border-brand-lightgrey/30 my-4" />
        <div className="text-xs sm:text-sm md:text-base text-brand-lightgrey/70 text-center">© {new Date().getFullYear()} FleetFence Limited. All rights reserved.</div>
      </div>
    </footer>
  );
} 