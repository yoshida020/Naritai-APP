// コラム記事のデータと取得ヘルパー。
// 記事はこの配列に1件ずつ追加する（本文は contentHtml に HTML で入れる）。
// 顧客の実データは扱わないため、ここに書くのは公開用のコラム本文のみ。

export interface ColumnArticle {
  slug: string;          // URL（英数字とハイフン） 例: '1on1-daiko'
  title: string;         // 記事タイトル（H1／SEOタイトルの元）
  description: string;   // meta description（120字前後）
  category: string;      // 表示カテゴリ 例: '1on1・定着支援'
  tags: string[];        // 絞り込み用タグ（COLUMN_TAGS から選ぶ）
  date: string;          // 表示用の日付 例: '2026.09.04'
  isoDate: string;       // 構造化データ／sitemap用 例: '2026-09-04'
  updatedIso?: string;   // 更新日（あれば）
  image?: string;        // アイキャッチ 例: '/images/column/1on1-daiko.png'（無ければプレースホルダー表示）
  summary?: string[];    // 「この記事の結論」箇条書き（GEO用）
  contentHtml: string;   // 本文（h2 / h3 / p / ul / table などのHTML）
  popular?: boolean;     // 人気コラムに出す場合 true
}

// 初期タグ（検索されやすい語で厳選。記事が増えたら足す）
export const COLUMN_TAGS: string[] = [
  '1on1',
  '1on1代行',
  '若手育成',
  '早期離職',
  '離職防止',
  '定着支援',
  'Z世代',
  '採用コスト',
];

// ▼ 記事はここに追加していく（現状は空＝箱のみ公開）
export const columnArticles: ColumnArticle[] = [];

export function getAllColumns(): ColumnArticle[] {
  return columnArticles.slice().sort((a, b) => b.isoDate.localeCompare(a.isoDate));
}

export function getColumnBySlug(slug: string): ColumnArticle | undefined {
  return columnArticles.find((c) => c.slug === slug);
}

export function getColumnsByTag(tag: string): ColumnArticle[] {
  return getAllColumns().filter((c) => c.tags.includes(tag));
}

// 同じタグを持つ関連記事
export function getRelatedColumns(slug: string, limit = 3): ColumnArticle[] {
  const cur = getColumnBySlug(slug);
  if (!cur) return [];
  return getAllColumns()
    .filter((c) => c.slug !== slug && c.tags.some((t) => cur.tags.includes(t)))
    .slice(0, limit);
}

// 人気コラム（popular:true 優先。無ければ新着で埋める）
export function getPopularColumns(limit = 5): ColumnArticle[] {
  const pop = getAllColumns().filter((c) => c.popular);
  return (pop.length ? pop : getAllColumns()).slice(0, limit);
}

// 実際に記事が付いているタグだけを返す（記事0件のタグは出さない）
export function getUsedTags(): string[] {
  const used = new Set<string>();
  getAllColumns().forEach((c) => c.tags.forEach((t) => used.add(t)));
  return COLUMN_TAGS.filter((t) => used.has(t));
}

// 本文から読了時間（分）を算出（日本語 約500字/分）
export function readingMinutes(html: string): number {
  const text = html.replace(/<[^>]+>/g, '');
  const len = text.replace(/\s/g, '').length;
  return Math.max(1, Math.round(len / 500));
}
