import type { Metadata } from 'next';
import './globals.css';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';

const CursorHoverEffect = dynamic(() => import('@/components/CursorHoverEffect'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Naritai株式会社 - お問い合わせ',
  description: 'Naritai株式会社へのお問い合わせページ',
  icons: {
    icon: '/ファビコン.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <CursorHoverEffect />
        {children}
      </body>
    </html>
  );
}

