import type { Metadata } from 'next';
import { Header, Footer, corporateNavigationConfig } from '@/components/common/navigation';

export const metadata: Metadata = {
  title: 'Naritai - 企業向けサービス',
  description: 'Naritaiの企業向けキャリア支援サービス',
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
