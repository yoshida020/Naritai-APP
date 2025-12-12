import type { Metadata } from 'next';
import { Header, Footer, corporateNavigationConfig } from '@/components/common/navigation';

export const metadata: Metadata = {
  title: 'Naritai - お問い合わせ',
  description: 'Naritaiへのお問い合わせページ',
  icons: {
    icon: '/20251113-1222_f62354075cc7b78cbe63d9d572b3e147.png',
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
