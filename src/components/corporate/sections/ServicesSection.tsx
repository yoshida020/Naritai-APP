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
        {/* モバイル版：縦並び（変更なし） */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 place-items-center md:hidden">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="w-full max-w-[320px] h-[520px] sm:h-[540px] mx-auto bg-white rounded-t-[220px] rounded-b-[32px] shadow-lg transition-all cursor-pointer lg:hover:-translate-y-1 lg:hover:shadow-xl flex flex-col text-left overflow-hidden"
            >
              <div className="w-full h-44 bg-[#E3EFF7] flex items-end justify-center rounded-t-[220px]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover rounded-t-[220px]"
                />
              </div>
              <div className="flex-1 px-8 py-6 flex flex-col overflow-hidden">
                <h3 className="text-2xl font-semibold text-[#517CA2] mb-4 md:text-xl">
                {service.title}
                </h3>
                <p className="text-base leading-relaxed text-[#2C3E50] overflow-hidden">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* PC版：横並び（5つ対応） */}
        <div className="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-6 md:w-full md:flex-nowrap">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[280px] h-[520px] bg-white rounded-t-[220px] rounded-b-[32px] shadow-lg transition-all duration-700 cursor-pointer hover:-translate-y-1 hover:shadow-xl flex flex-col text-left overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? `translateY(0) translateX(0)` 
                  : `translateY(30px) translateX(${(index - 2) * 20}px)`,
                transitionDelay: `${index * 100}ms`,
                flexShrink: 0
              }}
            >
              <div className="w-full h-44 bg-[#E3EFF7] flex items-end justify-center rounded-t-[220px]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover rounded-t-[220px]"
                />
              </div>
              <div className="flex-1 px-8 py-6 flex flex-col overflow-hidden">
                <h3 className="text-2xl font-semibold text-[#517CA2] mb-4">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-[#2C3E50] overflow-hidden">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





