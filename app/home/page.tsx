import AboutSection from './AboutSection'
import HeroSection from './HeroSection'
import OurCommitmentSection from './OurCommitmentSection'
import ServicesSection from './ServicesSection'
import TestimonialsSection from './TestimonialsSection'
import VillageBanner from './VillageBanner'

export default function Home() {
  return (
    <>
      <VillageBanner />
      <HeroSection />
      <OurCommitmentSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  )
}
