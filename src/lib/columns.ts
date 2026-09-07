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
export const columnArticles: ColumnArticle[] = [
  {
    slug: '1on1-umakuikanai',
    title: '1on1がうまくいかない5つの原因と対処法｜社内1on1と1on1代行の違いを比較',
    description:
      '若手との1on1が形だけになり早期離職が止まらない——。1on1がうまくいかない典型的な原因と今日から使える対処法、社内で続ける場合と外部の1on1代行に任せる場合の違いを比較表で整理します。',
    category: '1on1・定着支援',
    tags: ['1on1', '1on1代行', '定着支援', '早期離職'],
    date: '2026.09.07',
    isoDate: '2026-09-07',
    popular: true,
    summary: [
      '1on1がうまくいかない主因は「報告会になっている」「評価と混ざる」「上司の負担過多」の3つ',
      'まず“評価と切り離す”“アジェンダを部下に渡す”“次の一歩を1つ決める”の3点だけで機能し始める',
      '社内1on1は関係構築に強く、外部の1on1代行は中立性・継続性・専門性に強い',
      '「続かない・本音が出ない」なら外部の第三者と併用し、徐々に社内へ内製化するのが現実的',
    ],
    contentHtml: `<p>「1on1をやっているのに、若手の本音が見えないまま辞めてしまう」——多くの中小企業がこの壁にぶつかります。うまくいかない理由は“やり方”よりも“設計”にあることがほとんどです。原因と対処法、そして社内で続ける場合と外部に任せる場合の違いまで、5分で整理します。</p>
<p><strong>目次</strong></p>
<ul>
<li><a href="#genin">1on1がうまくいかない5つの原因</a></li>
<li><a href="#taisho">今日からできる対処法（質問例つき）</a></li>
<li><a href="#hikaku">社内1on1 vs 1on1代行の違い【比較表】</a></li>
<li><a href="#erabikata">どちらを選ぶ？判断の目安</a></li>
</ul>
<div class="definition"><strong>1on1とは</strong>：上司と部下が1対1で定期的に対話し、部下の成長と課題解決を支援する場のこと。業務進捗を確認する“報告会”とは目的が異なり、あくまで<strong>「部下のための時間」</strong>である点が本質です。</div>
<h2 id="genin">1on1がうまくいかない5つの原因</h2>
<p>形だけの1on1には、共通するつまずきがあります。</p>
<ul>
<li>目的が「進捗確認」にすり替わり、ただの報告会になっている</li>
<li>評価面談と混ざり、部下が本音を出せない</li>
<li>上司の負担が大きく、準備できないまま臨んでいる</li>
<li>質問がその場任せで、毎回同じ話で終わる</li>
<li>話して終わりで、次の具体的な行動に繋がっていない</li>
</ul>
<h2 id="taisho">今日からできる対処法</h2>
<p>まず次の3つを変えるだけで、多くの1on1は機能し始めます。</p>
<ul>
<li><strong>冒頭で「これは評価ではない」と伝える</strong>（心理的安全性をつくる）</li>
<li><strong>アジェンダは部下に決めてもらう</strong>（主役を部下に渡す）</li>
<li><strong>最後に「次の1週間でやること」を1つだけ決める</strong>（行動に接続する）</li>
</ul>
<h3>そのまま使える質問例</h3>
<ul>
<li>「最近、手応えを感じた仕事は？」</li>
<li>「いま一番モヤモヤしていることは？」</li>
<li>「会社や私にできるサポートはある？」</li>
</ul>
<h2 id="hikaku">社内1on1 vs 1on1代行 ― どう違う？</h2>
<p>「続かない」「本音が出ない」と感じるなら、利害のない外部の第三者に任せる<strong>1on1代行</strong>も選択肢です。両者の強みを整理しました。</p>
<div class="table-scroll">
<table>
<thead><tr><th>項目</th><th>社内1on1</th><th>1on1代行（外部）</th></tr></thead>
<tbody>
<tr><th>中立性</th><td>上司＝評価者のため本音が出にくい</td><td>利害のない第三者に本音を話しやすい</td></tr>
<tr><th>継続性</th><td>業務多忙で形骸化しやすい</td><td>仕組みとして継続しやすい</td></tr>
<tr><th>専門性</th><td>上司のスキル次第で属人的になりやすい</td><td>対話設計の専門家が担当する</td></tr>
<tr><th>関係構築</th><td>日常の信頼を積み上げやすい</td><td>社内の関係づくりは上司が担う</td></tr>
<tr><th>コスト</th><td>人件費として見えにくい</td><td>外部費用として見える化しやすい</td></tr>
</tbody>
</table>
</div>
<h2 id="erabikata">どちらを選ぶ？判断の目安</h2>
<p>上司と部下の関係が良好で時間も取れるなら、まずは社内で。逆に<strong>「続かない」「本音が出ない」「上司の負担が限界」</strong>なら、外部の1on1代行と併用し、立ち上げは外部に任せて<strong>徐々に社内へ内製化</strong>していくのが現実的です。Naritaiは、この“外部で立ち上げて社内へ渡す”までを伴走しています。</p>`,
  },
];


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
