'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { newsItems } from '@/lib/news';
import { SectionTitle } from '@/components/common/SectionTitle';

export default function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const initialDisplayCount = 3;
  const displayedNews = newsItems.slice(0, initialDisplayCount);
  const remainingNews = newsItems.slice(initialDisplayCount);
  const hasMoreNews = remainingNews.length > 0;

  const parseDate = (dateString: string) => {
    const [year, month, day] = dateString.split('.');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekday = weekdays[date.getDay()];
    return {
      year: `${year}[${weekday}]`,
      monthDay: `${month}.${day}`,
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="news" className="py-24 bg-[#F0F0F0] relative overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto px-4">
        <div className="mb-8 lg:hidden">
          <SectionTitle enTitle="News" jaTitle="最新情報" />
        </div>

        <div className="bg-white rounded-xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
            <div className="hidden lg:flex lg:w-1/4 lg:justify-start py-6 border-r border-gray-200">
              <div className="relative">
                <div
                  className="text-4xl font-semibold text-gray-900 leading-relaxed [writing-mode:vertical-rl]"
                  style={{ fontFamily: 'Catchy Mager, serif' }}
                >
                  <span className="font-semibold inline-block pr-0 pb-2">
                    <span className="highlight-marker-vertical">
                      最新情報
                    </span>
                  </span>
                  <span className="text-xl font-normal mt-0 ml-4 block font-sans">News</span>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="space-y-0">
                {displayedNews.map((news, index) => {
                  const { year, monthDay } = parseDate(news.date);
                  return (
                    <div key={news.id}>
                      <Link
                        href={`/news/${news.id}`}
                        className="block group py-6"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                          <div className="flex-shrink-0">
                            <div className="text-xs text-[#202D5F] mb-1 font-sans">
                              {year}
                            </div>
                            <div className="text-2xl sm:text-3xl font-semibold text-[#202D5F] font-sans">
                              {monthDay}
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <h3 className="text-lg sm:text-xl font-normal text-gray-900 group-hover:text-gray-700 transition-colors font-sans relative inline-block pb-1">
                              {news.title}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#202D5F] group-hover:w-full transition-all duration-500 ease-in-out"></span>
                            </h3>
                            <p className="text-xs text-gray-500 mt-2 line-clamp-1">
                              {news.excerpt}
                            </p>
                          </div>
                        </div>
                      </Link>
                      {index < displayedNews.length - 1 && (
                        <div 
                          className="h-px relative"
                          style={{
                            backgroundImage: 'radial-gradient(circle, #202D5F 1px, transparent 1px)',
                            backgroundSize: '8px 1px',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'repeat-x',
                            opacity: 0.5
                          }}
                        ></div>
                      )}
                    </div>
                  );
                })}
              </div>

              {hasMoreNews && (
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    showAll 
                      ? 'max-h-[2000px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div 
                    className={`space-y-0 relative transition-all duration-500 ease-in-out ${
                      showAll 
                        ? 'translate-y-0 opacity-100' 
                        : '-translate-y-4 opacity-0'
                    }`}
                  >
                    <div 
                      className="h-px relative"
                      style={{
                        backgroundImage: 'radial-gradient(circle, #202D5F 1px, transparent 1px)',
                        backgroundSize: '8px 1px',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'repeat-x',
                        opacity: 0.5
                      }}
                    ></div>
                    {remainingNews.map((news, index) => {
                      const { year, monthDay } = parseDate(news.date);
                      return (
                        <div 
                          key={news.id}
                          className={`transition-all duration-500 ease-in-out ${
                            showAll 
                              ? 'translate-y-0 opacity-100' 
                              : '-translate-y-4 opacity-0'
                          }`}
                          style={{
                            transitionDelay: showAll ? `${index * 100}ms` : '0ms'
                          }}
                        >
                          <Link
                            href={`/news/${news.id}`}
                            className="block group py-6"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                              <div className="flex-shrink-0">
                                <div className="text-xs text-[#202D5F] mb-1 font-sans">
                                  {year}
                                </div>
                                <div className="text-2xl sm:text-3xl font-semibold text-[#202D5F] font-sans">
                                  {monthDay}
                                </div>
                              </div>

                              <div className="flex-1 pt-1">
                                <h3 className="text-lg sm:text-xl font-normal text-gray-900 group-hover:text-gray-700 transition-colors font-sans relative inline-block pb-1">
                                  {news.title}
                                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#202D5F] group-hover:w-full transition-all duration-500 ease-in-out"></span>
                                </h3>
                                <p className="text-sm text-gray-500 mt-2 line-clamp-1">
                                  {news.excerpt}
                                </p>
                              </div>
                            </div>
                          </Link>

                          {index < remainingNews.length - 1 && (
                            <div 
                              className="h-px relative"
                              style={{
                                backgroundImage: 'radial-gradient(circle, #d4e157 0.5px, transparent 0.5px)',
                                backgroundSize: '3px 1px',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'repeat-x',
                                opacity: 0.5
                              }}
                            ></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {hasMoreNews && (
                <div className={`mt-8 text-center transition-all duration-300 ${showAll ? 'opacity-100' : 'opacity-100'}`}>
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                      showAll
                        ? 'border-2 border-[#202D5F] text-[#202D5F] bg-white hover:bg-[#202D5F] hover:text-white hover:-translate-y-1'
                        : 'bg-gradient-to-r from-[#202D5F] to-[#3A4A7F] text-white hover:-translate-y-1'
                    }`}
                  >
                    <span>{showAll ? '閉じる' : 'もっと見る'}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={`ml-2 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

