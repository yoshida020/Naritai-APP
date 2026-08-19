import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Naritai Career｜人材投資の回収率を見える化し、1on1メソッドで引き上げる',
  description:
    '採用・育成した人材の“投資回収率”を見える化し、独自の1on1メソッドで引き上げます。離職コスト・採用コスト・回収率を可視化する、人事・経営のための若手定着支援。初期費用0円。',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Naritai Career｜人材投資の回収率を見える化し、1on1メソッドで引き上げる',
    description:
      '採用・育成した人材の投資回収率を見える化し、独自の1on1メソッドで引き上げる。人事・経営のための若手定着支援。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naritai Career｜人材投資の回収率を見える化する',
    description: '採用・育成した人材の投資回収率を見える化し、1on1メソッドで引き上げる。',
  },
};

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
