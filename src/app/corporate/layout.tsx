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
  openGraph: {
    title: 'Naritai - 企業向けサービス',
    description: 'Naritaiの企業向けキャリア支援サービス',
    images: [
      {
        url: '/images/logo/seo02.png',
        width: 1200,
        height: 630,
        alt: 'Naritai - 企業向けサービス',
      },
    ],
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naritai - 企業向けサービス',
    description: 'Naritaiの企業向けキャリア支援サービス',
    images: ['/images/logo/seo02.png'],
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
