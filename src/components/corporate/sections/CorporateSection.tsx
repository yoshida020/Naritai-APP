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
    );
  };

  return (
    <section 
      id="corporate" 
      className="w-full h-screen min-h-screen max-h-screen py-20 px-4 bg-white flex items-center justify-center md:min-h-auto md:py-16 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center" ref={containerRef}>
        {renderAnimatedTitle()}
        <p className="text-[26px] font-normal text-[#2C3E50] mb-12 md:text-[18px] md:mb-6">
          実現できること
        </p>
        <div>
          <p className="text-xl leading-relaxed text-[#2C3E50] mb-12 max-w-[800px] mx-auto md:text-base md:mb-8 md:leading-[1.7]">
            企業の成長を支える人材育成ソリューションを提供します。
            <br />
            若手社員の定着と成長を通じて、組織全体の活性化を実現します。
          </p>
          <div className="grid grid-cols-5 gap-6 md:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 md:gap-4">
            <div className="p-6 bg-[#F9FCFF] rounded-lg border border-[#E6EAEE] cursor-pointer md:p-5">
              <h3 className="text-xl font-semibold text-[#517CA2] mb-4">
                人材定着
              </h3>
              <p className="text-base leading-relaxed text-[#2C3E50]">
                早期離職を防ぎ、優秀な人材を定着させます。
              </p>
            </div>
            <div className="p-6 bg-[#F9FCFF] rounded-lg border border-[#E6EAEE] cursor-pointer md:p-5">
              <h3 className="text-xl font-semibold text-[#517CA2] mb-4">
                静かな退職防止
              </h3>
              <p className="text-base leading-relaxed text-[#2C3E50]">
                早期離職を防ぎ、優秀な人材を定着させます。
              </p>
            </div>
            <div className="p-6 bg-[#F9FCFF] rounded-lg border border-[#E6EAEE] cursor-pointer md:p-5">
              <h3 className="text-xl font-semibold text-[#517CA2] mb-4">
                組織全体の成長
              </h3>
              <p className="text-base leading-relaxed text-[#2C3E50]">
                社員の成長が組織全体の成長につながります。
              </p>
            </div>
            <div className="p-6 bg-[#F9FCFF] rounded-lg border border-[#E6EAEE] cursor-pointer md:p-5">
              <h3 className="text-xl font-semibold text-[#517CA2] mb-4">
                生産性向上
              </h3>
              <p className="text-base leading-relaxed text-[#2C3E50]">
                モチベーション向上により生産性が向上します。
              </p>
            </div>
            <div className="p-6 bg-[#F9FCFF] rounded-lg border border-[#E6EAEE] cursor-pointer md:p-5">
              <h3 className="text-xl font-semibold text-[#517CA2] mb-4">
                早期離職防止
              </h3>
              <p className="text-base leading-relaxed text-[#2C3E50]">
                早期離職を防ぎ、優秀な人材を定着させます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

