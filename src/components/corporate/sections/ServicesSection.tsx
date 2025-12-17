'use client';

import { useEffect, useRef, useState } from 'react';
import { SectionTitle } from '@/components/common/SectionTitle';

export default function ServicesSection() {
  const services = [
    {
      title: '個人コーチングセッション',
      image: '/images/services/service01.png',
      description: (
        <>
          若手社員1人ひとりに専属コーチが伴走し、
          <br />
          価値観・不安・強み・目標を整理。
        </>
      ),
    },
    {
      title: 'カルテ設計・可視化シート',
      image: '/images/services/service02.png',
      description: (
        <>
          各セッションで抽出した想いや目標を「個人カルテ」にまとめ、
          <br />
          上司・人事に共有できる形で可視化します。
          <br />
          配属後の1on1・評価・育成にそのまま活用可能。
          <br />
          <br />
          外部の人間だから本音を話せる環境を提供します。
        </>
      ),
    },
    {
      title: 'フォローアップセッション',
      image: '/images/services/service03.jpeg',
      description: (
        <>
          セッションから一定期間後に再面談を実施。
          <br />
          成長の定着やモチベーション変化を確認し、
          <br />
          現場への適応・再設定を支援します。
        </>
      ),
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="w-full py-16 px-4 bg-[#F9FCFF] flex justify-center md:py-20 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center md:max-w-full">
        <div className="mb-16">
          <SectionTitle enTitle="Services" jaTitle="サービス内容" enColor="text-[#9DCBE8]" />
        </div>
        {/* モバイル版：縦並び */}
        <div className="grid grid-cols-1 gap-8 place-items-center sm:hidden">
          {services.map((service, index) => {
            // PC版と同じタイミング制御を適用
            // 順番に表示: 1.写真(0) → 2.テキスト(0) → 3.写真(1) → 4.テキスト(1) → 5.写真(2) → 6.テキスト(2)
            let imageDelay, textDelay;
            if (index === 0) {
              // 1つ目: 写真 → テキスト
              imageDelay = 0;
              textDelay = 1500; // 1.2s（アニメーション時間）+ 300ms（間隔）
            } else if (index === 1) {
              // 2つ目: 写真 → テキスト
              imageDelay = 3000; // 前のテキスト（1500ms開始 + 1200msアニメーション）+ 300ms
              textDelay = 4500; // 前の写真終了 + 300ms
            } else {
              // 3つ目: 写真 → テキスト
              imageDelay = 6000; // 前のテキスト終了 + 300ms
              textDelay = 7500; // 前の写真終了 + 1500ms
            }
            
            // PC版と同じように交互に左右から登場
            const isEven = index % 2 === 0;
            const imageFromLeft = isEven;
            const textFromLeft = isEven;
            
            return (
              <div 
                key={index} 
                className="w-full max-w-[280px] mx-auto flex flex-col text-left"
              >
                <div 
                  className="w-full mb-4 h-[200px] flex items-center justify-center overflow-hidden"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? 'translateX(0)' 
                      : `translateX(${imageFromLeft ? '-100px' : '100px'})`,
                    transitionDelay: `${imageDelay}ms`,
                    transition: 'opacity 1.2s ease, transform 1.2s ease',
                  }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? 'translateX(0)' 
                      : `translateX(${textFromLeft ? '-100px' : '100px'})`,
                    transitionDelay: `${textDelay}ms`,
                    transition: 'opacity 1.2s ease, transform 1.2s ease',
                  }}
                >
                  <h3 className="text-2xl font-semibold text-[#517CA2] mb-4 pb-4 border-b-2 border-[#517CA2] text-center">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#2C3E50] pt-4 mb-8 md:mb-0">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* PC版：左右交互配置 */}
        <div className="hidden sm:flex sm:flex-col sm:gap-12 sm:w-full">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            // 左側の要素（画像が左の場合は画像、テキストが左の場合はテキスト）は左から
            // 右側の要素（画像が右の場合は画像、テキストが右の場合はテキスト）は右から
            const imageFromLeft = isEven; // 偶数インデックスは画像が左
            const textFromLeft = !isEven; // 奇数インデックスはテキストが左
            
            // 順番に表示: 1.写真(0) → 2.テキスト(0) → 3.テキスト(1) → 4.写真(1) → 5.写真(2) → 6.テキスト(2)
            // アニメーション時間が1.2sなので、前の要素が完全に表示されてから次の要素を表示
            let imageDelay, textDelay;
            if (index === 0) {
              // 1つ目: 写真 → テキスト
              imageDelay = 0;
              textDelay = 1500; // 1.2s（アニメーション時間）+ 300ms（間隔）
            } else if (index === 1) {
              // 2つ目: テキスト → 写真
              textDelay = 3000; // 前のテキスト（1500ms開始 + 1200msアニメーション）+ 300ms
              imageDelay = 4500; // 前のテキスト終了 + 300ms
            } else {
              // 3つ目: 写真 → テキスト
              imageDelay = 6000; // 前の写真終了 + 300ms
              textDelay = 7500; // 前の写真終了 + 1500ms
            }
            
            return (
              <div 
                key={index} 
                className="flex flex-row items-center gap-16 w-full"
                style={{
                  flexDirection: isEven ? 'row' : 'row-reverse'
                }}
              >
                {/* 画像 */}
                <div 
                  className="flex-shrink-0 w-[40%] aspect-[4/3] flex items-center justify-center overflow-hidden"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? 'translateX(0)' 
                      : `translateX(${imageFromLeft ? '-100px' : '100px'})`,
                    transitionDelay: `${imageDelay}ms`,
                    transition: 'opacity 1.2s ease, transform 1.2s ease',
                  }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* テキスト */}
                <div 
                  className="flex-1 flex flex-col text-left"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? 'translateX(0)' 
                      : `translateX(${textFromLeft ? '-100px' : '100px'})`,
                    transitionDelay: `${textDelay}ms`,
                    transition: 'opacity 1.2s ease, transform 1.2s ease',
                  }}
                >
                  <h3 className="text-[28px] md:text-[36px] font-semibold text-[#517CA2] mb-4 pb-4 border-b-2 border-[#517CA2] text-center">
                    {service.title}
                  </h3>
                  <p className="text-[18px] md:text-[24px] leading-relaxed text-[#2C3E50] pt-4 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}





