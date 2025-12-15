'use client';

import { useState, useEffect, useRef } from 'react';
import { SectionTitle } from '../SectionTitle';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: 'どのようなサービスを提供していますか？',
      answer: 'Z世代〜30代の社会人を対象としたキャリアコーチングと、企業向けの若手定着支援プログラムを提供しています。1on1の対話を通して、強み・価値観・キャリアの方向性を言語化し、「個人カルテ」として可視化することで、ご本人の納得感と、組織としての育成を両立します。',
    },
    {
      question: 'どのような課題をお持ちの方・企業に向いていますか？',
      answer: '「このまま今の会社にいていいのか不安」「頑張っているのに評価されていない気がする」と感じている20〜30代の方に多くご利用いただいています。企業様では、若手社員の早期離職やモチベーション低下、管理職の育成負担の増大にお悩みの人事・経営者の方に導入いただいています。',
    },
    {
      question: 'お問い合わせから実施までどのくらいかかりますか？',
      answer: '個人セッションは、日程が合えば 1〜2週間以内 の実施が可能です。法人プログラムは、ヒアリング〜ご提案まで通常 1〜2週間程度 を目安にしています。',
    },
    {
      question: '実施方法・エリアを教えてください。',
      answer: 'すべてオンライン（Zoom等）で実施しているため、全国どこからでもご利用いただけます。法人様向けには、オンラインに加えて、状況に応じて訪問でのご相談も承っています。',
    },
  ];

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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="relative max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8">
        {/* ヘッダー */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionTitle enTitle="FAQ" jaTitle="よくある質問" />
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
            <div 
              key={index}
              className={`bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-700 hover:shadow-md ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : `opacity-0 ${isEven ? '-translate-x-12' : 'translate-x-12'}`
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-bold text-[#2C3E50] group-hover:text-[#517CA2] transition-colors duration-300 pr-8">
                  {item.question}
                </span>
                <span className="relative flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#517CA2]/10 transition-colors duration-300">
                  <span className={`absolute w-4 h-0.5 bg-[#517CA2] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></span>
                  <span className={`absolute w-4 h-0.5 bg-[#517CA2] transition-transform duration-300 ${openIndex === index ? 'rotate-180 opacity-0' : 'rotate-90'}`}></span>
                </span>
              </button>
              
              <div 
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-0 text-[#4a5568] leading-relaxed">
                    <div className="pt-4 border-t border-gray-100">
                       {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
