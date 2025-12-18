import HeroSection from '@/components/corporate/sections/HeroSection';
import ProblemsSection from '@/components/corporate/sections/ProblemsSection';
import ServicesSection from '@/components/corporate/sections/ServicesSection';
import BusinessSection from '@/components/corporate/sections/BusinessSection';
import CorporateSection from '@/components/corporate/sections/CorporateSection';
import StrongPointsSection from '@/components/corporate/sections/StrongPointsSection';
import FlowSection from '@/components/corporate/sections/FlowSection';
import PricingSection from '@/components/corporate/sections/PricingSection';
import ContactSection from '@/components/corporate/sections/ContactSection';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <BusinessSection />
      <CorporateSection />
      <StrongPointsSection />
      <PricingSection />
      <FlowSection />
      <ContactSection />
    </div>
  );
}



