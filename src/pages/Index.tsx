import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import WebsitesSection from "@/components/WebsitesSection";
import SocialDesignsSection from "@/components/SocialDesignsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen noise-overlay relative">
    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WebsitesSection />
      <SocialDesignsSection />
      <SkillsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
