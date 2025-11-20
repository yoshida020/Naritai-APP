export default function NewsSection() {
  const newsItems = [
    { 
      date: '2024.01.15', 
      title: '新サービス「Naritai Pro」の提供を開始いたしました', 
      category: 'お知らせ',
      excerpt: 'より高度な機能を備えた新サービスをリリースしました。',
    },
    { 
      date: '2024.01.10', 
      title: 'セミナー「デジタル変革の最前線」を開催いたします', 
      category: 'イベント',
      excerpt: '最新のデジタルトレンドについてお話しするセミナーです。',
    },
    { 
      date: '2024.01.05', 
      title: '2024年度の新卒採用を開始いたしました', 
      category: '採用',
      excerpt: '一緒に成長していく仲間を募集しています。',
    },
  ];

  return (
    <section id="news" className="py-24 bg-gradient-to-b from-[#F9FCFF] to-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-20 right-4 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 bg-[#5AB1E0]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-4 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 bg-[#517CA2]/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-[1200px] mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#5AB1E0] uppercase tracking-wider mb-4">
            News
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-4">
            お知らせ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-[#E6EAEE] hover:border-[#5AB1E0] transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* 日付とカテゴリー */}
                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 flex-shrink-0">
                    <span className="text-base font-semibold text-[#517CA2] whitespace-nowrap">
                      {news.date}
                    </span>
                    <span className="inline-block text-sm bg-gradient-to-r from-[#5AB1E0] to-[#517CA2] text-white px-4 py-1.5 rounded-full whitespace-nowrap font-medium shadow-sm">
                      {news.category}
                    </span>
                  </div>
                  
                  {/* タイトルと説明 */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-[#2C3E50] mb-2 group-hover:text-[#517CA2] transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-[#919CB7] text-sm md:text-base">
                      {news.excerpt}
                    </p>
                  </div>
                  
                  {/* 矢印アイコン */}
                  <div className="flex-shrink-0 self-center">
                    <div className="w-10 h-10 rounded-full bg-[#F9FCFF] group-hover:bg-[#5AB1E0] flex items-center justify-center transition-colors">
                      <svg
                        className="w-5 h-5 text-[#517CA2] group-hover:text-white group-hover:translate-x-1 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* もっと見るボタン */}
        <div className="text-center mt-12">
          <a
            href="#news"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#517CA2] text-sm sm:text-base font-semibold rounded-full border-2 border-[#517CA2] hover:bg-[#517CA2] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            すべてのお知らせを見る
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

