import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'サーベイは全く意味がない｜若手の離職・定着を"見える化"する Naritai',
  },
  description:
    '「サーベイを入れても現場は変わらない」。採用・育成した若手の離職コストと投資回収率を"見える化"し、独自の1on1メソッドで定着を引き上げる。サーベイ・若手の離職・定着に悩む人事・経営のためのNaritai。',
  keywords: [
    'サーベイ',
    '離職',
    '若手',
    '定着',
    '早期離職',
    '若手 離職',
    '人材定着',
    '回収率',
    '1on1',
    '人事',
    'エンゲージメント',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'サーベイは全く意味がない｜若手の離職・定着を"見える化"する Naritai',
    description:
      'サーベイを入れても現場は変わらない。若手の離職コストと投資回収率を見える化し、1on1メソッドで定着を引き上げる。人事・経営のためのNaritai。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'サーベイは全く意味がない｜若手の離職・定着を"見える化"する Naritai',
    description:
      'サーベイを入れても現場は変わらない。若手の離職・定着とコストを見える化し、1on1メソッドで引き上げる。',
  },
};

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
