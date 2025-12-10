import { NavigationConfig } from '../types';

export const homeNavigationConfig: NavigationConfig = {
  basePath: '/',
  headerLinks: [
    { href: '#top', label: 'トップ', labelEn: 'Top' },
    { href: '#about', label: 'Naritaiについて', labelEn: 'About' },
    { href: '#message', label: 'メッセージ', labelEn: 'Message' },
    { href: '#business', label: '事業内容', labelEn: 'Business' },
    { href: '#news', label: 'News', labelEn: 'News' },
    { href: '#faq', label: 'よくある質問', labelEn: 'FAQ' },
    { href: '#company', label: '会社概要', labelEn: 'Company' },
    { href: '#contact', label: 'お問い合わせ', labelEn: 'Contact' },
  ],
  footerLinkGroups: [
    {
      title: 'Contents',
      links: [
        { href: '#top', label: 'トップ' },
        { href: '#about', label: 'Naritaiについて' },
        { href: '#message', label: '代表メッセージ' },
        { href: '#business', label: '事業内容' },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '#news', label: 'ニュース' },
        { href: '#faq', label: 'よくある質問' },
        { href: '#company', label: '会社概要' },
        { href: '#contact', label: 'お問い合わせ' },
      ],
    },
  ],
  documentRequestLink: '/blank',
  documentRequestLabel: {
    line1: 'INVOICE',
    line2: '資料請求',
  },
};
