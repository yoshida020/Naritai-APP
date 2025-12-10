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
      answer: '私たちは、コンサルティング事業、システム開発、デジタルマーケティングなど、お客様のビジネス成長をサポートする多様なサービスを提供しています。お客様のニーズに合わせて、最適なソリューションをご提案いたします。',
    },
    {
      question: 'お問い合わせから対応までどのくらいかかりますか？',
      answer: 'お問い合わせいただいた内容により異なりますが、通常は2営業日以内にご返信いたします。緊急のご相談がございましたら、お電話でもお気軽にお問い合わせください。',
    },
    {
      question: '初回相談は無料ですか？',
      answer: 'はい、初回相談は無料で承っております。お客様のご要望や課題をお聞かせいただき、最適なソリューションをご提案させていただきます。お気軽にお問い合わせください。',
    },
    {
      question: '対応可能な業種はありますか？',
      answer: '様々な業種のお客様にご利用いただいております。製造業、小売業、サービス業、IT業界など、幅広い業種に対応可能です。まずはお気軽にご相談ください。',
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
                  {/* プラス/マイナスアイコンのアニメーション */}
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
