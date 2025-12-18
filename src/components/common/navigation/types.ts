// サブメニューリンクの型定義
export interface SubNavLink {
  href: string;
  label: string;
}

// ナビゲーションリンクの型定義
export interface NavLink {
  href: string;
  label: string;
  labelEn?: string; // モバイルメニュー用の英語ラベル
  subLinks?: SubNavLink[]; // ドロップダウンサブメニュー
}

// フッターリンクグループの型定義
export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

// カラー設定の型定義
export interface ColorConfig {
  header?: {
    backgroundColor?: string;
    textColor?: string;
    activeTextColor?: string;
    buttonBackgroundColor?: string;
  };
  footer?: {
    backgroundColor?: string;
    textColor?: string;
    mutedTextColor?: string;
  };
}

// ナビゲーション設定の型定義
export interface NavigationConfig {
  // ベースパス（HPなら'/', LPなら'/corporate'）
  basePath: string;
  // ヘッダーのナビゲーションリンク
  headerLinks: NavLink[];
  // フッターのリンクグループ
  footerLinkGroups: FooterLinkGroup[];
  // 資料請求ボタンのリンク先（表示しない場合はundefined）
  documentRequestLink?: string;
  // 資料請求ボタンのラベル
  documentRequestLabel?: {
    line1: string;
    line2: string;
  };
  // カラー設定
  colors?: ColorConfig;
}
