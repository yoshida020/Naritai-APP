import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import './globals.css';

const CursorHoverEffect = dynamic(() => import('@/components/common/CursorHoverEffect'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Naritai',
  description: 'Naritaiの公式サイト',
  icons: {
    icon: '/20251113-1222_f62354075cc7b78cbe63d9d572b3e147.png',
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
          href="/hp/fonts/花鳥風月.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <CursorHoverEffect />
        {children}
      </body>
    </html>
  );
}

