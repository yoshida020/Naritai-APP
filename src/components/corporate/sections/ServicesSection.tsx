'use client';

import { useEffect, useRef, useState } from 'react';

export default function ServicesSection() {
  const services = [
    {
      title: '個人コーチングセッション',
      image: '/service01.png',
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
      image: '/service02.png',
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
      image: '/service03.jpeg',
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
        <h2 className="corporate-section-title text-[#2C3E50] mb-12 md:mb-6">
          サービス内容
        </h2>
        {/* モバイル版：縦並び */}
        <div className="grid grid-cols-1 gap-8 place-items-center sm:hidden">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="w-full max-w-[320px] mx-auto flex flex-col text-left"
            >
              <div className="w-full mb-4 h-[200px] flex items-center justify-center overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#517CA2] mb-4 pb-4 border-b-2 border-[#517CA2] text-center">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-[#2C3E50] pt-4 mb-8 md:mb-0">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        {/* PC版：左右交互配置 */}
        <div className="hidden sm:flex sm:flex-col sm:gap-12 sm:w-full">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className="flex flex-row items-center gap-16 w-full"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible 
                    ? `translateY(0)` 
                    : `translateY(30px)`,
                  transitionDelay: `${index * 100}ms`,
                  transition: 'opacity 0.7s ease, transform 0.7s ease',
                  flexDirection: isEven ? 'row' : 'row-reverse'
                }}
              >
                {/* 画像 */}
                <div className="flex-shrink-0 w-[45%] aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* テキスト */}
                <div className="flex-1 flex flex-col text-left">
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





