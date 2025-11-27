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
      className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden md:min-h-auto"
    >
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')] bg-cover bg-center bg-no-repeat brightness-[0.8] saturate-[1.2]"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 via-black/20 to-black/30 z-[2]" />
      <div 
        className="relative z-[3] max-w-[1200px] w-full py-20 px-4 text-center flex items-center justify-center md:py-16 md:px-4" 
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
            className={`text-[26px] font-normal text-white mb-6 opacity-0 translate-y-[30px] md:text-[18px] md:mb-4 ${
              isVisible ? 'animate-slide-in-from-bottom' : ''
            }`}
            style={{ animationDelay: '0.8s' }}
          >
            お問い合わせ
          </p>
          <p 
            className={`text-2xl leading-relaxed text-white max-w-[800px] opacity-0 translate-y-[30px] md:text-base md:leading-[1.7] ${
              isVisible ? 'animate-slide-in-from-bottom' : ''
            }`}
            style={{ animationDelay: '1.0s' }}
          >
            サービスについてのご相談・ご質問、お見積もり依頼など、
            <br />
            お気軽にお問い合わせください。
          </p>
          <div 
            className={`flex gap-20 flex-wrap justify-center opacity-0 translate-y-[30px] md:flex-col md:w-full md:max-w-[400px] md:gap-4 ${
              isVisible ? 'animate-slide-in-from-bottom' : ''
            }`}
            style={{ animationDelay: '1.2s' }}
          >
            <Button
              variant="ghost"
              size="lg"
              className="text-[#202D5F] bg-gradient-to-br from-[#F5F5F5] to-[#E6E5E6] border-2 border-black/10 border-t-white/50 border-l-white/50 border-b-black/20 border-r-black/20 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] hover:-translate-y-[2px] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15),0_4px_6px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] active:translate-y-[1px] active:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(0,0,0,0.1)] md:w-full md:min-w-0 md:hover:translate-y-0 md:hover:shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)]"
            >
              資料請求
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-[#202D5F] bg-gradient-to-br from-[#F5F5F5] to-[#E6E5E6] border-2 border-black/10 border-t-white/50 border-l-white/50 border-b-black/20 border-r-black/20 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] hover:-translate-y-[2px] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15),0_4px_6px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] active:translate-y-[1px] active:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(0,0,0,0.1)] md:w-full md:min-w-0 md:hover:translate-y-0 md:hover:shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)]"
            >
              無料相談
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

