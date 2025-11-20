import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Naritai株式会社',
  description: 'Naritai株式会社の公式サイト',
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
      <body>
        {children}
      </body>
    </html>
  );
}

