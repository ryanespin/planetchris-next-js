import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import HeroSection from './HeroSection';
import OurCommitmentSection from './OurCommitmentSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurCommitmentSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
