'use client';

import React, { useEffect, useRef, useState } from 'react';
import { SectionTitle } from '@/components/common/SectionTitle';

// アニメーション設定定数
const ANIMATION_CONFIG = {
  ENTRANCE: {
    DURATION: 1000,
    DELAY_STEP: 200,
    EASING: 'ease-out',
  },
  HOVER: {
    DURATION: 300,
  },
  INTERSECTION: {
    THRESHOLD: 0.1,
    SETUP_DELAY: 100,
  },
  PERFORMANCE: {
    BACKFACE_VISIBILITY: 'hidden',
    PERSPECTIVE: '1000px',
    WILL_CHANGE: 'transform, opacity',
  },
} as const;

// 問題データの型定義
type Problem = {
  text: React.ReactNode;
  textMobile?: React.ReactNode;
  icon: string;
};

// 問題データ
const problems: Problem[] = [
  {
    text: (
      <>
        考えていることがわからない
        <br />
        急に辞める
      </>
    ),
    textMobile: (
      <>
        考えていることが
        <br />
        わからない
        <br />
        急に辞める
      </>
    ),
    icon: '/images/problems/nayami01.jpeg',
  },
  {
    text: '本音で話してくれない',
    textMobile: '本音で話してくれない',
    icon: '/images/problems/nayami02.jpeg',
  },
  {
    text: (
      <>
        丁寧に育成する
        <br />
        リソースがない
      </>
    ),
    textMobile: (
      <>
        丁寧に育成する
        <br />
        リソースがない
      </>
    ),
    icon: '/images/problems/nayami03.jpeg',
  },
  {
    text: (
      <>
        忍耐力がない
        <br />
        主体的に動かない
      </>
    ),
    textMobile: (
      <>
        忍耐力がない
        <br />
        主体的に動かない
      </>
    ),
    icon: '/images/problems/nayami04.jpeg',
  },
  {
    text: '飲み会に来ない',
    textMobile: '飲み会に来ない',
    icon: '/images/problems/nayami05.jpeg',
  },
];


// IntersectionObserverの設定を共通化
const useCardVisibility = (cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>) => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const setupObservers = () => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
                observer.unobserve(card);
              }
            });
          },
          { threshold: ANIMATION_CONFIG.INTERSECTION.THRESHOLD }
        );

        observer.observe(card);
        observers.push(observer);
      });
    };

    const timeoutId = setTimeout(setupObservers, ANIMATION_CONFIG.INTERSECTION.SETUP_DELAY);

    return () => {
      clearTimeout(timeoutId);
      observers.forEach((observer) => observer.disconnect());
    };
  }, [cardRefs]);

  return visibleCards;
};

// PC版カードコンポーネント
type PCCardProps = {
  problem: Problem;
  index: number;
  isVisible: boolean;
  cardRef: (el: HTMLDivElement | null) => void;
};

