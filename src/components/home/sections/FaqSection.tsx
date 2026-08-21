'use client';

import { useState, useEffect, useRef } from 'react';
import { SectionTitle } from '@/components/common/SectionTitle';

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
      answer: '大きく2つの事業を提供しています。ひとつは、経営者のための「Z世代顧問」。Z世代の当事者が、社長の判断材料として、若手のリアルな視点や時代の変化の捉え方をお伝えする相談役です。<br />もうひとつは、企業向けの「成長カルテ」。若手一人ひとりの本音やキャリア観を“カルテ”として可視化し、1on1を社内で回せるよう支援することで、人材への投資の回収率（定着・戦力化）を引き上げます。',
    },
    {
      question: 'どのような課題をお持ちの方・企業に向いていますか？',
      answer: '「自社のやり方が今の時代に合っているか不安」と感じる経営者の方に、Z世代顧問をご活用いただいています。<br />若手社員の早期離職やモチベーション低下、管理職の面談・育成負担の増大にお悩みの人事・経営者の方には、成長カルテによる可視化と、1on1の内製化をご提案しています。',
    },
    {
      question: 'お問い合わせから実施までどのくらいかかりますか？',
      answer: '現状のヒアリングからご提案まで、通常1〜2週間程度を目安にしています。',
    },
    {
      question: '実施方法・エリアを教えてください。',
      answer: 'すべてオンライン（Zoom等）で対応しているため、全国どこからでもご利用いただけます。',
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
                       {item.answer.split('<br />').map((text, i, array) => (
                         <span key={i}>
                           {text}
                           {i < array.length - 1 && <br />}
                         </span>
                       ))}
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
