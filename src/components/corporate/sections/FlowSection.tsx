'use client';

import { useEffect, useRef, useState } from 'react';
import { SectionTitle } from '@/components/common/SectionTitle';

export default function FlowSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const steps = [
    {
      number: '01',
      title: 'お問い合わせ',
      description: ['まずはお気軽に', 'お問い合わせください。'],
      image: '/images/flow/Contact.png',
    },
    {
      number: '02',
      title: 'ヒアリング',
      description: ['お客様の課題やニーズを', '詳しくヒアリングします。'],
      image: '/images/flow/Hearing.png',
    },
    {
      number: '03',
      title: '提案',
      description: ['お客様に最適なソリューション', 'を提案します。'],
      image: '/images/flow/Suggestion.png',
    },
    {
      number: '04',
      title: '実施・フォローアップ',
      description: ['プログラムを実施し、', '継続的にサポートします。'],
      image: '/images/flow/FollowUp.png',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="flow"
      className="relative w-full min-h-screen py-20 px-4 bg-blue-50 flex items-center justify-center md:min-h-screen md:py-16 md:px-4 overflow-hidden"
    >
      {/* --- 背景装飾（ワンポイント） --- */}
      
      {/* 左上の装飾: 開始を示す緩やかな波 */}
      <div className="hidden md:block absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"></div>
      
      {/* 右下の装飾: 完了を示すシェイプ */}
      <div className="hidden md:block absolute -bottom-20 -right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"></div>

      {/* （オプション）中央をつなぐ薄いライン（SVG） */}
      <svg className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block z-0" aria-hidden="true">
        <path 
          d="M0,10 Q400,50 800,10 T1600,10" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-blue-300" 
        />
      </svg>

      {/* --- メインコンテンツ（既存） --- */}
      <div className="max-w-[1200px] w-full mx-auto text-center relative z-10">
        <div className="mb-16">
          <SectionTitle enTitle="Flow" jaTitle="ご利用の流れ" />
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:gap-6 md:justify-between relative md:flex-wrap md:justify-center">
          {steps.map((step, index) => {
            // 登場アニメーションクラス（全デバイス共通）
            const entranceAnimClass = isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10';

            return (
            <div 
              key={index} 
              className={`
                w-full md:flex-1 md:min-w-0 md:max-w-[280px] lg:max-w-[240px] xl:max-w-[280px] flex flex-col items-center relative
                transition-all duration-700 ease-out
                ${entranceAnimClass}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* PC・タブレット版：アイコンをカードの外側上部に配置（円形背景付き） */}
              <div className="hidden md:flex w-40 h-40 md:w-48 md:h-48 flex items-center justify-center mb-4 flex-shrink-0 relative">
                <div className="absolute inset-[-8%] rounded-full bg-blue-100"></div>
                {step.image ? (
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover relative z-10" />
                ) : (
                  <span className="text-blue-600 text-xs relative z-10">画像</span>
                )}
              </div>
              
              {/* カード（モバイル版：最大幅400px、PC・タブレット版：正方形、横幅を小さく、レスポンシブ） */}
              <div className="w-full max-w-[400px] md:max-w-none md:w-[200px] md:h-[180px] lg:w-[220px] lg:h-[190px] lg:min-w-[220px] lg:max-w-[220px] lg:p-4 xl:w-[270px] xl:h-[200px] xl:min-w-[270px] xl:max-w-[270px] xl:p-5 flex flex-col items-center justify-center relative border border-black rounded-lg p-4 flex-shrink-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50 cursor-pointer">
              {/* モバイル版：左右レイアウト */}
              <div className="w-full flex flex-row items-center gap-4 md:hidden">
                {/* 左側：画像フィールド（円形背景付き） */}
                <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center relative">
                  <div className="absolute inset-[-8%] rounded-full bg-blue-100"></div>
                  {step.image ? (
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover relative z-10" />
                  ) : (
                    <span className="text-blue-600 text-xs relative z-10">画像</span>
                  )}
                </div>
                
                {/* 右側：STEP番号と本文（中央揃え） */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  {/* STEP番号表示（上部） */}
                  <div className="w-auto h-auto flex items-center justify-center bg-transparent text-[#517CA2] text-lg lg:text-lg xl:text-xl font-semibold mb-2">
                    STEP {step.number}
                  </div>
                  {/* タイトルと説明（下部） */}
                  <div className="flex flex-col items-center">
                    <h3 className="text-lg lg:text-lg xl:text-xl font-semibold text-[#2C3E50] mb-1 xl:tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm lg:text-sm xl:text-base leading-relaxed text-[#919CB7] text-center">
                        {Array.isArray(step.description) ? (
                          <>
                            {step.description[0]}
                            <br />
                            {step.description[1]}
                          </>
                        ) : (
                          step.description
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* PC・タブレット版：縦レイアウト */}
                <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:w-full md:h-full">
                  {/* STEP番号表示（上部） */}
                  <div className="w-auto h-auto flex items-center justify-center bg-transparent text-[#517CA2] text-lg lg:text-lg xl:text-xl font-semibold mb-2">
                    STEP {step.number}
                  </div>
                  {/* タイトルと説明（下部） */}
                  <div className="flex flex-col items-center">
                    <h3 className="text-lg lg:text-lg xl:text-xl font-semibold text-[#2C3E50] mb-1 xl:tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm lg:text-sm xl:text-base leading-relaxed text-[#919CB7] text-center">
                      {Array.isArray(step.description) ? (
                        <>
                          {step.description[0]}
                          <br />
                          {step.description[1]}
                        </>
                      ) : (
                        step.description
                      )}
                    </p>
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <>
                  {/* モバイル版：下向き矢印 */}
                  <div className="absolute bottom-[-48px] left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center md:hidden">
                  <img 
                    src="/images/flow/allow.png" 
                    alt="矢印" 
                    className="w-full h-full object-contain"
                  />
                </div>
                  {/* PC・タブレット版：左向き矢印（カードの中央に配置、レスポンシブ、少し低め） */}
                  <div className="hidden md:flex absolute right-[-36px] top-[calc(160px+16px+90px+10px)] lg:top-[calc(190px+20px+100px+10px)] xl:top-[calc(200px+20px+100px+10px)] transform -translate-y-1/2 w-12 h-12 items-center justify-center">
                    <img 
                      src="/images/flow/allow.png" 
                      alt="矢印" 
                      className="w-full h-full object-contain -rotate-90"
                    />
                  </div>
                </>
              )}
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}





