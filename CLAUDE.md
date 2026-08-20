# CLAUDE.md

このファイルは、Claude Code（claude.ai/code）がこのリポジトリで作業する際の案内です。

Naritai のコーポレートサイト（Next.js 14 App Router / React 18 / TypeScript / Tailwind CSS 4）。
ページ一覧・技術スタック・ディレクトリ構成は README.md に詳しいので、ここには
**複数ファイルを読まないと分からない構造と、README と実装がずれている箇所**だけを書く。

## コマンド

```bash
npm install     # node_modules は未インストール。最初に必要
npm run dev     # 開発サーバー http://localhost:3000
npm run build   # プロダクションビルド
npm run start   # ビルド済みを起動
npm run lint    # ESLint
```

テストフレームワークは導入されていない。

`.env.local` も未作成。無いとフォーム送信時に EmailJS の環境変数が `undefined` になり、
送信が失敗する（コード側は `process.env.X!` と非 null アサーションしているだけで、起動時チェックは無い）。

## 最重要：法人向け LP が 2 系統ある

`src/app/` に `corporate/` と `lp/` の両方が存在し、**`next.config.mjs` が `/corporate` → `/lp` に
リダイレクトしている**。つまり:

| ルート | 実体 | 状態 |
|---|---|---|
| `/lp` | `src/app/lp/page.tsx`（1 ファイル 15KB の素の HTML）+ `lp.css`（23KB） | **これが実際に表示される** |
| `/corporate` | `src/components/corporate/sections/` 配下のコンポーネント群 | リダイレクトされ**到達しない** |

両者は実装方針がまったく違う。

- `/lp` は共通コンポーネント（Header / Footer / ナビ設定）を**一切使わない**独立したページ。
  Tailwind ユーティリティも使わず、`.lp-page` 配下のクラスを `lp.css` に自前で定義している。
  スクロール表示アニメは `page.tsx` 内の `IntersectionObserver` が `.reveal` に `.in` を付ける方式。
- `/corporate` は共通 Header / Footer とセクションコンポーネントで構成された、従来の作り。

**`src/components/corporate/` を編集しても表示は変わらない。** 現行 LP を直すなら
`src/app/lp/page.tsx` と `src/app/lp/lp.css` を触ること。逆に旧 LP を復活させるなら
`next.config.mjs` のリダイレクトを外す。

## ナビゲーションは設定駆動

Header / Footer は自前で内容を持たず、`NavigationConfig` オブジェクトを props で受け取る。

```
src/components/common/navigation/
├── types.ts                    # NavigationConfig の型定義
├── Header.tsx / Footer.tsx     # config を描画するだけ
└── configs/
    ├── homeConfig.ts           # basePath: '/'
    └── corporateConfig.ts      # basePath: '/corporate'
```

- **ルートレイアウトに Header / Footer は無い**。各ページ・各ネストレイアウトが個別に
  `<Header config={...} />` を置いて、どちらの config を渡すか選んでいる。
- ヘッダーリンクは `#top` `#about` のようなアンカー。`Header.tsx` はこの `href` を
  そのままセクション ID として `IntersectionObserver` に渡し、現在位置をハイライトする。
  **`headerLinks` に追加した `href` に対応する `id` がページ側に無いと、監視が空振りする。**
- 別ページにいる状態でアンカーを踏むと、`config.basePath + href` へ `router.push` してから
  スクロールする（`Header.tsx` の `handleLinkClick`）。
- ヘッダー/フッターの色も `config.colors` で差し替える設計。

ナビの項目・色・資料請求ボタンを変えるときは、コンポーネントではなく `configs/` を編集する。

## フォーム 2 種は同じ骨格の別実装

`/contact`（お問い合わせ）と `/blank`（資料請求）は、**共通コンポーネント化されておらず、
ほぼ同じコードがそれぞれの `page.tsx` に重複している**。片方を直したらもう片方も確認すること。

共通の流れ:

1. React Hook Form + Zod（スキーマは各 `page.tsx` 内にインライン定義）でバリデーション
2. submit しても即送信せず、`ConfirmModal` に入力内容を出す
3. 確認後に `emailjs.send()` を実行
4. 成功したら `sessionStorage` に `formSuccessMessage` を書き、`router.push()` でトップへ遷移
5. 遷移先の `FormSuccessToast` が `sessionStorage` を読んでトーストを出し、キーを消す

