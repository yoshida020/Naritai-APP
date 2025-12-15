import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Naritai - 資料請求',
  description: 'Naritaiの資料請求ページ',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo/favicon.png',
  },
};

export default function BlankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
