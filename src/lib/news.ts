export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
}

export const newsItems: NewsItem[] = [
  { 
    id: '1',
    date: '2024.01.15', 
    title: '新サービス「Naritai Pro」の提供を開始いたしました', 
    category: 'お知らせ',
    excerpt: 'より高度な機能を備えた新サービスをリリースしました。',
    content: 'より高度な機能を備えた新サービス「Naritai Pro」をリリースいたしました。本サービスでは、従来の機能に加えて、より詳細な分析機能やカスタマイズオプションを提供いたします。\n\nお客様のビジネス成長をより効果的にサポートするため、最新のテクノロジーとノウハウを結集しました。詳細については、お気軽にお問い合わせください。',
  },
  { 
    id: '2',
    date: '2024.01.10', 
    title: 'セミナー「デジタル変革の最前線」を開催いたします', 
    category: 'イベント',
    excerpt: '最新のデジタルトレンドについてお話しするセミナーです。',
    content: '最新のデジタルトレンドについてお話しするセミナーを開催いたします。業界の第一人者をお招きし、実践的なノウハウをお伝えします。\n\n本セミナーでは、デジタル変革の最新動向や成功事例、実践的なアプローチについて詳しく解説いたします。多くの皆様のご参加をお待ちしております。',
  },
  { 
    id: '3',
    date: '2024.01.05', 
    title: '2024年度の新卒採用を開始いたしました', 
    category: '採用',
    excerpt: '一緒に成長していく仲間を募集しています。',
    content: '2024年度の新卒採用を開始いたしました。一緒に成長していく仲間を募集しています。\n\n私たちは、多様な価値観を持つメンバーと共に、お客様の成功を第一に考えて活動しています。詳細は採用ページをご覧ください。皆様からのご応募をお待ちしております。',
  },
  { 
    id: '4',
    date: '2023.12.20', 
    title: '年末年始の営業について', 
    category: 'お知らせ',
    excerpt: '年末年始の営業時間についてお知らせいたします。',
    content: '年末年始の営業時間についてお知らせいたします。\n\n12月29日（金）から1月3日（水）まで休業とさせていただきます。1月4日（木）より通常営業を再開いたします。\n\nご不便をおかけいたしますが、何卒よろしくお願いいたします。',
  },
];

export function getNewsById(id: string): NewsItem | undefined {
  return newsItems.find(news => news.id === id);
}

export function getAllNews(): NewsItem[] {
  return newsItems;
}
