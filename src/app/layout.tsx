import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Naritai株式会社',
  description: 'Naritai株式会社の公式サイト',
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
        {children}
      </body>
    </html>
  );
}

