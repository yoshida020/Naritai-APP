'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '../../common/Button';
import { SectionTitle } from '@/components/common/SectionTitle';

export default function PricingSection() {
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
      {
        threshold: 0.2,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  const plan = {
    name: '1カ月',
    price: '140,000～',
  };

  const features = [
    'キャリア開発支援',
    '月1回の面談',
    'レポート提供',
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="w-full min-h-screen px-4 flex items-center justify-center overflow-hidden md:py-16 md:px-4 md:overflow-visible"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center h-full flex flex-col justify-center py-8 md:h-auto md:py-0">
        <div className="mb-16">
          <SectionTitle enTitle="Pricing" jaTitle="料金" enColor="text-[#9DCBE8]" />
        </div>
        <div className="bg-white border-[3px] border-[#517CA2] rounded-3xl py-6 px-10 mb-8 text-center shadow-md max-w-[700px] mx-auto relative overflow-visible lg:py-6 lg:px-6 xl:py-4 xl:px-6 md:py-6 md:px-6 md:mb-8 md:border-2">
          <div className={`text-4xl font-bold text-[#2C3E50] mb-0 tracking-wide relative inline-block pb-1 z-[1] lg:text-3xl xl:text-2xl md:text-xl md:text-3xl ${isVisible ? 'animate-slide-in-from-top' : ''}`}>
            初期費用0
            <span className={`absolute bottom-0 left-0 h-[14px] bg-gradient-to-r from-yellow-400/80 to-yellow-400/40 rounded-sm -skew-y-1 z-0 pointer-events-none transition-all duration-500 ${isVisible ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '0s' }} />
          </div>
          <br />
          <div className={`text-4xl font-bold text-[#2C3E50] tracking-wide relative inline-block mt-4 pb-1 z-[1] lg:text-3xl xl:text-2xl md:text-xl md:text-3xl ${isVisible ? 'animate-slide-in-from-top' : ''}`}>
            今だけ毎月5社初回無料
            <span className={`absolute bottom-0 left-0 h-[14px] bg-gradient-to-r from-yellow-400/80 to-yellow-400/40 rounded-sm -skew-y-1 z-0 pointer-events-none transition-all duration-500 ${isVisible ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '0.3s' }} />
          </div>
        </div>
        
        <div className="flex justify-center mb-8 max-w-[1100px] mx-auto px-4">
          <div className="w-full max-w-[800px] flex flex-col gap-8">
            {/* プラン内容 */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-[#2C3E50] mb-4 text-center lg:text-3xl xl:text-4xl md:text-xl">
                プラン内容
              </h3>
              <ul className="list-none text-center m-0 p-0 flex flex-col sm:flex-row sm:justify-center sm:gap-6 gap-2">
                {features.map((feature, index) => (
                  <li key={index} className="py-2 text-lg text-[#2C3E50] lg:text-xl xl:text-2xl md:text-base md:py-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* 金額 */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-center flex flex-col items-center gap-2">
                <span className="text-2xl font-semibold text-[#2C3E50] lg:text-3xl xl:text-4xl md:text-base">
                  {plan.name}
                </span>
                <span className="text-5xl font-bold text-[#517CA2] leading-tight lg:text-6xl xl:text-7xl md:text-2xl">
                  {plan.price}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 md:mt-6">
          <div className="min-w-[200px] w-auto">
            <Button
              variant="primary"
              size="md"
            >
              お問い合わせ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
