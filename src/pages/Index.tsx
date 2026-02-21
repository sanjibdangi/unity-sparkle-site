import { Header } from '@/components/gsrs/Header';
import { HeroSection } from '@/components/gsrs/HeroSection';
import { AboutSection } from '@/components/gsrs/AboutSection';
import { StatsCounter } from '@/components/gsrs/StatsCounter';
import { ServicesSection } from '@/components/gsrs/ServicesSection';
import { DifferentiatorsSection } from '@/components/gsrs/DifferentiatorsSection';
import { PerformanceSection } from '@/components/gsrs/PerformanceSection';
import { CorporateSection } from '@/components/gsrs/CorporateSection';
import { ContactSection } from '@/components/gsrs/ContactSection';
import { Footer } from '@/components/gsrs/Footer';
import { FloatingCTA } from '@/components/gsrs/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsCounter />
      <ServicesSection />
      <DifferentiatorsSection />
      <PerformanceSection />
      <CorporateSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
