import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
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
  openGraph: {
    title: 'Naritai - 企業向けサービス',
    description: 'Naritaiの企業向けキャリア支援サービス',
    images: [
      {
        url: '/images/logo/seo01.png',
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
    images: ['/images/logo/seo01.png'],
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
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
    </html>
  );
}

