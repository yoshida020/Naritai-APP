'use client';

import { useEffect, useRef, useState } from 'react';
import { SectionTitle } from '@/components/common/SectionTitle';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto px-4">
        <div className={`mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <SectionTitle enTitle="Contact" jaTitle="お問い合わせ" enColor="text-[#9DCBE8]" />
        </div>
        
        <div className={`flex flex-col items-center gap-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          <p className="text-center text-[#2C3E50] text-base md:text-xl leading-relaxed font-medium">
            サービスについてのご相談・ご質問・お見積り依頼など、<br className="hidden sm:block" />
            お気軽にお問合せください
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center px-4 mt-4">
            <a
              href="/blank?from=lp"
              className="flex-1 bg-[#202D5F] hover:bg-[#1a2449] text-white text-center py-5 rounded-full transition-colors duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              資料請求
            </a>
            <a
              href="/contact?from=lp"
              className="flex-1 bg-white border-2 border-[#202D5F] text-[#202D5F] hover:bg-gray-50 text-center py-5 rounded-full transition-colors duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              無料相談
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

