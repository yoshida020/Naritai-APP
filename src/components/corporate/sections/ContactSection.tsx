'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '../../common/Button';

export default function ContactSection() {
  const text = 'Contact';
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

  return (
    <section
      id="contact"
      className="relative w-full flex items-center justify-center overflow-hidden py-12 px-6 md:py-16 md:px-4"
      style={{
        background: 'linear-gradient(135deg, #6AA5CE 0%, #6AA5CE 40%, #517CA2 100%)'
      }}
    >
      <div 
        className="relative max-w-[1200px] w-full py-20 px-4 text-center flex items-center justify-center md:py-16 md:px-4" 
        ref={containerRef}
      >
        <div className="flex flex-col items-center gap-10 md:gap-6">
          <h2 className="corporate-section-title font-['Tangerine',cursive] text-white mb-1 block md:mb-2" style={{ fontSize: 'clamp(48px, 6vw, 72px)' }}>
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
          <p 
            className={`text-[48px] font-normal text-white mb-6 opacity-0 translate-y-[30px] md:text-[36px] md:mb-4 ${
              isVisible ? 'animate-slide-in-from-bottom' : ''
            }`}
            style={{ animationDelay: '0.8s' }}
          >
            お問い合わせ
          </p>
          <p 
            className={`text-[20px] leading-relaxed text-white max-w-[800px] opacity-0 translate-y-[30px] md:text-2xl md:leading-[1.7] ${
              isVisible ? 'animate-slide-in-from-bottom' : ''
            }`}
            style={{ animationDelay: '1.0s' }}
          >
            <span className="md:hidden">
              サービスについての
              <br />
              ご相談・ご質問、お見積もり依頼など、
              <br />
              お気軽にお問い合わせください。
            </span>
            <span className="hidden md:inline">
              サービスについてのご相談・ご質問、お見積もり依頼など、
              <br />
              お気軽にお問い合わせください。
            </span>
          </p>
          <div 
            className={`flex flex-col gap-4 justify-center opacity-0 translate-y-[30px] md:flex-row md:w-auto md:max-w-none md:gap-4 ${
              isVisible ? 'animate-slide-in-from-bottom' : ''
            }`}
            style={{ animationDelay: '1.2s' }}
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full md:w-auto min-w-[280px] !bg-[#202D5F] hover:!bg-[#1a2449] !text-white !shadow-[0_8px_20px_rgba(32,45,95,0.4)] hover:-translate-y-[2px] hover:scale-105 hover:!shadow-[0_10px_24px_rgba(32,45,95,0.6),0_0_20px_rgba(32,45,95,0.5)] transition-all duration-300 ring-2 ring-[#202D5F]/40 hover:ring-[#202D5F]/60"
            >
              資料請求
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="w-full md:w-auto min-w-[280px] hover:-translate-y-[2px] hover:scale-105 hover:shadow-[0_10px_24px_rgba(81,124,162,0.6),0_0_20px_rgba(90,177,224,0.5)] transition-all duration-300 ring-2 ring-[#5AB1E0]/40 hover:ring-[#5AB1E0]/60"
            >
              無料相談
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

