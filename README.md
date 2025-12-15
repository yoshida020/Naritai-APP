# Naritai - コーポレートサイト

**「あなたのなりたいを実現する」**

Naritaiは、個人の「なりたい自分」を見つけ、組織の「成長力」へ変えるキャリア支援サービスを提供する企業のコーポレートサイトです。個人向け・法人向けの2つのランディングページを持つ分岐ハブとして機能します。

## サイト構成

| ページ | URL | 説明 |
|--------|-----|------|
| ホームページ | `/` | 個人向けキャリア支援サービスの紹介 |
| 法人向けLP | `/corporate` | 企業向け1on1コーチング・研修サービスの紹介 |
| お問い合わせ | `/contact` | お問い合わせフォーム |
| 資料請求 | `/blank` | 資料請求フォーム |
| プライバシーポリシー | `/legal/privacy-policy` | プライバシーポリシー |
| ニュース詳細 | `/news/[id]` | ニュース記事詳細ページ |

## 技術スタック

### フレームワーク・言語
- **Next.js 14** - React フレームワーク（App Router）
- **React 18** - UI ライブラリ
- **TypeScript 5** - 型安全性

### スタイリング
- **Tailwind CSS 4** - ユーティリティファーストCSS
- **Tailwind Merge** - クラス競合解決
- **CSS Modules** - スコープ付きスタイル
- **カスタムフォント** - Catchy Mager, 花鳥風月, 源暎こぶり明朝, Noto Serif JP

### フォーム・バリデーション
- **React Hook Form** - フォーム状態管理
- **Zod** - スキーマバリデーション
- **@hookform/resolvers** - Zod統合

### 外部サービス
- **EmailJS** - メール送信（お問い合わせ・資料請求）

### アニメーション
- **Lottie React** - Lottieアニメーション再生
- **CSS Animations** - カスタムキーフレームアニメーション

### 開発ツール
- **ESLint** - コード品質チェック
- **TypeScript** - 静的型チェック（strict mode）

## プロジェクト構造

```
naritai/
├── src/
│   ├── app/                              # Next.js App Router
│   │   ├── page.tsx                      # ホームページ
│   │   ├── layout.tsx                    # ルートレイアウト
│   │   ├── globals.css                   # グローバルスタイル
│   │   ├── contact/                      # お問い合わせページ
│   │   ├── blank/                        # 資料請求ページ
│   │   ├── corporate/                    # 法人向けLP
│   │   ├── legal/privacy-policy/         # プライバシーポリシー
│   │   └── news/[id]/                    # ニュース詳細（動的ルート）
│   │
│   ├── components/                       # Reactコンポーネント
│   │   ├── common/                       # 共通コンポーネント
│   │   │   ├── Button.tsx                # ボタン
│   │   │   ├── SectionTitle.tsx          # セクションタイトル
│   │   │   ├── Toast.tsx                 # トースト通知
│   │   │   ├── FormSuccessToast.tsx      # フォーム成功トースト
│   │   │   ├── ConfirmModal.tsx          # 確認モーダル
│   │   │   ├── CursorHoverEffect.tsx     # カーソルホバーエフェクト
│   │   │   └── navigation/               # ナビゲーション
│   │   │       ├── Header.tsx            # ヘッダー
│   │   │       ├── Footer.tsx            # フッター
│   │   │       ├── SharedFooter.tsx      # 共有フッター
│   │   │       ├── types.ts              # 型定義
│   │   │       └── configs/              # ナビゲーション設定
│   │   │           ├── homeConfig.ts     # ホームページ設定
│   │   │           └── corporateConfig.ts # 法人LP設定
│   │   │
│   │   ├── home/                         # ホームページ専用
│   │   │   ├── sections/                 # セクション
│   │   │   │   ├── TopSection.tsx        # ヒーロー＆スライドショー
│   │   │   │   ├── AboutUs.tsx           # Naritaiについて
│   │   │   │   ├── MessageSection.tsx    # 代表メッセージ
│   │   │   │   ├── BusinessSection.tsx   # 事業内容
│   │   │   │   ├── NewsSection.tsx       # ニュース
│   │   │   │   ├── FaqSection.tsx        # よくある質問
│   │   │   │   ├── CompanySection.tsx    # 会社概要
│   │   │   │   └── ContactSection.tsx    # お問い合わせセクション
│   │   │   ├── ZoomSlideShow.tsx         # ズームスライドショー
│   │   │   └── FeatherBackground.tsx     # 背景素材
│   │   │
│   │   └── corporate/                    # 法人LP専用
│   │       ├── sections/                 # セクション
│   │       │   ├── HeroSection.tsx       # ヒーロー
│   │       │   ├── ProblemsSection.tsx   # 課題
│   │       │   ├── ServicesSection.tsx   # サービス内容
│   │       │   ├── InstructorsSection.tsx # 講師紹介
│   │       │   ├── CorporateSection.tsx  # 導入効果
│   │       │   ├── StrongPointsSection.tsx # 強み
│   │       │   ├── PricingSection.tsx    # 料金
│   │       │   ├── FlowSection.tsx       # ご利用の流れ
│   │       │   └── ContactSection.tsx    # お問い合わせセクション
│   │       ├── ContactForm.tsx           # お問い合わせフォーム
│   │       └── CustomCursor.tsx          # カスタムカーソル
│   │
│   └── lib/                              # ユーティリティ
│       └── news.ts                       # ニュースデータ・ヘルパー
│
├── public/                               # 静的ファイル
│   ├── hp/                               # ホームページ用アセット
│   │   ├── fonts/                        # カスタムフォント
│   │   ├── hero/                         # ヒーロー画像
│   │   ├── aboutUs/                      # About Us画像
│   │   └── message/                      # メッセージ画像
│   ├── naritai.png                       # ロゴ
│   └── scroll%20down.json                # スクロールアニメーション
│
├── docs/                                 # ドキュメント
├── tokens.json                           # デザイントークン
├── package.json                          # npm設定
├── tsconfig.json                         # TypeScript設定
├── tailwind.config.js                    # Tailwind CSS設定
├── postcss.config.js                     # PostCSS設定
└── next.config.mjs                       # Next.js設定
```

