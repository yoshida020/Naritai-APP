import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Naritai - お問い合わせ',
  description: 'Naritaiへのお問い合わせページ',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo/favicon.png',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
