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
  description: '正解がない時代。 誰かと比べて焦り、. 将来に不安を感じてもがいている人がいる。 Naritaiは、一人ひとりに“なりたい自分”を見つけて. 自分の道を歩いてほしい。',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo/favicon.png',
  },
  openGraph: {
    title: 'Naritai',
    description: '「戦い方」(スキル)を教える前に、「戦う意味」を共有できていますか？育成方法も進化する時代',
    images: [
      {
        url: '/images/logo/seo01.png',
        width: 1200,
        height: 630,
        alt: 'Naritai',
      },
    ],
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naritai',
    description: '正解がない時代。 誰かと比べて焦り、. 将来に不安を感じてもがいている人がいる。 Naritaiは、一人ひとりに“なりたい自分”を見つけて. 自分の道を歩いてほしい。',
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

