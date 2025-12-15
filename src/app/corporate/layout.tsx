import type { Metadata } from 'next';
import { Header, Footer, corporateNavigationConfig } from '@/components/common/navigation';

export const metadata: Metadata = {
  title: 'Naritai株式会社 - 企業向けサービス',
  description: 'Naritai株式会社の企業向けキャリア支援サービス',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo/favicon.png',
  },
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header config={corporateNavigationConfig} />
      {children}
      <Footer config={corporateNavigationConfig} />
    </>
  );
}
