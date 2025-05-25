import HeroSection from "../components/HeroSection";
import ComplianceSlider from "../components/ComplianceSlider";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ComplianceSection from "../components/ComplianceSection";
import ClientsSlider from "../components/ClientsSlider";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import { MissionVisionSection, KeyDifferentiatorsSection } from "../components/MissionVisionDifferentiators";
import SectionDivider from "../components/SectionDivider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ComplianceSlider />
      <MissionVisionSection />
      <KeyDifferentiatorsSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ServicesSection />
      <ComplianceSection />
      <SectionDivider />
      <ClientsSlider />
      <SectionDivider />
      <ContactSection />
      <MapSection />
    </>
  );
}
