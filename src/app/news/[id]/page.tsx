import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNewsById } from '@/lib/news';
import { Header, Footer, homeNavigationConfig } from '@/components/common/navigation';

interface NewsDetailPageProps {
  params: {
    id: string;
  };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const news = getNewsById(params.id);

  if (!news) {
    notFound();
  }

  return (
    <>
      <Header config={homeNavigationConfig} />
      <main>
        <article className="py-24 bg-white relative overflow-hidden min-h-screen">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#202D5F]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#202D5F]/5 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto px-4">
            <div className="mb-8">
              <Link
                href="/#news"
                className="inline-flex items-center text-[#202D5F] font-semibold hover:text-[#3A4A7F] transition-colors group"
              >
                <svg
                  className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                一覧に戻る
              </Link>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block px-4 py-2 text-sm font-semibold text-[#202D5F] bg-[#F0F2F8] rounded-full">
                  {news.category}
                </span>
                <span className="text-base text-[#919CB7]">
                  {news.date}
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-2xl font-bold text-[#202D5F] mb-8 leading-tight">
                {news.title}
              </h1>

              {/* 本文 */}
              <div className="prose prose-lg max-w-none">
                <div className="text-[#202D5F] leading-relaxed whitespace-pre-line text-base md:text-lg">
                  {news.content}
                </div>
              </div>

              <div className="my-12 border-t border-[#E6EAEE]"></div>

              <div className="text-center">
                <Link
                  href="/#news"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#202D5F] to-[#3A4A7F] text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  一覧に戻る
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer config={homeNavigationConfig} />
    </>
  );
}
