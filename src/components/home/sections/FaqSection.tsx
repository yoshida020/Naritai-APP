'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#5AB1E0]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#517CA2]/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-[1200px] mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#5AB1E0] uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-4">
            よくある質問
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-[#919CB7] max-w-2xl mx-auto">
            お客様からよくいただくご質問と回答をまとめました
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="group border-2 border-[#E6EAEE] rounded-xl overflow-hidden bg-white hover:border-[#5AB1E0] hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 md:p-8 text-left flex justify-between items-center hover:bg-[#F9FCFF] transition-colors"
              >
                <span className="text-lg md:text-xl font-semibold text-[#2C3E50] pr-4 group-hover:text-[#517CA2] transition-colors">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-[#F9FCFF] group-hover:bg-[#5AB1E0] flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-[#5AB1E0]' : ''
                }`}>
                  <svg
                    className={`w-5 h-5 text-[#517CA2] transition-all duration-300 ${
                      openIndex === index ? 'rotate-180 text-white' : 'group-hover:text-white'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 md:p-8 pt-0 bg-[#F9FCFF] border-t border-[#E6EAEE]">
                  <p className="text-base md:text-lg text-[#2C3E50] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 追加のサポート */}
        <div className="mt-12 text-center">
          <p className="text-[#919CB7] mb-4">
            他にご質問がございましたら、お気軽にお問い合わせください
          </p>
          <a
            href="#contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#517CA2] to-[#5AB1E0] text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            お問い合わせはこちら
          </a>
        </div>
      </div>
    </section>
  );
}

