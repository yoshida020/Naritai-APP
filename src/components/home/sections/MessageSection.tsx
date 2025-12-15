'use client';

import { useEffect, useRef, useState } from 'react';
import { SectionTitle } from '@/components/common/SectionTitle';

export default function MessageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimatedRef = useRef(false);
  const [visibleElements, setVisibleElements] = useState({
    label: false,
    title: false,
    image: false,
    background: false,
    text1: false,
    text2: false,
    text3: false,
    text4: false,
    text5: false,
    text6: false,
    signature: false,
  });

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

  useEffect(() => {
    if (!isVisible || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;

    setVisibleElements(prev => ({
      ...prev,
      label: true,
      title: true,
      image: true,
      background: true,
      text1: true,
      text2: true,
      text3: true,
    }));

    setTimeout(() => setVisibleElements(prev => ({ ...prev, text4: true })), 200);
    setTimeout(() => setVisibleElements(prev => ({ ...prev, text5: true })), 400);
    setTimeout(() => setVisibleElements(prev => ({ ...prev, text6: true, signature: true })), 600);
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      id="message" 
      className="py-24 bg-gradient-to-b from-[#FFFFFF] to-white relative overflow-hidden"
    > 
      <div className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-12 md:mb-16">
          <SectionTitle
            enTitle="Message"
            jaTitle="代表メッセージ"
            enClassName={visibleElements.label ? 'animate-mobile-fade-in-up' : 'opacity-0'}
            jaClassName={visibleElements.title ? 'animate-mobile-fade-in-up' : 'opacity-0'}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-0 items-start relative">
          <div className={`order-2 lg:order-1 bg-[#f0f0f0] sm:-mx-12 md:-mx-16 lg:-mx-24 xl:-mx-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 lg:py-12 ${visibleElements.background ? 'animate-slide-in-from-left' : 'opacity-0'}`}>
            <div 
              className="text-sm space-y-6 text-[#2C3E50] max-w-3xl mx-auto px-4 sm:px-8"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              <p className={` sm:text-lg md:text-xl leading-relaxed ${visibleElements.text1 ? 'animate-mobile-fade-in-up' : 'opacity-0'}`}>
                私たち自身も、キャリアに悩んだ経験があります。
              </p>
              <div className={`space-y-4 pl-4 border-l-2 border-[#517CA2]/30 ${visibleElements.text2 ? 'animate-mobile-fade-in-up' : 'opacity-0'}`}>
                <p className=" sm:text-lg md:text-xl leading-relaxed italic">
                  「このままでいいのか」
                </p>
                <p className=" sm:text-lg md:text-xl leading-relaxed italic">
                  「自分は何がしたいのか」
                </p>
              </div>
              <p className={` sm:text-lg md:text-xl leading-relaxed ${visibleElements.text3 ? 'animate-mobile-fade-in-up' : 'opacity-0'}`}>
                ——そんな問いに向き合い続けた日々がありました。
              </p>
              <p className={` sm:text-lg md:text-xl leading-relaxed ${visibleElements.text4 ? 'animate-mobile-fade-in-up' : 'opacity-0'}`}>
                だからこそ、同じように悩む方々に寄り添い、一緒に答えを探していきたい。
              </p>
              <p className={` sm:text-lg md:text-xl leading-relaxed font-medium ${visibleElements.text5 ? 'animate-mobile-fade-in-up' : 'opacity-0'}`}>
                Naritaiは、そんな想いから生まれた会社です。
              </p>
              <p className={` sm:text-lg md:text-xl leading-relaxed ${visibleElements.text6 ? 'animate-mobile-fade-in-up' : 'opacity-0'}`}>
                あなたの<b>なりたい</b>を、私たちと一緒に見つけませんか。
              </p>
              <div className={`pt-6 mt-6 border-t border-[#E6EAEE] ${visibleElements.signature ? 'animate-mobile-fade-in-up' : 'opacity-0'}`}>
                <p className=" sm:text-lg font-semibold text-[#517CA2]">
                  代表取締役
                </p>
                <p className="text-lg sm:text-xl font-bold text-[#2C3E50] mt-2">
                  吉田 明加
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 px-4 sm:px-6 md:px-8 lg:px-12 py-8 lg:pt-16">
            <div className={`relative w-full aspect-square max-w-sm sm:max-w-[480px] mx-auto lg:max-w-[520px] lg:-ml-8 xl:-ml-12 z-10 ${visibleElements.image ? 'animate-slide-in-from-right' : 'opacity-0'}`}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/hp/message/representative.png"
                  alt="代表取締役 吉田 明加"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

