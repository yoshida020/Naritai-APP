import HeroSection from '@/components/corporate/sections/HeroSection';
import ProblemsSection from '@/components/corporate/sections/ProblemsSection';
import ServicesSection from '@/components/corporate/sections/ServicesSection';
import CoachingSection from '@/components/corporate/sections/CoachingSection';
import CorporateSection from '@/components/corporate/sections/CorporateSection';
import StrongPointsSection from '@/components/corporate/sections/StrongPointsSection';
import FlowSection from '@/components/corporate/sections/FlowSection';
import PricingSection from '@/components/corporate/sections/PricingSection';
import ContactSection from '@/components/corporate/sections/ContactSection';
import DarkThemeObserver from '@/components/corporate/DarkThemeObserver';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <DarkThemeObserver />
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <CoachingSection />
      <CorporateSection />
      <StrongPointsSection />
      <PricingSection />
      <FlowSection />
      <ContactSection />
    </div>
  );
}



