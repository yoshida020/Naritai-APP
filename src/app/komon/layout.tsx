import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Z世代顧問｜社長のための、若手×時代の相談役｜Naritai' },
  description:
    '若手のことは、若手にしか分からない。忖度のない“外の声”を、社長のとなりへ。Z世代の当事者が、評価制度・採用・オンボーディング・1on1・若手定着まで、経営者の相談役として伴走します。ご相談は無料。',
  keywords: ['Z世代顧問', '若手', '相談役', '経営者', '社長', '若手定着', '1on1', '採用', '評価制度', '世代間ギャップ'],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Z世代顧問｜社長のための、若手×時代の相談役｜Naritai',
    description: '忖度のない“外の声”を社長のとなりへ。Z世代の当事者が経営者の相談役として伴走します。ご相談は無料。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Z世代顧問｜社長のための、若手×時代の相談役｜Naritai',
    description: '忖度のない“外の声”を社長のとなりへ。Z世代の当事者が経営者の相談役として伴走。ご相談は無料。',
  },
};

export default function KomonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
