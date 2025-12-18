'use client';

import { useState, useRef, useEffect } from 'react';
import { SectionTitle } from '@/components/common/SectionTitle';

export default function BusinessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const businessItems = [
    {
      image: '/images/services/service01.png',
      text: '事業1',
    },
    {
      image: '/images/services/service02.png',
      text: '事業2',
    },
    {
      image: '/images/services/service03.jpeg',
      text: '事業3',
    },
    {
      image: '/images/services/service01.png',
      text: '事業4',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="business"
      className="w-full min-h-screen py-20 px-4 bg-[#F9FCFF] flex items-center justify-center md:py-12 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center flex flex-col items-center">
        <div className="mb-16">
          <SectionTitle enTitle="Business" jaTitle="事業紹介" enColor="text-[#9DCBE8]" />
        </div>
        {/* 説明エリア全体（左右の余白を含む） */}
        <div className="relative w-full mb-40 md:mb-48 overflow-visible">
          {/* 右上の背景画像（事業2） */}
          <div className="absolute -top-32 right-0 w-72 h-72 md:-top-40 md:w-96 md:h-96 opacity-60 z-0 pointer-events-none">
            <img
              src="/images/services/service02.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          {/* 左下の背景画像（事業1） */}
          <div className="absolute -bottom-32 left-0 w-72 h-72 md:-bottom-40 md:w-96 md:h-96 opacity-60 z-0 pointer-events-none">
            <img
              src="/images/services/service01.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          {/* 説明テキスト */}
          <p className="relative max-w-[360px] md:max-w-[500px] mx-auto leading-relaxed text-black text-center text-lg md:text-2xl z-10">
            事業内容紹介テキスト事業内容紹介テキスト事業内容紹介テキスト事業内容紹介テキスト事業内容紹介テキスト事業内容紹介テキスト事業内容紹介テキスト事業内容紹介テキスト事業内容紹介テキスト事業内容紹介テキスト事業内容紹介テキスト事業内容紹介テキスト事業内容紹介テキスト事業内容紹介テキスト事業内容紹介テキスト事業内容紹介テキスト
          </p>
        </div>
        
        {/* モバイル版: 2×2グリッド */}
        <div className="grid grid-cols-2 gap-4 w-full md:hidden">
          {businessItems.map((item, index) => {
            const animationClasses = isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8';
            
            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`flex flex-col items-center transition-all duration-700 ease-out ${animationClasses}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-full aspect-square flex items-center justify-center overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-[#2C3E50] mt-4 text-center leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* PC版: 横並び（4列） */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-6 w-full">
          {businessItems.map((item, index) => {
            const animationClasses = isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8';
            
            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`flex flex-col items-center transition-all duration-700 ease-out group ${animationClasses}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-full aspect-square flex items-center justify-center overflow-hidden rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="text-base text-[#2C3E50] mt-4 text-center leading-relaxed transition-colors duration-300 group-hover:text-[#517CA2]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

