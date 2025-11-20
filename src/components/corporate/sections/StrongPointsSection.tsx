'use client';

import { useEffect, useRef, useState } from 'react';

export default function StrongPointsSection() {
  const text = 'Strong Points';
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const points = [
    {
      title: 'カルテ化による「再現性ある育成」',
      description: (
        <>
          可視化することで、感覚や属人的な育成に頼らず、
          <br />
          誰でも同じ質で育成できる仕組みを実現。
        </>
      ),
    },
    {
      title: 'Z世代に特化した"共感型コーチング"',
      description: (
        <>
          上から「指導」するのではなく、同じ目線で「伴走」。
          <br />
          Z世代特有の自己理解の浅さや言語化の難しさに寄り添いながら、
          <br />
          自分の「納得感」を軸に成長できるよう支援します。
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

  return (
    <section 
      id="strong-points" 
      className="w-full h-screen min-h-screen max-h-screen py-20 px-4 bg-[#F9FCFF] flex items-center justify-center md:min-h-auto md:py-16 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center" ref={containerRef}>
        <h2 className="font-['Tangerine',cursive] text-[75px] font-bold text-[#2C3E50] mb-4 block md:text-[36px] md:mb-3 md:leading-[1.2]">
          {text.split('').map((char, i) => (
            <span
              key={i}
              className={`inline-block opacity-0 -translate-y-[30px] ${isVisible ? 'animate-slide-in-from-top' : ''}`}
              style={{
                animationDelay: `${i * 0.06}s`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>
        <p className="text-[26px] font-normal text-[#2C3E50] mb-12 md:text-[18px] md:mb-6">
          私たちの強み
        </p>
        <div className="grid grid-cols-3 gap-8 md:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 md:gap-6">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="p-8 bg-white rounded-2xl shadow-md transition-all cursor-pointer hover:-translate-y-1 hover:shadow-lg md:p-6 lg:hover:translate-y-0 lg:hover:shadow-md"
            >
              <div className="w-[60px] h-[60px] mx-auto mb-4 flex items-center justify-center bg-[#517CA2] text-white rounded-full text-2xl font-bold md:w-[50px] md:h-[50px] md:text-xl">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">
                {point.title}
              </h3>
              <p className="text-base leading-relaxed text-[#919CB7]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

