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
    title: '1on1がうまくいかない本当の理由｜5つの原因と、社内1on1と1on1代行の違い',
    description:
      '1on1を入れても若手が辞める会社は少なくありません。1on1が形だけになる5つの原因と今日から直せるポイント、社内で続ける場合と外部の1on1代行に任せる場合の違いを、現場のイメージつきで整理します。',
    category: '1on1・定着支援',
    tags: ['1on1', '1on1代行', '定着支援', '早期離職'],
    date: '2026.09.07',
    isoDate: '2026-09-07',
    popular: true,
    summary: [
      '1on1がうまくいかない原因のほとんどは、担当者の能力ではなく設計にある',
      'よくある失敗は、報告会になる、評価と混ざる、上司が忙しくて形だけになる、の3つ',
      '直し方はシンプルで、評価と切り離す、話す順番を部下に渡す、次の一歩を1つ決める',
      'それでも社内だけでは限界がある。利害のない外部の1on1代行を入れると本音と継続性が変わる',
    ],
    contentHtml: `<p>1on1を制度として入れている会社は増えました。それでも若手は辞めます。原因を「上司のやり方が下手だから」で片づけると、たいてい何も変わりません。うまくいかない1on1には、担当者の能力とは別の、共通した構造があるからです。</p>
<p>この記事では、1on1が形だけになる原因と、今日から直せるポイント、社内で続ける場合と外部に任せる場合の違いまでを、現場のイメージつきで整理します。</p>
<p><strong>目次</strong></p>
<ul>
<li><a href="#genin">1on1がうまくいかない5つの原因</a></li>
<li><a href="#taisho">今日から直せる3つのこと（質問例つき）</a></li>
<li><a href="#hikaku">社内1on1と1on1代行、何が違うのか</a></li>
<li><a href="#erabikata">どちらを選ぶかの目安</a></li>
</ul>
<div class="definition"><strong>1on1とは</strong>、上司と部下が1対1で定期的に話し、部下の成長と課題解決を助けるための時間です。進捗を確認する報告会とは目的が違います。主役は上司ではなく部下で、ここがずれた瞬間に1on1は機能しなくなります。</div>
<h2 id="genin">1on1がうまくいかない5つの原因</h2>
<p>やり方を直す前に、まず何が起きているのかを見てください。</p>
<h3>1. 報告会になっている</h3>
<p>「今週の進捗は」から始めると、部下は数字と言い訳を用意し、上司は確認して終わります。それはマネジメントの定例であって、1on1ではありません。</p>
<h3>2. 評価と混ざっている</h3>
<p>評価する人が相手だと、弱みや迷いを見せれば査定に響くと考え、部下は本音を出しません。安心して話せない場では、表面的な会話しか生まれません。</p>
<h3>3. 上司が忙しすぎる</h3>
<p>準備なしで臨む、直前にリスケする、ながらで聞く。これが続くと、部下は自分は優先されていないと受け取ります。若手は頻度より、扱われ方を見ています。</p>
<h3>4. 質問がその場任せ</h3>
<p>毎回ゼロから話すと、いつもの雑談か詰めのどちらかに寄ります。問いが用意されていない1on1は、上司の機嫌と忙しさに左右されます。</p>
<h3>5. 話して終わりになっている</h3>
<p>いい話ができても、次の行動に落ちなければ、部下にとっては話を聞いてもらっただけです。変化が起きないと、1on1そのものが無駄な時間に見えてきます。</p>
<h2 id="taisho">今日から直せる3つのこと</h2>
<p>全部を変える必要はありません。次の3つだけで、多くの1on1は動き始めます。</p>
<h3>1. 冒頭で「評価ではない」と伝える</h3>
<p>最初の一言で場の性質が決まります。これは評価とは関係ない時間だから、うまくいっていないことこそ聞かせてほしい、と言い切る。それだけで出てくる話が変わります。</p>
<h3>2. 話す順番を部下に渡す</h3>
<p>アジェンダを上司が決めた時点で、それは上司のための会議です。今日はどこから話したいか、と最初に主導権を渡す。部下が主役だと体感できるかどうかが分かれ目です。</p>
<h3>3. 最後に次の一歩を1つだけ決める</h3>
<p>やることを3つ並べると、どれも実行されません。次の1週間で試すことを1つだけに絞る。小さくても実行され、次の1on1で振り返れる。この積み重ねが変化になります。</p>
<h3>そのまま使える質問例</h3>
<ul>
<li>最近、手応えを感じた仕事はどれですか</li>
<li>いま一番モヤモヤしているのは何ですか</li>
<li>会社や上司に、どうしてほしいですか</li>
<li>半年後どうなっていたら、成長したと言えそうですか</li>
</ul>
<h2 id="hikaku">社内1on1と1on1代行、何が違うのか</h2>
<p>ここまでを実践しても、社内だけでは超えにくい壁があります。評価者である上司が相手だという構造は、努力では消せないからです。そこで選択肢になるのが、利害のない外部の第三者が1on1を担う1on1代行です。優劣ではなく、役割が違います。</p>
<div class="table-scroll">
<table>
<thead><tr><th>項目</th><th>社内1on1</th><th>1on1代行（外部）</th></tr></thead>
<tbody>
<tr><th>本音の出やすさ</th><td>評価者が相手で出にくい</td><td>利害がなく話しやすい</td></tr>
<tr><th>継続性</th><td>多忙で形だけになりやすい</td><td>仕組みとして続く</td></tr>
<tr><th>専門性</th><td>上司のスキル次第</td><td>対話の専門家が担当</td></tr>
<tr><th>関係構築</th><td>日々の信頼を積める</td><td>社内の関係は上司が担う</td></tr>
<tr><th>コスト</th><td>人件費で見えにくい</td><td>外部費用で見える化しやすい</td></tr>
</tbody>
</table>
</div>
<p>社内1on1は、日々の信頼と評価をつなぐ役割。1on1代行は、評価から切り離された場所で本音と継続性をつくる役割です。両方そろって初めて、若手は話せる相手と、見てくれる上司の両方を持てます。</p>
<h2 id="erabikata">どちらを選ぶかの目安</h2>
<p>上司と部下の関係が良く、時間も取れているなら、まずは社内で回してください。続かない、本音が出ない、上司の負担がもう限界。このどれかが当てはまるなら、外部を入れたほうが早いです。</p>
<p>私自身、若手が何十人も次々に辞めていく現場を見てきました。その多くは能力の問題ではなく、社内に本音を言える相手がいなかっただけでした。Naritaiが外部の第三者として1on1を立ち上げ、軌道に乗ったら社内へ引き継ぐところまで一緒にやっているのは、そのためです。1on1を入れることではなく、機能させることをゴールにしています。</p>`,
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
