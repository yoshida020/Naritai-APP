import type { Metadata } from 'next';
import { Header, Footer, homeNavigationConfig } from '@/components/common/navigation';
import { getAllColumns, getUsedTags } from '@/lib/columns';
import ColumnList, { ColumnCard } from './ColumnList';

const BASE =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://www.naritai-career-official.com';

export const metadata: Metadata = {
  // ルートの title テンプレートに飲み込まれないよう absolute で指定
  title: { absolute: 'コラム｜Naritai' },
  description:
    '若手の定着・1on1・採用育成コストの回収について、Naritaiが実務目線で解説するコラム一覧です。',
  alternates: { canonical: `${BASE}/column` },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'コラム｜Naritai',
    description:
      '若手の定着・1on1・採用育成コストの回収について、実務目線で解説するコラム一覧です。',
    url: `${BASE}/column`,
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function ColumnIndexPage() {
  // 本文（contentHtml）はクライアントに渡さない
  const columns: ColumnCard[] = getAllColumns().map((c) => ({
    slug: c.slug,
    title: c.title,
    category: c.category,
    tags: c.tags,
    date: c.date,
    image: c.image,
  }));
  const tags = getUsedTags();

  return (
    <>
      <Header config={homeNavigationConfig} />
      <main className="bg-white min-h-screen">
        <div className="mx-auto max-w-[1120px] px-6 pt-28 pb-20 md:pt-32">
          <nav className="text-xs text-[#919CB7] mb-4" aria-label="パンくず">
            <a href="/" className="hover:text-[#202D5F]">ホーム</a>
            <span className="mx-1.5 text-[#E6EAEE]">/</span>コラム
          </nav>
          <span className="block text-xs font-bold tracking-[0.35em] text-[#919CB7] mb-1">
            COLUMN
          </span>
          <h1 className="text-3xl md:text-4xl font-black tracking-[0.06em] text-[#202D5F] mb-2">
            コラム
          </h1>
          <p className="text-[#919CB7] mb-8">
            若手の定着・1on1・採用育成コストの回収について、実務目線で解説します。
          </p>

          <ColumnList columns={columns} tags={tags} />
        </div>
      </main>
      <Footer config={homeNavigationConfig} />
    </>
  );
}
