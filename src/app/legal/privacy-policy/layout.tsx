import type { Metadata } from 'next';
import { Header, homeNavigationConfig } from '@/components/common/navigation';

export const metadata: Metadata = {
  title: 'Naritai - プライバシーポリシー',
  description: 'Naritaiのプライバシーポリシー',
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
      <Header config={homeNavigationConfig} />
      {children}
    </>
  );
}
