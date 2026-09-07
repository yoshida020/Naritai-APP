'use client';

import { useState } from 'react';
import Link from 'next/link';

// 一覧に渡すのは本文を除いたメタ情報だけ
export interface ColumnCard {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  date: string;
  image?: string;
}

interface ColumnListProps {
  columns: ColumnCard[];
  tags: string[];
}

export default function ColumnList({ columns, tags }: ColumnListProps) {
  const [active, setActive] = useState<string>('all');

  const shown =
    active === 'all' ? columns : columns.filter((c) => c.tags.includes(active));

  // 記事がまだ無いときの表示
  if (columns.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20 px-4">
        <p className="text-lg font-bold text-[#202D5F] mb-2">コラムは準備中です</p>
        <p className="text-[#919CB7]">
          若手の定着・1on1・採用育成コストについての記事を順次公開します。
        </p>
      </div>
    );
  }

  return (
    <>
      {/* #TAGS パネル：クリックで関連記事に絞り込み */}
      {tags.length > 0 && (
        <div className="relative overflow-hidden rounded-[18px] bg-[#202D5F] py-6 pr-6 pl-16 mb-10">
          <span
            className="absolute left-4 top-5 font-black text-2xl tracking-[0.15em] text-white/90"
            style={{ writingMode: 'vertical-rl' }}
            aria-hidden="true"
          >
            #TAGS
          </span>
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setActive('all')}
              className={`rounded-full px-4 py-1.5 text-sm font-bold leading-none transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
                active === 'all'
                  ? 'bg-[#3A4A7F] text-white'
                  : 'bg-white text-[#202D5F]'
              }`}
            >
              すべて
            </button>
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={`rounded-full px-4 py-1.5 text-sm font-bold leading-none transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
                  active === t
                    ? 'bg-[#3A4A7F] text-white'
                    : 'bg-white text-[#202D5F]'
                }`}
              >
                <span className={active === t ? 'text-white/70 mr-0.5' : 'text-[#4a5a94] mr-0.5'}>#</span>
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      {active !== 'all' && (
        <p className="text-sm text-[#919CB7] mb-6">
          「<b className="text-[#202D5F]">#{active}</b>」の記事：{shown.length}件
        </p>
      )}

      {/* 記事グリッド（画像主役・枠なし） */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mb-10">
        {shown.map((c) => (
          <article key={c.slug} className="flex flex-col">
            <Link
              href={`/column/${c.slug}`}
              className="group relative block mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3A4A7F] rounded-2xl"
            >
              <span className="absolute -top-2.5 left-3.5 z-10 rounded-md bg-white px-2.5 py-1 text-xs font-bold text-[#202D5F] shadow-[0_3px_10px_rgba(32,45,95,0.18)]">
                {c.date}
              </span>
              {c.image ? (
                <img
                  src={c.image}
                  alt={c.title}
                  className="aspect-[16/10] w-full rounded-2xl object-cover shadow-[0_8px_22px_rgba(32,45,95,0.16)] transition-transform duration-200 group-hover:-translate-y-1"
                />
              ) : (
                <span className="flex aspect-[16/10] w-full items-end rounded-2xl bg-gradient-to-br from-[#202D5F] to-[#4a5a94] shadow-[0_8px_22px_rgba(32,45,95,0.16)] transition-transform duration-200 group-hover:-translate-y-1">
                  <span className="p-4 text-sm font-bold text-white/95">{c.category}</span>
                </span>
              )}
            </Link>
            <span className="mb-1.5 text-xs font-bold text-[#202D5F]">{c.category}</span>
            <Link
              href={`/column/${c.slug}`}
              className="text-base font-bold leading-relaxed text-[#202D5F] transition-colors hover:text-[#3A4A7F] hover:underline underline-offset-4"
            >
              {c.title}
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
