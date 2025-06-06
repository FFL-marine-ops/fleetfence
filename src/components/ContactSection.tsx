"use client";

import { useState } from "react";
import GradientSection from "./GradientSection";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <GradientSection className="pt-6 pb-20" data-aos="fade-up">
      <div className="w-full max-w-none mx-0 px-6 sm:px-8 md:px-10 lg:px-8 xl:px-12">
        <div className="mb-8">
          <div className="bg-white border border-brand-lightgrey/30 shadow px-8 py-4 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-darkblue text-center m-0">
              CONTACT US
            </h2>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white/10 backdrop-blur-sm p-6 rounded shadow">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="px-3 sm:px-4 py-2 sm:py-3 rounded border text-base sm:text-base md:text-lg"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="px-3 sm:px-4 py-2 sm:py-3 rounded border text-base sm:text-base md:text-lg"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  className="px-3 sm:px-4 py-2 sm:py-3 rounded border min-h-[100px] text-base sm:text-base md:text-lg"
                />
                {submitStatus.type && (
                  <div className={`p-3 rounded ${
                    submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`bg-brand-darkblue text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold transition text-base sm:text-base md:text-lg ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-blueshade'
                  }`}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
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