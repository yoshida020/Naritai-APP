import { NavigationConfig } from '../types';

export const corporateNavigationConfig: NavigationConfig = {
  basePath: '/corporate',
  headerLinks: [
    { href: '#top', label: 'トップ', labelEn: 'Top' },
    { href: '#problems', label: '課題', labelEn: 'Problems' },
    { href: '#services', label: 'サービス内容', labelEn: 'Services' },
    { href: '#business', label: 'コーチングとは？', labelEn: 'COACHING' },
    { href: '#corporate', label: '導入効果', labelEn: 'Effects' },
    { href: '#strong-points', label: '強み', labelEn: 'Strengths' },
    { href: '#pricing', label: '料金', labelEn: 'Pricing' },
    { href: '#flow', label: 'ご利用の流れ', labelEn: 'Flow' },
    { href: '#contact', label: '問い合わせ', labelEn: 'Contact' },
  ],
  footerLinkGroups: [
    {
      title: 'サービス',
      links: [
        { href: '#problems', label: '課題' },
        { href: '#services', label: 'サービス内容' },
        { href: '#business', label: 'コーチングとは？' },
        { href: '#corporate', label: '導入効果' },
      ],
    },
    {
      title: 'ご利用案内',
      links: [
        { href: '#strong-points', label: '強み' },
        { href: '#pricing', label: '料金' },
        { href: '#flow', label: 'ご利用の流れ' },
        { href: '#contact', label: '問い合わせ' },
      ],
    },
  ],
  documentRequestLink: '/blank?from=lp',
  documentRequestLabel: {
    line1: 'INVOICE',
    line2: '資料請求',
  },
};
