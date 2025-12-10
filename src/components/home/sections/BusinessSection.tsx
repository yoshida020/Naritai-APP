'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';

export default function BusinessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false]);

  const services = [
    {
      title: '個人向けサービス',
      description: 'モヤモヤを言葉にする為の1on1。<br />次の一歩を一緒に。<br />キャリアに悩む20代後半～30代の社会人の方へ。国家資格を持つコーチが、あなたの思いを丁寧に引き出し、納得の行くキャリア選択をサポートします。',
      image: '/service01.png',
      link: 'https://www.naritai-career.com/',
    },
    {
      title: '法人向けサービス',
      description: '離職を防ぎ、納得感あるキャリアを育む<br />個人支援プログラム。<br />若手社員の離職防止とキャリア自立を支援。1on1コーチングを通じて、社員一人ひとりが自分らしいキャリアを描ける環境づくりをお手伝いします。',
      image: '/service02.png',
      link: '/corporate',
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

  useEffect(() => {
    if (!isVisible) return;

    // 1つのタイマーで両方のカードを表示（バッチ処理）
    const timer = setTimeout(() => setVisibleCards([true, true]), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="business" className="py-24 bg-white relative overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-16">
          <SectionTitle enTitle="Business" jaTitle="事業内容" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className={`group block transition-all duration-700 ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-[#F9FCFF]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-xl font-bold text-[#2C3E50] group-hover:text-[#517CA2] transition-colors relative w-fit">
                      {service.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#517CA2] transition-all duration-300 group-hover:w-full"></span>
                    </h3>
                    <svg
                      className="w-6 h-6 text-[#2C3E50] group-hover:text-[#517CA2] transition-all duration-300 group-hover:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <p className="text-base md:text-lg text-[#2C3E50] leading-relaxed">
                    {service.description.split('<br />').map((text, index, array) => (
                      <span key={index}>
                        {text}
                        {index < array.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

