import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Naritai - 資料請求',
  description: 'Naritaiの資料請求ページ',
  icons: {
    icon: '/20251113-1222_f62354075cc7b78cbe63d9d572b3e147.png',
  },
};

export default function BlankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
