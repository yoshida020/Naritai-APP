# naritai

Naritai株式会社のコーポレートサイト。個人向け・法人向けのキャリア支援サービスへの導線を提供する分岐ハブとして機能します。

## プロジェクト構造

```
naritai/
├── src/
│   ├── app/              # Next.js App Router（ページとルーティング）
│   ├── components/       # 再利用可能なReactコンポーネント
│   ├── lib/             # ユーティリティ関数とヘルパー
│   └── styles/          # グローバルスタイルファイル
├── public/              # 静的ファイル（画像、アイコンなど）
├── next.config.mjs      # Next.js設定
├── tsconfig.json         # TypeScript設定（baseUrl: "src"）
├── eslint.config.mjs    # ESLint設定（flat config）
├── .prettierrc          # Prettier設定
└── .env.example         # 環境変数の例
```

## 技術スタック

- **Next.js** - Reactフレームワーク
- **React** - UIライブラリ
- **TypeScript** - 型安全性のための言語

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

### ビルド

```bash
npm run build
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