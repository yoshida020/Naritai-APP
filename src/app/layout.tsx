import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const CursorHoverEffect = dynamic(() => import('@/components/common/CursorHoverEffect'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: {
    template: 'Naritai',
    default: 'Naritai',
  },
  description: 'Naritaiの公式サイト',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="preload"
          href="/fonts/花鳥風月.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <CursorHoverEffect />
        {children}
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}

