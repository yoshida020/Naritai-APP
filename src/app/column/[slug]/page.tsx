import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header, Footer, homeNavigationConfig } from '@/components/common/navigation';
import {
  getColumnBySlug,
  getAllColumns,
  getRelatedColumns,
  getPopularColumns,
  readingMinutes,
} from '@/lib/columns';

const BASE =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://www.naritai-career-official.com';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllColumns().map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const a = getColumnBySlug(params.slug);
  if (!a) return { title: { absolute: 'コラム｜Naritai' } };
  const url = `${BASE}/column/${a.slug}`;
  const images = a.image
    ? [{ url: `${BASE}${a.image}`, width: 1200, height: 630, alt: a.title }]
    : undefined;
  return {
    title: { absolute: `${a.title}｜Naritai` },
    description: a.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: a.title,
      description: a.description,
      url,
      type: 'article',
      locale: 'ja_JP',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: a.title,
      description: a.description,
      images: a.image ? [`${BASE}${a.image}`] : undefined,
    },
  };
}

export default function ColumnDetailPage({ params }: Props) {
  const a = getColumnBySlug(params.slug);
  if (!a) notFound();

  const mins = readingMinutes(a.contentHtml);
  const url = `${BASE}/column/${a.slug}`;
  const related = getRelatedColumns(a.slug, 3);
  const popular = getPopularColumns(6)
    .filter((p) => p.slug !== a.slug)
    .slice(0, 5);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: a.title,
        description: a.description,
        datePublished: a.isoDate,
        dateModified: a.updatedIso || a.isoDate,
        image: a.image ? `${BASE}${a.image}` : undefined,
        author: { '@type': 'Organization', name: 'Naritai', url: `${BASE}/` },
        publisher: {
          '@type': 'Organization',
          name: 'Naritai',
          logo: { '@type': 'ImageObject', url: `${BASE}/images/logo/naritai.png` },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'コラム', item: `${BASE}/column` },
          { '@type': 'ListItem', position: 3, name: a.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Header config={homeNavigationConfig} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-white min-h-screen">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-6 pt-28 pb-24 md:pt-32 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* サイドバー（人気・おすすめ） */}
          <aside className="order-2 lg:order-1 lg:sticky lg:top-28 lg:self-start">
            {popular.length > 0 && (
              <div className="mb-10">
                <p className="mb-4 flex items-center gap-2 border-b-2 border-[#202D5F] pb-2 text-sm font-bold text-[#202D5F]">
                  <span className="h-2 w-2 rounded-sm bg-[#202D5F]" />人気のコラム
                </p>
                <ol className="m-0 list-none p-0">
                  {popular.map((p, i) => (
                    <li key={p.slug}>
                      <Link
                        href={`/column/${p.slug}`}
                        className="grid grid-cols-[auto_1fr] items-start gap-3 border-b border-dashed border-[#E6EAEE] py-3 text-sm leading-snug text-[#202D5F] hover:text-[#3A4A7F]"
                      >
                        <span className={`text-lg font-bold ${i < 3 ? 'text-[#202D5F]' : 'text-[#919CB7]'}`}>
                          {i + 1}
                        </span>
                        <span>{p.title}</span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {related.length > 0 && (
              <div className="mb-10">
                <p className="mb-4 flex items-start gap-2 border-b-2 border-[#202D5F] pb-2 text-sm font-bold leading-snug text-[#202D5F]">
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-sm bg-[#202D5F]" />
                  あなたにおすすめの関連記事
                </p>
                <div className="flex flex-col gap-2.5">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/column/${r.slug}`}
                      className="block rounded-xl border border-[#E6EAEE] p-4 text-[#202D5F] transition-colors hover:border-[#202D5F] hover:bg-[#F0F2F8]"
                    >
                      <span className="mb-2 inline-block rounded-full bg-[#F0F2F8] px-2.5 py-0.5 text-xs font-bold text-[#202D5F]">
                        {r.category}
                      </span>
                      <span className="block text-sm leading-relaxed">{r.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-xl bg-[#202D5F] p-5 text-white">
              <p className="mb-4 text-sm leading-relaxed">
                採用・育成コストの回収率、可視化します。成長カルテの資料をどうぞ。
              </p>
              <Link
                href="/contact?from=column-rail"
                className="block rounded-full bg-white py-2.5 text-center text-sm font-bold text-[#202D5F] transition-transform hover:-translate-y-0.5"
              >
                無料で相談する
              </Link>
            </div>
          </aside>

          {/* 記事本体 */}
          <article className="order-1 min-w-0 max-w-[720px] lg:order-2">
            <nav className="mb-4 text-xs text-[#919CB7]" aria-label="パンくず">
              <Link href="/" className="hover:text-[#202D5F]">ホーム</Link>
              <span className="mx-1.5 text-[#E6EAEE]">/</span>
              <Link href="/column" className="hover:text-[#202D5F]">コラム</Link>
              <span className="mx-1.5 text-[#E6EAEE]">/</span>
              {a.category}
            </nav>

            <span className="mb-3 inline-block rounded-full border border-[#202D5F] px-3 py-1 text-xs font-bold text-[#202D5F]">
              {a.category}
            </span>

            <h1 className="mb-4 text-2xl font-bold leading-snug text-[#202D5F] md:text-[1.9rem]">
              {a.title}
            </h1>

            {/* 投稿者=Naritai ＋ 読了時間チップ */}
            <div className="mb-8 flex flex-wrap items-center gap-3 border-y border-[#E6EAEE] py-3 text-sm text-[#919CB7]">
              <span className="inline-flex items-baseline gap-0.5 rounded-full border border-[#E6EAEE] bg-[#F7F9FC] px-3 py-1 font-bold tracking-[0.1em] text-[#202D5F]">
                NARITAI
              </span>
              <span className="text-[#E6EAEE]">·</span>
              <span>{a.date}</span>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-[#202D5F] bg-[#F0F2F8] px-4 py-1.5 font-bold text-[#202D5F]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.9}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                この記事は約{mins}分で読めます
              </span>
            </div>

            {/* GEO：この記事の結論 */}
            {a.summary && a.summary.length > 0 && (
              <section className="mb-8 rounded-xl border border-[#E6EAEE] border-l-4 border-l-[#202D5F] bg-[#F7F9FC] px-6 py-5">
                <p className="mb-3 text-sm font-bold tracking-[0.04em] text-[#202D5F]">この記事の結論</p>
                <ul className="m-0 list-disc pl-5">
                  {a.summary.map((s, i) => (
                    <li key={i} className="my-1.5 text-[#33405e]">{s}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* 本文（スタイルは globals.css の .column-prose） */}
            <div
              className="column-prose"
              dangerouslySetInnerHTML={{ __html: a.contentHtml }}
            />

            {/* CTA */}
            <section className="mt-12 rounded-xl bg-[#202D5F] px-8 py-9 text-center text-white">
              <h2 className="mb-2 text-xl font-bold text-white">
                育成にかけたコスト、回収できていますか？
              </h2>
              <p className="mb-6 text-sm text-white/90">
                採用・育成にかけたコストが回収できているか。Naritaiは可視化から1on1の内製化までを伴走します。
              </p>
              <Link
                href="/contact?from=column"
                className="inline-block rounded-full bg-white px-10 py-3.5 font-bold text-[#202D5F] transition-transform hover:-translate-y-0.5"
              >
                無料で相談する
              </Link>
            </section>

            {/* 著者ボックス（Naritai） */}
            <section className="mt-8 flex items-start gap-4 rounded-xl border border-[#E6EAEE] px-6 py-5">
              <div className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-[#202D5F] text-lg font-bold tracking-[0.06em] text-white">
                NT
              </div>
              <div>
                <p className="text-lg font-bold text-[#202D5F]">Naritai</p>
                <p className="mb-2 text-xs font-bold text-[#202D5F]">若手の定着支援サービス</p>
                <p className="text-sm leading-relaxed text-[#33405e]">
                  若手社員の早期離職を、企業と本人の“ズレ”の問題として捉え直し、中小企業向けに定着支援を提供。採用・育成コストの回収率の可視化（成長カルテ）と、独自の1on1メソッドによる内製化支援を行っています。
                </p>
              </div>
            </section>

            <div className="mt-10 text-center">
              <Link href="/column" className="text-sm font-bold text-[#202D5F] hover:text-[#3A4A7F]">
                ← コラム一覧に戻る
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer config={homeNavigationConfig} />
    </>
  );
}
