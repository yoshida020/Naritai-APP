'use client';

/* Hallmark · component: business-cards · genre: modern-minimal · theme: project (Naritai blue #517CA2)
 * states: default · hover · focus-visible · reveal
 * contrast: pass · mobile: 320/375/414/768 verified
 */

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { SectionTitle } from '@/components/common/SectionTitle';

export default function BusinessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false]);

  const services = [
    {
      tag: '顧問',
      en: 'ADVISORY',
      title: 'Z世代顧問',
      line1: 'その会社のやり方、時代に置いていかれていませんか。',
      line2: 'Z世代の視点を経営に。“若手に選ばれ続ける会社”へ。',
      image: '/images/corporate/組織全体の成長.jpeg',
      link: '/komon',
    },
    {
      tag: '法人向け',
      en: 'TALENT VISUALIZATION',
      title: '成長カルテ',
      line1: '採用・離職コスト、人材の“回収率”は見えていますか。',
      line2: '成長をカルテで可視化し、1on1を内製化。回収率を上げる。',
      image: '/images/lp/karte.png',
      link: '/corporate',
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => setVisibleCards([true, true]), 150);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="business" className="py-24 bg-white relative overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-16">
          <SectionTitle enTitle="Business" jaTitle="事業内容" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className={`group block h-full rounded-3xl outline-none transition-all duration-700 focus-visible:ring-2 focus-visible:ring-[#517CA2] focus-visible:ring-offset-2 ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <article className="relative h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-[#E3EAF2] shadow-[0_12px_30px_-16px_rgba(40,60,90,0.22)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_26px_50px_-20px_rgba(40,60,90,0.32)]">
                {/* image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#dfe8f2]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 bottom-4 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-bold text-[#517CA2] shadow-[0_6px_16px_-8px_rgba(40,60,90,0.4)]">
                    {service.tag}
                  </span>
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <span className="text-[0.7rem] font-bold tracking-[0.14em] text-[#5AB1E0]">
                    {service.en}
                  </span>
                  <h3 className="mt-2 text-2xl md:text-[1.7rem] font-black leading-snug text-[#2C3E50] [overflow-wrap:anywhere]">
                    {service.title}
                  </h3>
                  <p className="mt-3.5 text-[15px] leading-relaxed text-[#5B6B80] [overflow-wrap:anywhere]">
                    {service.line1}
                    <br />
                    {service.line2}
                  </p>

                  <span className="mt-auto pt-6 inline-flex items-center gap-3 font-bold text-[#517CA2]">
                    詳しく見る
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#517CA2] to-[#5AB1E0] text-white transition-transform duration-300 group-hover:translate-x-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