使い分けているのはテンプレート ID だけ。`/contact` は `ADMIN_TEMPLATE_ID`（管理者向け）、
`/blank` は `USER_TEMPLATE_ID`（資料請求）。

### `?from=lp` クエリパラメータ

両フォームは `searchParams.get('from') === 'lp'` を見て、次の 2 つを切り替える。

- Header / Footer に渡す config（`corporateNavigationConfig` か `homeNavigationConfig` か）
- 送信成功後の遷移先（`/corporate` か `/` か）

LP からフォームへ誘導するリンクには `?from=lp` を付ける必要がある。

## スタイリング — 実際に効いている設定はどれか

Tailwind CSS 4 を CSS ファースト構成で使っている。設定ファイルが複数あるが、**生きているのは
`src/app/globals.css` だけ**。

- `globals.css`（798 行）が `@import "tailwindcss"` を書き、`@layer theme` の `:root` に
  CSS カスタムプロパティとしてデザイントークン（`--color-brand-primary` 等）を定義している。
  **色やフォントを変えるならここ。**
- **`tailwind.config.js` は機能していない。** Tailwind 4 は `@config` ディレクティブで明示的に
  読み込まない限り JS 設定を見ないが、`globals.css` にその記述が無い。
  中の `content` 配列と `fontFamily.catchy` は無視されている（実際 `font-catchy` は未使用）。
- **`tokens.json` はどこからも import されていない。** ビルドには一切関与しない、人間向けの
  デザイン仕様書として置かれている。実際の値は上記 `globals.css` 側にある。
  変更するときは両方を手で合わせる必要がある。
- `@tailwindcss/vite` が依存に入っているが、Next.js は PostCSS 経由（`postcss.config.js`）で
  ビルドしているため未使用。
- 日本語フォントは `public/fonts/` の `.ttf` を `@font-face` で直接読み込む。
  `layout.tsx` で `花鳥風月.ttf` だけ `<link rel="preload">` している。

## 環境変数

README に記載のある EmailJS 系 4 つに加えて、コード上では次も参照している（README 未記載）。

| 変数名 | 参照箇所 | 未設定時 |
|---|---|---|
| `NEXT_PUBLIC_BASE_URL` | `src/app/sitemap.ts` | `http://localhost:3000` にフォールバック |
| `NEXT_PUBLIC_GA_ID` | `src/app/layout.tsx` | Google Analytics タグを出力しない |
| `NEXT_PUBLIC_GTM_ID` | `src/app/layout.tsx` | GTM タグを出力しない |

## その他の構造

- **ニュースは静的データ**。`src/lib/news.ts` の `newsItems` 配列にベタ書き（現在 1 件）。
  CMS も API も無い。記事追加はこの配列を編集する。`/news/[id]` が `getNewsById()` で引く。
- ブランチ運用は `main`（本番）/ `develop`（開発）。リモートの HEAD は `develop`。

## README と実装のずれ

作業前に README を鵜呑みにしないこと。

- README は法人 LP を `/corporate` と説明しているが、実際はリダイレクトされ `/lp` が表示される。
- README のディレクトリ図にある `InstructorsSection.tsx` は存在せず、実際に `corporate/page.tsx` が
  import しているのは `CoachingSection` と `DarkThemeObserver`。
- README が挙げている `docs/` ディレクトリは存在しない。
- 環境変数の表に上記 3 つが載っていない。

## 既知の不具合

`sitemap.ts` がリダイレクト元の `/corporate` と遷移先の `/lp` を両方列挙している。
検索エンジンに重複した URL を提示している状態。

LP 経由でフォーム送信すると、`sessionStorage` に成功メッセージが書かれた上で `/corporate`
（＝ `/lp`）へ遷移するが、`FormSuccessToast` は `src/app/page.tsx`（トップ）にしか置かれていない。
そのため **LP からの送信では成功トーストが表示されず**、メッセージが `sessionStorage` に残り、
次にトップページを開いたときに遅れて表示される。
