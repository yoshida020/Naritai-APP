'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '../../common/Button';
import { SectionTitle } from '../../home/SectionTitle';

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
  const plans = [
    {
      name: '3か月',
      price: '150,000円',
      period: '',
      monthlyPrice: '50,000',
    },
    {
      name: '6か月',
      price: '270,000円',
      period: '',
      monthlyPrice: '45,000',
    },
    {
      name: '12か月',
      price: '480,000円',
      period: '',
      monthlyPrice: '40,000',
    },
  ];

  const features = [
    'キャリア開発支援',
    '月1回の面談',
    'レポート提供',
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="w-full min-h-screen px-4 bg-[#202D5F] flex items-center justify-center overflow-hidden md:py-16 md:px-4 md:overflow-visible"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center h-full flex flex-col justify-center py-8 md:h-auto md:py-0">
        <div className="mb-8 md:mb-6">
          <SectionTitle enTitle="Pricing" jaTitle="料金" titleColor="text-white" enColor="text-white/5" />
        </div>
        <div className="bg-gradient-to-br from-[#517CA2] to-white/10 border-[3px] border-[#517CA2] rounded-3xl py-6 px-10 mb-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.3)] max-w-[700px] mx-auto relative overflow-visible lg:py-6 lg:px-6 xl:py-4 xl:px-6 md:py-6 md:px-6 md:mb-8 md:border-2">
          <div className={`text-4xl font-bold text-white mb-0 tracking-wide relative inline-block pb-1 z-[1] lg:text-3xl xl:text-2xl md:text-xl md:text-3xl ${isVisible ? 'animate-slide-in-from-top' : ''}`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            初期費用0
            <span className={`absolute bottom-0 left-0 h-[14px] bg-gradient-to-r from-yellow-400/80 to-yellow-400/40 rounded-sm -skew-y-1 z-0 pointer-events-none transition-all duration-500 ${isVisible ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '0s' }} />
          </div>
          <br />
          <div className={`text-4xl font-bold text-white tracking-wide relative inline-block mt-4 pb-1 z-[1] lg:text-3xl xl:text-2xl md:text-xl md:text-3xl ${isVisible ? 'animate-slide-in-from-top' : ''}`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            今だけ毎月5社初回無料
            <span className={`absolute bottom-0 left-0 h-[14px] bg-gradient-to-r from-yellow-400/80 to-yellow-400/40 rounded-sm -skew-y-1 z-0 pointer-events-none transition-all duration-500 ${isVisible ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '0.3s' }} />
          </div>
        </div>
        
        <div className="flex flex-col gap-6 items-stretch justify-center mb-8 max-w-[1100px] mx-auto px-4 lg:flex-row lg:gap-8 xl:gap-6 md:mb-8">
          <div className="p-6 bg-white/5 rounded-2xl w-full max-w-full flex flex-col lg:flex-[0_0_240px] lg:max-w-[240px] lg:p-4 xl:flex-[0_0_200px] xl:max-w-[200px] xl:p-3">
            <h3 className="text-2xl font-semibold text-white mb-4 text-center lg:text-xl xl:text-lg md:text-base md:text-xl md:mb-4">
              プラン内容
            </h3>
            <ul className="list-none text-center m-0 p-0">
              {features.map((feature, index) => (
                <li key={index} className="py-2 text-lg text-white border-b border-white/20 last:border-b-0 md:text-base md:py-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center w-full max-w-full items-stretch lg:flex-1 lg:min-w-[480px] lg:max-w-[800px] xl:max-w-[700px]">
            <div className="flex flex-col w-full">
              <div className="pt-[calc(32px+60px)] px-6 pb-8 bg-white rounded-3xl shadow-lg flex flex-col items-stretch gap-4 transition-all flex-grow w-full max-w-full box-border overflow-visible mx-auto md:pt-9 md:px-6 md:pb-3 lg:flex-row lg:items-stretch lg:justify-around lg:gap-4 lg:pt-[calc(24px+50px)] lg:px-5 lg:pb-6 xl:pt-[calc(20px+45px)] xl:px-4 xl:pb-5">
                {plans.map((plan, index) => (
                  <div key={index} className="flex flex-col items-center justify-center flex-1 p-4 min-w-0 relative lg:p-3 xl:p-2 md:p-3 md:rounded-lg md:w-full md:overflow-visible">
                    <div className="text-center m-0 flex flex-col items-center gap-2 md:flex-row md:justify-center md:items-baseline md:gap-4">
                      <span className="text-2xl font-semibold text-[#2C3E50] mb-0 block relative lg:text-xl xl:text-lg md:text-base md:flex-shrink-0 md:static">
                        {plan.name}
                        {plan.monthlyPrice && (
                          <div className="absolute -top-[45px] left-1/2 -translate-x-1/2 bg-[#517CA2] text-white py-2 px-4 rounded-lg text-sm font-semibold whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.15)] z-10 lg:-top-[40px] xl:-top-[32px] xl:py-1 xl:px-3 xl:rounded-md xl:text-xs xl:max-w-[calc(100vw-32px)] md:-top-8">
                            ひと月あたり<span className="font-semibold">{plan.monthlyPrice}円</span>/月
                            <div 
                              className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0"
                              style={{
                                borderLeft: '6px solid transparent',
                                borderRight: '6px solid transparent',
                                borderTop: '6px solid #517CA2'
                              }}
                            />
                          </div>
                        )}
                      </span>
                      <span className="text-5xl font-bold text-[#517CA2] leading-tight relative whitespace-nowrap lg:text-4xl xl:text-3xl md:text-2xl md:flex-shrink-0 md:whitespace-normal md:text-center">
                        {plan.price}
                      </span>
                    </div>
                  </div>
                ))}
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
