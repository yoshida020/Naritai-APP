import { Header, Footer, homeNavigationConfig } from '@/components/common/navigation';
import TopSection from '@/components/home/sections/TopSection';
import AboutUsSection from '@/components/home/sections/AboutUs';
import MessageSection from '@/components/home/sections/MessageSection';
import BusinessSection from '@/components/home/sections/BusinessSection';
import NewsSection from '@/components/home/sections/NewsSection';
import FaqSection from '@/components/home/sections/FaqSection';
import CompanySection from '@/components/home/sections/CompanySection';
import ContactSection from '@/components/home/sections/ContactSection';
import FormSuccessToast from '@/components/common/FormSuccessToast';
import MobileStickyButton from '@/components/common/MobileStickyButton';

export default function HomePage() {
  return (
    <>
      <Header config={homeNavigationConfig} />
      <main>
        <TopSection />
        <AboutUsSection />
        <MessageSection />
        <BusinessSection />
        <NewsSection />
        <FaqSection />
        <CompanySection />
        <ContactSection />
      </main>
      <Footer config={homeNavigationConfig} />
      <FormSuccessToast />
      <MobileStickyButton />
    </>
  );
}
