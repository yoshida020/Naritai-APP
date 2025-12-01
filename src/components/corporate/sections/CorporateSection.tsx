'use client';

import { useEffect, useRef, useState } from 'react';

export default function CorporateSection() {
  const text = 'For Corporate';
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
  
  const renderAnimatedTitle = () => {
    return (
      <h2 className="corporate-section-title font-['Tangerine',cursive] text-[#2C3E50] mb-4 block md:mb-3">
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
    );
  };

  const effects = [
    {
      title: '人材定着',
      description: '早期離職を防ぎ、優秀な人材を定着させます。',
      image: '/humanResources.png',
    },
    {
      title: '静かな退職防止',
      description: (
        <>
          早期の気づきと対話で、
          <br />
          「気づいたら辞めていた」をなくします。
        </>
      ),
      image: '/quietDeparture.png',
    },
    {
      title: '組織全体の成長',
      description: '社員の成長が組織全体の成長につながります。',
      image: '/organization.png',
    },
    {
      title: '生産性向上',
      description: 'モチベーション向上により生産性が向上します。',
      image: '/productivity.png',
    },
    {
      title: '早期離職防止',
      description: '早期離職を防ぎ、優秀な人材を定着させます。',
      image: '/retirementPrevention.png',
    },
  ];

  return (
    <section
      id="corporate"
      className="w-full min-h-screen py-20 px-4 bg-gradient-to-b from-[#F8FAFF] to-[#EFF3FF] flex items-center justify-center md:min-h-auto md:py-16 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center" ref={containerRef}>
        {renderAnimatedTitle()}
        <p className="text-[26px] font-normal text-[#2C3E50] mb-12 md:text-[18px] md:mb-6">
          導入による効果
        </p>
        <div className="mt-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {effects.map((effect, index) => (
              <div 
                key={index} 
                className="group relative p-6 bg-[#F9FCFF] rounded-lg border border-[#E6EAEE] cursor-pointer md:p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* 画像 */}
                {effect.image ? (
                  <div className="w-full mb-4 rounded-lg overflow-hidden flex items-center justify-center min-h-[120px] md:min-h-[160px] lg:min-h-[192px]">
                    <img 
                      src={effect.image} 
                      alt={effect.title} 
                      className="w-full h-auto max-h-[200px] md:max-h-[240px] lg:max-h-[280px] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="w-full min-h-[120px] md:min-h-[160px] lg:min-h-[192px] mb-4 bg-[#F9FCFF] rounded-lg flex items-center justify-center border border-[#E6EAEE]">
                    <span className="text-[#919CB7] text-xs">画像スペース</span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-[#517CA2] mb-4 group-hover:text-[#5AB1E0] transition-colors">
                  {effect.title}
                </h3>
                <p className="text-base leading-relaxed text-[#2C3E50]">
                  {effect.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

