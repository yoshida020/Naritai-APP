import HeroSection from '@/components/sections/HeroSection';
import ProblemsSection from '@/components/sections/ProblemsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import InstructorsSection from '@/components/sections/InstructorsSection';
import CorporateSection from '@/components/sections/CorporateSection';
import StrongPointsSection from '@/components/sections/StrongPointsSection';
import FlowSection from '@/components/sections/FlowSection';
import PricingSection from '@/components/sections/PricingSection';
import ContactSection from '@/components/sections/ContactSection';
import NaritaiSection from '@/components/sections/NaritaiSection';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <HeroSection />

      <ProblemsSection />
      <ServicesSection />
      <InstructorsSection />
      <CorporateSection />
      <StrongPointsSection />
      <FlowSection />
      <PricingSection />
      <ContactSection />
      <NaritaiSection />
    </div>
  );
}



