'use client';

import { useEffect, useRef, useState } from 'react';
import { SectionTitle } from '@/components/common/SectionTitle';

export default function StrongPointsSection() {
  const points = [
    {
      title: (
        <>
          カルテ化による
          <br />
          「再現性ある育成」
        </>
      ),
      description: (
        <>
          可視化することで、
          <br />
          感覚や属人的な育成に頼らず、
          <br />
          誰でも同じ質で
          <br />
          育成できる仕組みを実現。
        </>
      ),
    },
    {
      title: (
        <>
          Z世代に特化した
          <br />
          "共感型コーチング"
        </>
      ),
      description: (
        <>
          上から「指導」するのではなく、
          <br />
          同じ目線で「伴走」。
          <br />
          <br />
          Z世代特有の自己理解の浅さや
          <br />
          言語化の難しさに寄り添いながら、
          <br />
          自分の「納得感」を軸に
          <br />
          成長できるよう支援します。
        </>
      ),
    },
    {
      title: '代弁者',
      description: (
        <>
          若手が「本当は言いたいこと」。
          <br />
          上司が「本当は聞きたいこと」。
          <br />
          その間に立ち、私たちが代弁します。
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
      id="strong-points" 
      className="w-full py-16 px-4 md:py-24 xl:py-32"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center">
        {/* タイトル（共通） */}
        <div className={`mb-16 ${isVisible ? 'hero-slide-up' : ''}`}>
          <SectionTitle enTitle="Strengths" jaTitle="私たちの強み" enColor="text-[#9DCBE8]" />
        </div>
        {/* モバイル版：縦並び（1300px未満） */}
        <div className="grid grid-cols-1 place-items-center xl:hidden gap-12 md:gap-16">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="w-full max-w-[320px] mx-auto flex flex-col text-left relative bg-white rounded-lg p-6"
            >
              {/* ナンバリング - カードの背景 */}
              <div 
                className="absolute font-bold"
                style={{
                  fontSize: '120px',
                  lineHeight: '1',
                  top: '20px',
                  right: '20px',
                  zIndex: 0,
                  opacity: 0.12,
                  color: '#F97316' // 鮮やかなオレンジ（orange-500相当）
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-semibold text-[#517CA2] mb-4 text-center relative z-10">
                {point.title}
              </h3>
              <p className="text-base leading-relaxed text-[#2C3E50] relative z-10 text-center">
                {point.description}
              </p>
            </div>
          ))}
        </div>
        {/* PC版（1300px以上） */}
        <div className="hidden xl:block">
          {/* カード */}
          <div className="relative w-full flex justify-center" style={{ minHeight: '700px' }}>
            {points.map((point, index) => {
              const isEven = index % 2 === 0;
              // 右左右の配置を維持しつつ、中央寄せにする
              const offsetX = isEven ? 350 : -350; // 右、左、右の配置（距離をさらに広げる）
              // 1番目と3番目のカード（右側）は高さ方向にも離す
              const offsetY = isEven ? index * 200 : index * 50; // 右側のカードは高さ方向に200px間隔
              return (
                <div 
                  key={index} 
                  className="absolute"
                  style={{
                    transform: `translate(${offsetX}px, ${offsetY}px)`,
                    left: '50%',
                    marginLeft: '-250px', // カード幅の半分で中央に配置
                    zIndex: points.length - index
                  }}
                >
                  {/* テキストカード */}
                  <div className="group w-[500px] flex flex-col text-left relative bg-white rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden">
                    {/* ナンバリング - カードの背景 */}
                    <div 
                      className="absolute font-bold transition-all duration-300"
                      style={{
                        fontSize: '180px',
                        lineHeight: '1',
                        top: '20px',
                        right: '20px',
                        zIndex: 0,
                        opacity: 0.12,
                        color: '#F97316' // 鮮やかなオレンジ（orange-500相当）
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-[22px] md:text-[28px] font-semibold text-[#517CA2] mb-4 text-center relative z-10 transition-colors duration-300 group-hover:text-[#5AB1E0]">
                      {point.title}
                    </h3>
                    <p className="text-[18px] md:text-[24px] leading-relaxed text-[#2C3E50] text-center relative z-10 transition-opacity duration-300 group-hover:opacity-90">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

