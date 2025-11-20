import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/corporate/Header';

const CursorHoverEffect = dynamic(() => import('@/components/corporate/CursorHoverEffect'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Naritai株式会社 - お問い合わせ',
  description: 'Naritai株式会社へのお問い合わせページ',
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
      <Header />
      <CursorHoverEffect />
      {children}
    </>
  );
}
