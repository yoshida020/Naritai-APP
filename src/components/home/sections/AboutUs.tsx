'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleElements, setVisibleElements] = useState({
    label: false,
    title: false,
    underline: false,
    mobileTitle: false,
    mobileText: false,
    pcTitle: false,
    pcImage: false,
    pcCard: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // セクションが見えなくなったら状態をリセット
            setIsVisible(false);
            setVisibleElements({
              label: false,
              title: false,
              underline: false,
              mobileTitle: false,
              mobileText: false,
              pcTitle: false,
              pcImage: false,
              pcCard: false,
            });
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
    if (!isVisible) return;

    const timers: NodeJS.Timeout[] = []
    timers.push(setTimeout(() => setVisibleElements(prev => ({ ...prev, label: true })), 0));
    timers.push(setTimeout(() => setVisibleElements(prev => ({ ...prev, title: true })), 200));
    timers.push(setTimeout(() => setVisibleElements(prev => ({ ...prev, underline: true })), 400));
    timers.push(setTimeout(() => setVisibleElements(prev => ({ ...prev, mobileTitle: true })), 600));
    timers.push(setTimeout(() => setVisibleElements(prev => ({ ...prev, mobileText: true })), 800));
    timers.push(setTimeout(() => setVisibleElements(prev => ({ ...prev, pcTitle: true })), 200));
    timers.push(setTimeout(() => setVisibleElements(prev => ({ ...prev, pcImage: true })), 400));
    timers.push(setTimeout(() => setVisibleElements(prev => ({ ...prev, pcCard: true })), 600));

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 bg-[#F0F0F0] relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 min-[1025px]:hidden"
        style={{
          backgroundImage: 'url(/hp/aboutUs/cloud.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15
        }}
      ></div>
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#5AB1E0]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#517CA2]/5 rounded-full blur-3xl"></div>

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-3 min-[1025px]:mb-16">
          <span className={`inline-block text-sm font-semibold text-[#5AB1E0] uppercase tracking-wider mb-4 ${visibleElements.label ? 'animate-mobile-fade-in-up' : 'opacity-0'}`}>
            About Us
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-4 text-center ${visibleElements.title ? 'animate-mobile-fade-in-up' : 'opacity-0'}`} style={{ fontFamily: 'Catchy Mager, serif' }}>
            Naritaiについて
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-[#362ae0] via-[#3b79cc] to-[#42d3ed] mx-auto rounded-full ${visibleElements.underline ? 'animate-mobile-fade-in-up' : 'opacity-0'}`}></div>
        </div>

        {/* モバイル時の表示 */}
        <div className="min-[1025px]:hidden text-center py-8 relative z-10">
          <h3
            className={`text-2xl sm:text-3xl font-bold text-[#2C3E50] leading-relaxed text-center mb-8 ${visibleElements.mobileTitle ? 'animate-mobile-fade-in-up' : 'opacity-0'}`}
            style={{ fontFamily: '"GenEi Koburi Min6", "Noto Serif JP", serif' }}
          >
            <span className="relative inline-block pr-2">
              <span className="absolute left-0 bottom-1 h-5 w-full bg-[#5AB1E0]/55 rounded-[6px] pointer-events-none" aria-hidden="true"></span>
              <span className="relative">個人</span>
            </span>
            の「
            <span className="relative inline-block px-1">
              <span className="absolute left-0 bottom-0 h-5 w-full bg-[#C3AED6]/60 rounded-[6px] pointer-events-none" aria-hidden="true"></span>
              <span className="relative">Naritai</span>
            </span>
            」を、<br />
            <span className="relative inline-block pr-2">
              <span className="absolute left-0 bottom-1 h-5 w-full bg-[#8FD3F4]/60 rounded-[6px] pointer-events-none" aria-hidden="true"></span>
              <span className="relative">組織</span>
            </span>
            の「
            <span className="relative inline-block px-1">
              <span className="absolute left-0 bottom-0 h-5 w-full bg-[#C3AED6]/60 rounded-[6px] pointer-events-none" aria-hidden="true"></span>
              <span className="relative">成長力</span>
            </span>
            」へ
          </h3>
          
          <div
            className={`text-xs md:text-lg text-[#0a0a0a] leading-loose writing-horizontal-tb mx-auto font-medium py-14 ${visibleElements.mobileText ? 'animate-mobile-fade-in-up' : 'opacity-0'}`}
            style={{
              fontFamily: '"Noto Serif JP", serif',
              maxWidth: '90%',
              textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
            }}
          >
            正解がない時代。<br />
            誰かと比べて焦り、<br />
            将来に不安を感じてもがいている人がいる。<br />
            <span
              className="inline-block font-bold text-[#000000]"
              style={{
                letterSpacing: '0.08em'
              }}
            >
              Naritai
            </span>
            は、一人ひとりに"
            <span className="font-bold">なりたい自分</span>
            "を見つけて<br />
            自分の道を歩いてほしい。<br />
            なんとなく働く毎日から抜け出してほしい。<br />
            心から納得できる人生を、<br />
            自分の足で歩けるように。<br />
            <br />
            時間は有限。<br />
            だからこそ、今を大切に。<br />
            あなたの
            <span
              className="inline-block font-bold text-[#000000]"
              style={{
                letterSpacing: '0.08em'
              }}
            >
              "Naritai"
            </span>
            から未来が動き出します。
          </div>
        </div>

        <div className="hidden min-[1025px]:flex flex-row gap-8 min-[1025px]:gap-12 items-center min-[1025px]:items-stretch justify-center">
          <div className="flex-1 flex flex-col justify-between items-center min-[1025px]:items-start gap-8 min-[1025px]:gap-12 h-full w-full min-[1025px]:pl-4 xl:pl-6">
            <h3
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] leading-relaxed text-center min-[1025px]:text-left w-full min-[1025px]:max-w-[620px] min-[1025px]:ml-auto min-[1025px]:pr-6 ${visibleElements.pcTitle ? 'animate-slide-in-from-left' : 'opacity-0'}`}
              style={{ fontFamily: '"GenEi Koburi Min6", "Noto Serif JP", serif' }}
            >
              <span className="relative inline-block pr-2">
                <span className="absolute left-0 bottom-1 h-5 w-full bg-[#5AB1E0]/55 rounded-[6px] pointer-events-none" aria-hidden="true"></span>
                <span className="relative">個人</span>
              </span>
              の「
              <span className="relative inline-block px-1">
                <span className="absolute left-0 bottom-0 h-5 w-full bg-[#C3AED6]/60 rounded-[6px] pointer-events-none" aria-hidden="true"></span>
                <span className="relative">Naritai</span>
              </span>
              」を、<br />
              <span className="relative inline-block pr-2">
                <span className="absolute left-0 bottom-1 h-5 w-full bg-[#8FD3F4]/60 rounded-[6px] pointer-events-none" aria-hidden="true"></span>
                <span className="relative">組織</span>
              </span>
              の「
              <span className="relative inline-block px-1">
                <span className="absolute left-0 bottom-0 h-5 w-full bg-[#C3AED6]/60 rounded-[6px] pointer-events-none" aria-hidden="true"></span>
                <span className="relative">成長力</span>
              </span>
              」へ
            </h3>
            <div className="hidden sm:flex w-full flex-1 min-h-[320px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[620px] bg-gradient-to-t from-[#cfdcee] via-[#dfe9f6] to-[#f4f7fb] items-center justify-center rounded-[32px] overflow-hidden relative">
              <img
                src="/hp/aboutUs/cloud.png"
                alt="Cloud illustration"
                className={`absolute inset-0 h-full w-full object-cover ${visibleElements.pcImage ? 'animate-pc-image-fade-in' : 'opacity-0'}`}
              />
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center min-[1025px]:justify-start">
            <div className="relative mx-auto">
              <div className={`absolute inset-0 rounded-[40px] bg-gradient-to-b from-white/90 via-[#E2F1FB]/90 to-[#D9E7F2]/90 blur-xl ${visibleElements.pcCard ? 'animate-pc-card-fade-in' : 'opacity-0'}`}></div>
              <div
                className={`relative rounded-[36px] px-8 py-10 min-[1025px]:px-12 min-[1025px]:py-14 border border-white/70 bg-white/80 shadow-[0_20px_45px_rgba(81,124,162,0.18)] backdrop-blur-sm ${visibleElements.pcCard ? 'animate-slide-in-from-right' : 'opacity-0'}`}
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(255,255,255,0.94), rgba(226,241,251,0.92)), url(/hp/aboutUs/cloud.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div
                  className="text-xl xl:text-2xl 2xl:text-2xl text-[#0a0a0a] leading-loose min-[1025px]:writing-vertical-rl min-[1025px]:text-orientation-upright font-medium"
                  style={{
                    height: 'auto',
                    maxHeight: '700px',
                    fontFamily: '"Noto Serif JP", serif',
                    writingMode: 'vertical-rl',
                    textOrientation: 'upright'
                  }}
                >
                  正解がない時代。<br />
                  誰かと比べて焦り、<br />
                  将来に不安を感じてもがいている人がいる。<br />
                  <span
                    className="inline-block font-bold text-[#000000]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      transformOrigin: 'center',
                      letterSpacing: '0.08em'
                    }}
                  >
                    Naritai
                  </span>
                  は、一人ひとりに<span className="font-bold">なりたい自分</span>を見つけて<br />
                  自分の道を歩いてほしい。<br />
                  なんとなく働く毎日から抜け出してほしい。<br />
                  心から納得できる人生を、<br />
                  自分の足で歩けるように。<br />
                  <br />
                  時間は有限。<br />
                  だからこそ、今を大切に。<br />
                  あなたの
                  <span
                    className="inline-block font-bold text-[#000000]"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      transformOrigin: 'center',
                      letterSpacing: '0.08em'
                    }}
                  >
                    "Naritai"
                  </span>
                  から未来が動き出します。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

