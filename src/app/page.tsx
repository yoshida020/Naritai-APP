import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import TopSection from '@/components/home/sections/TopSection';
import AboutUsSection from '@/components/home/sections/AboutUs';
import MessageSection from '@/components/home/sections/MessageSection';
import BusinessSection from '@/components/home/sections/BusinessSection';
import NewsSection from '@/components/home/sections/NewsSection';
import FaqSection from '@/components/home/sections/FaqSection';
import CompanySection from '@/components/home/sections/CompanySection';
import ContactSection from '@/components/home/sections/ContactSection';
import FormSuccessToast from '@/components/common/FormSuccessToast';

export default function HomePage() {
  return (
    <>
      <Header />
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
      <Footer />
      <FormSuccessToast />
    </>
  );
}
