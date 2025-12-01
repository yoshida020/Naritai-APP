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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-12 px-6 md:py-16 md:px-4"
      style={{
        background: 'linear-gradient(135deg, #517CA2 0%, #517CA2 40%, #202D5F 100%)'
      }}
    >
      <div 
        className="relative max-w-[1200px] w-full py-20 px-4 text-center flex items-center justify-center md:py-16 md:px-4" 
        ref={containerRef}
      >
        <div className="flex flex-col items-center gap-10 md:gap-6">
          <h2 className="corporate-section-title font-['Tangerine',cursive] text-white mb-1 block md:mb-2">
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
            className={`text-[36px] font-normal text-white mb-6 opacity-0 translate-y-[30px] md:text-[28px] md:mb-4 ${
              isVisible ? 'animate-slide-in-from-bottom' : ''
            }`}
            style={{ animationDelay: '0.8s' }}
          >
            お問い合わせ
          </p>
          <p 
            className={`text-3xl leading-relaxed text-white max-w-[800px] opacity-0 translate-y-[30px] md:text-xl md:leading-[1.7] ${
              isVisible ? 'animate-slide-in-from-bottom' : ''
            }`}
            style={{ animationDelay: '1.0s' }}
          >
            サービスについてのご相談・ご質問、お見積もり依頼など、
            <br />
            お気軽にお問い合わせください。
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
              className="hover:-translate-y-[2px] hover:scale-105 hover:shadow-[0_10px_24px_rgba(81,124,162,0.6),0_0_20px_rgba(90,177,224,0.5)] transition-all duration-300 ring-2 ring-[#5AB1E0]/40 hover:ring-[#5AB1E0]/60"
            >
              資料請求
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="hover:-translate-y-[2px] hover:scale-105 hover:shadow-[0_10px_24px_rgba(81,124,162,0.6),0_0_20px_rgba(90,177,224,0.5)] transition-all duration-300 ring-2 ring-[#5AB1E0]/40 hover:ring-[#5AB1E0]/60"
            >
              無料相談
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