const PCCard: React.FC<PCCardProps> = ({
  problem,
  index,
  isVisible,
  cardRef,
}) => {
  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8';

  // 登場アニメーション時のみ1000ms、それ以外は300ms
  const transitionDuration = isVisible
    ? ANIMATION_CONFIG.HOVER.DURATION
    : ANIMATION_CONFIG.ENTRANCE.DURATION;

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-3xl shadow-md flex flex-col items-center justify-start overflow-hidden gap-8 h-full transition-all ${ANIMATION_CONFIG.ENTRANCE.EASING} hover:scale-105 hover:shadow-xl hover:-translate-y-2 ${animationClasses}`}
      style={{
        transitionDuration: `${transitionDuration}ms`,
        transitionDelay: isVisible ? '0ms' : `${index * ANIMATION_CONFIG.ENTRANCE.DELAY_STEP}ms`,
        backfaceVisibility: ANIMATION_CONFIG.PERFORMANCE.BACKFACE_VISIBILITY,
        perspective: ANIMATION_CONFIG.PERFORMANCE.PERSPECTIVE,
        willChange: ANIMATION_CONFIG.PERFORMANCE.WILL_CHANGE,
      }}
    >
      <div className="w-full aspect-square flex items-center justify-center flex-shrink-0 overflow-hidden rounded-t-3xl">
        <img
          src={problem.icon}
          alt={`課題${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-base text-[#2C3E50] text-center leading-relaxed m-0 p-4 pb-4">
        {problem.text}
      </p>
    </div>
  );
};

// モバイル版カードコンポーネント
type MobileCardProps = {
  problem: Problem;
  index: number;
  isVisible: boolean;
  cardRef: (el: HTMLDivElement | null) => void;
};

const MobileCard: React.FC<MobileCardProps> = ({
  problem,
  index,
  isVisible,
  cardRef,
}) => {
  const animationClasses = isVisible
    ? 'opacity-100 translate-x-0'
    : 'opacity-0 -translate-x-8';

  // 登場アニメーション時のみ1000ms、それ以外は300ms
  const transitionDuration = isVisible
    ? ANIMATION_CONFIG.HOVER.DURATION
    : ANIMATION_CONFIG.ENTRANCE.DURATION;

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-3xl shadow-md flex flex-row items-stretch overflow-hidden transition-all ${ANIMATION_CONFIG.ENTRANCE.EASING} hover:scale-[1.02] hover:shadow-xl h-[80px] md:h-[160px] w-full max-w-[500px] mx-auto ${animationClasses}`}
      style={{
        transitionDuration: `${transitionDuration}ms`,
        transitionDelay: isVisible ? '0ms' : `${index * ANIMATION_CONFIG.ENTRANCE.DELAY_STEP}ms`,
        backfaceVisibility: ANIMATION_CONFIG.PERFORMANCE.BACKFACE_VISIBILITY,
        perspective: ANIMATION_CONFIG.PERFORMANCE.PERSPECTIVE,
        willChange: ANIMATION_CONFIG.PERFORMANCE.WILL_CHANGE,
      }}
    >
      <div className="h-[80px] md:h-[160px] flex items-center justify-center flex-shrink-0 overflow-hidden">
        <img
          src={problem.icon}
          alt={`課題${index + 1}`}
          className="h-[80px] md:h-[160px] w-auto object-contain"
        />
      </div>
      <p className="text-xs text-[#2C3E50] text-center leading-relaxed m-0 flex-1 p-6 flex items-center justify-center">
        {problem.textMobile || problem.text}
      </p>
    </div>
  );
};

export default function ProblemsSection() {
  const pcCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const visiblePCCards = useCardVisibility(pcCardRefs);
  const visibleMobileCards = useCardVisibility(mobileCardRefs);

  return (
    <section
      id="problems"
      className="w-full py-8 px-4 bg-[#F9FCFF] flex items-center justify-center md:py-16 md:px-4"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="mb-16">
          <SectionTitle enTitle="Problems" jaTitle="Z世代にこんなお悩みありませんか？" />
        </div>

        {/* PC版: 横一列（5列） */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-4">
          {problems.map((problem, index) => (
            <PCCard
              key={index}
              problem={problem}
              index={index}
              isVisible={visiblePCCards[index] || false}
              cardRef={(el) => {
                pcCardRefs.current[index] = el;
              }}
            />
          ))}
        </div>

        {/* スマホ・タブレット版: 縦一列 */}
        <div className="grid grid-cols-1 gap-6 lg:hidden">
          {problems.map((problem, index) => (
            <MobileCard
              key={index}
              problem={problem}
              index={index}
              isVisible={visibleMobileCards[index] || false}
              cardRef={(el) => {
                mobileCardRefs.current[index] = el;
              }}
            />
          ))}
        </div>

        {/* 矢印と解決メッセージ */}
        <div className="mt-8 md:mt-12 text-center flex flex-col items-center gap-4 md:gap-6 w-full">
          <div className="w-[clamp(56px,7vw,80px)] h-[clamp(56px,7vw,80px)] md:w-[clamp(64px,6vw,96px)] md:h-[clamp(64px,6vw,96px)] flex items-center justify-center">
            <img
              src="/images/flow/allow.png"
              alt="矢印"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[24px] md:text-[clamp(48px,6vw,48px)] font-bold text-[#517ca2] m-0 w-full whitespace-nowrap">
            Naritaiがすべて解決します!
          </p>
        </div>
      </div>
    </section>
  );
}
