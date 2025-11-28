'use client';

import { useEffect, useRef, useState } from 'react';

export default function StrongPointsSection() {
  const points = [
    {
      title: 'カルテ化による「再現性ある育成」',
      image: '/Whisk_d4b7e0ce9e01155a5d044813687a9fb6eg.png',
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
      title: 'Z世代に特化した"共感型コーチング"',
      image: '/Whisk_926ab63a6059f709874449a5a8ce97c0dr.jpeg',
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
      image: '/Whisk_d0b896c0752c00cbfe74126fc3a6d469dr.jpeg',
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
      className="w-full py-16 px-4 bg-[#F9FCFF] flex justify-center md:py-20 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center md:max-w-full">
        <h2 className="corporate-section-title text-[#2C3E50] mb-12 md:mb-6">
          私たちの強み
        </h2>
        {/* モバイル版：縦並び */}
        <div className="grid grid-cols-1 gap-8 place-items-center sm:hidden">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="w-full max-w-[320px] mx-auto flex flex-col text-left"
            >
              <div className="w-full mb-4 h-[200px] flex items-center justify-center overflow-hidden">
                <img 
                  src={point.image} 
                  alt={point.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#517CA2] mb-4 pb-4 border-b-2 border-[#517CA2] text-center">
                {point.title}
              </h3>
              <p className="text-base leading-relaxed text-[#2C3E50] pt-4 mb-8 md:mb-0">
                {point.description}
              </p>
            </div>
          ))}
        </div>
        {/* PC版：左右交互配置 */}
        <div className="hidden sm:flex sm:flex-col sm:gap-12 sm:w-full">
          {points.map((point, index) => {
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
                    src={point.image} 
                    alt={point.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* テキスト */}
                <div className="flex-1 flex flex-col text-left">
                  <h3 className="text-[22px] md:text-[28px] font-semibold text-[#517CA2] mb-4 pb-4 border-b-2 border-[#517CA2] text-center">
                    {point.title}
                  </h3>
                  <p className="text-[18px] md:text-[24px] leading-relaxed text-[#2C3E50] pt-4 text-center">
                    {point.description}
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

