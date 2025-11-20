'use client';

import { useEffect, useRef, useState } from 'react';

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
      className="w-full h-screen min-h-screen max-h-screen py-20 px-4 bg-[#202D5F] flex items-center justify-center md:h-auto md:min-h-auto md:max-h-none md:py-16 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12 md:text-3xl lg:text-2xl md:mb-8 md:mb-6 md:text-2xl md:mb-6 md:leading-[1.3]">
          料金
        </h2>
        <div className="bg-gradient-to-br from-[#517CA2] to-white/10 border-3 border-[#517CA2] rounded-3xl py-8 px-12 mb-12 text-center shadow-[0_8px_24px_rgba(0,0,0,0.3)] max-w-[700px] mx-auto relative overflow-visible md:py-6 md:px-6 md:mb-8 md:border-2">
          <div className={`text-4xl font-bold text-white mb-0 text-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] tracking-wide relative inline-block pb-1 z-[1] md:text-3xl lg:text-2xl md:text-xl md:text-3xl ${isVisible ? 'animate-slide-in-from-top' : ''}`}>
            初期費用0
            <span className={`absolute bottom-0 left-0 h-[14px] bg-gradient-to-r from-yellow-400/80 to-yellow-400/40 rounded-sm -skew-y-1 z-0 pointer-events-none ${isVisible ? 'animate-underline' : 'w-0'}`} />
          </div>
          <br />
          <div className={`text-4xl font-bold text-white text-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] tracking-wide relative inline-block mt-4 pb-1 z-[1] md:text-3xl lg:text-2xl md:text-xl md:text-3xl ${isVisible ? 'animate-slide-in-from-top' : ''}`}>
            今だけ毎月5社初回無料
            <span className={`absolute bottom-0 left-0 h-[14px] bg-gradient-to-r from-yellow-400/80 to-yellow-400/40 rounded-sm -skew-y-1 z-0 pointer-events-none ${isVisible ? 'animate-underline-delayed' : 'w-0'}`} />
          </div>
        </div>
        
        <div className="flex gap-12 items-stretch justify-center mb-12 max-w-[1100px] mx-auto px-4 md:flex-col md:gap-6 md:mb-8 md:mb-6 md:gap-4 md:mb-4">
          <div className="p-6 bg-white/5 rounded-2xl flex-[0_0_250px] max-w-[250px] flex flex-col md:flex-[0_0_200px] md:max-w-[200px] md:p-4 md:flex-[0_0_180px] md:max-w-[180px] md:p-3 md:p-6 md:flex-[0_0_auto] md:max-w-full">
            <h3 className="text-2xl font-semibold text-white mb-4 text-center md:text-xl lg:text-lg md:text-base md:text-xl md:mb-4">
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

          <div className="flex justify-center flex-1 min-w-[500px] max-w-[900px] items-stretch md:max-w-[800px] md:max-w-[700px] md:min-w-[400px] md:max-w-full md:min-w-0">
            <div className="flex flex-col w-full">
              <div className="pt-[calc(32px+60px)] px-6 pb-8 bg-white rounded-3xl shadow-lg flex flex-row items-stretch justify-around gap-4 transition-all flex-grow w-full max-w-full box-border overflow-visible mx-auto md:pt-[calc(20px+50px)] md:px-5 md:pb-6 md:pt-[calc(16px+45px)] md:px-4 md:pb-5 md:pt-[calc(16px+40px)] md:px-3 md:pb-4 md:flex-col md:pt-9 md:px-6 md:pb-3 md:gap-2 md:items-end md:overflow-visible md:min-h-0 md:gap-4">
                {plans.map((plan, index) => (
                  <div key={index} className="flex flex-col items-center justify-center flex-1 p-4 min-w-0 relative md:p-3 md:rounded-lg md:mb-3 md:w-full md:overflow-visible md:last:mb-0">
                    <div className="text-center m-0 flex flex-col items-center gap-2">
                      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:items-baseline md:gap-4">
                        <span className="text-2xl font-semibold text-[#2C3E50] mb-0 block relative md:text-xl lg:text-lg md:text-base md:flex-shrink-0">
                          {plan.name}
                          {plan.monthlyPrice && (
                            <div className="absolute -top-[45px] left-1/2 -translate-x-1/2 bg-[#517CA2] text-white py-2 px-4 rounded-lg text-sm font-semibold whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.15)] z-10 md:-top-8 md:py-1 md:px-3 md:rounded-md md:text-xs md:max-w-[calc(100vw-32px)] after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-r-[6px] after:border-r-transparent after:border-t-[6px] after:border-t-[#517CA2]">
                              ひと月あたり<span className="font-semibold">{plan.monthlyPrice}円</span>/月
                            </div>
                          )}
                        </span>
                        <span className="text-5xl font-bold text-[#517CA2] leading-tight relative whitespace-nowrap md:text-4xl lg:text-3xl md:text-2xl md:flex-shrink-0 md:whitespace-normal">
                          {plan.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-4 md:mt-6">
          <button className="px-8 py-4 text-lg font-semibold text-white bg-[#517CA2] rounded-lg cursor-pointer transition-all min-w-[200px] hover:bg-[#517CA2] md:w-full md:max-w-full">
            お問い合わせ
          </button>
        </div>
      </div>
    </section>
  );
}





