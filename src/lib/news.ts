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
    date: '2026.01.01', 
    title: 'ホームページをリニューアルしました', 
    category: 'お知らせ',
    excerpt: 'この度、サービス内容や事例をより分かりやすくお伝えするため、サイトをリニューアルいたしました。',
    content: 'いつもNaritaiのホームページをご覧いただき、ありがとうございます。\n\nこの度、サービス内容や事例をより分かりやすくお伝えするため、サイトをリニューアルいたしました。\n\n\nZ世代向けキャリアコーチング・法人向け若手定着支援の情報を順次更新してまいります。\n\n今後ともNaritaiをよろしくお願いいたします。',
  },
];

export function getNewsById(id: string): NewsItem | undefined {
  return newsItems.find(news => news.id === id);
}

export function getAllNews(): NewsItem[] {
  return newsItems;
}