## セットアップ

### 必要要件

- Node.js 18以上
- npm

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/inc-uhd/naritai.git
cd naritai

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いてください。

### ビルド

```bash
npm run build
```

### プロダクション実行

```bash
npm run start
```

### Lint

```bash
npm run lint
```

## スクリプト一覧

| スクリプト | 説明 |
|-----------|------|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | プロダクション用にビルド |
| `npm run start` | プロダクションモードでサーバーを起動 |
| `npm run lint` | ESLintでコードをチェック |

## 主要機能

### ナビゲーション

- **設定駆動型ナビゲーション** - ヘッダー/フッターの表示内容を設定ファイルで管理
- **アクティブセクション検出** - IntersectionObserverでスクロール位置を追跡
- **スムーススクロール** - ナビゲーションクリックでセクションへスムーズに移動
- **レスポンシブメニュー** - モバイル用ハンバーガーメニュー

### フォーム

- **バリデーション** - React Hook Form + Zodによる堅牢なバリデーション
- **確認フロー** - 送信前に確認モーダルを表示
- **メール送信** - EmailJSによる自動メール送信
- **トースト通知** - 送信成功/エラー時のフィードバック

### アニメーション

- **ズームスライドショー** - ヒーローセクションの画像切り替え
- **Lottieアニメーション** - スクロールダウンインジケーター
- **段階的フェードイン** - セクション表示時のアニメーション
- **カスタムカーソル** - 法人LPでのインタラクティブカーソル

### レスポンシブデザイン

- モバイルファースト設計
- ブレークポイント: `md` (768px), `lg` (1024px), `min-[1025px]`
- デバイスごとに最適化されたレイアウト

## デザイントークン

`tokens.json` でデザインシステムを定義しています：

- **colors** - ブランドカラー、テキスト、背景、ボーダー、ステータス
- **typography** - フォントファミリー、サイズ、行間、ウェイト
- **spacing** - 余白の一貫性
- **borderRadius** - 角丸の統一
- **shadows** - シャドウのバリエーション
- **breakpoints** - レスポンシブ対応
- **zIndex** - 重なり順序
- **transitions** - アニメーション速度

## 環境変数

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID=your_admin_template_id
NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID=your_user_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

| 変数名 | 説明 |
|--------|------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJSのサービスID |
| `NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID` | お問い合わせ用メールテンプレートID |
| `NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID` | 資料請求用メールテンプレートID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJSの公開キー |

## ブランチ戦略

- **main** - プロダクションブランチ
- **develop** - 開発ブランチ

## ライセンス

Private
