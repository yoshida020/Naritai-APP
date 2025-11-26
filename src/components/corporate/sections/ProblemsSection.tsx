'use client';

import React, { useState, useEffect } from 'react';

export default function ProblemsSection() {
  const problems = [
    <>
      考えていることがわからない
      <br />
      急に辞める
    </>,
    '本音で話してくれない',
    <>丁寧に育成する<br />リソースがない</>,
    <>
      忍耐力がない
      <br />
      主体的に動かない
    </>,
    '飲み会に来ない',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // テキストを文字単位に分割する関数
  const splitTextIntoChars = (text: React.ReactNode): Array<{ char: string | React.ReactNode; index: number; isBr: boolean }> => {
    const result: Array<{ char: string | React.ReactNode; index: number; isBr: boolean }> = [];
    let charIndex = 0;

    const processNode = (node: React.ReactNode) => {
      if (typeof node === 'string') {
        node.split('').forEach((char) => {
          result.push({ char, index: charIndex++, isBr: false });
        });
      } else if (React.isValidElement(node)) {
        if (node.type === 'br') {
          result.push({ char: <br key={`br-${charIndex}`} />, index: charIndex++, isBr: true });
        } else if (node.props && node.props.children) {
          React.Children.forEach(node.props.children, processNode);
        }
      } else if (Array.isArray(node)) {
        node.forEach(processNode);
      }
    };

    processNode(text);
    return result;
  };

  // モバイル版：3秒ごとに吹き出しを切り替え
  useEffect(() => {
    // 初期表示時のアニメーション
    const initialTimeout = setTimeout(() => {
      setIsActive(true);
    }, 50);

    const interval = setInterval(() => {
      setIsActive(false);
      // 現在表示中のテキストを消すアニメーションが完了するまで待機
      // 文字数 × 0.05秒（遅延） + 0.6秒（アニメーション時間） + 余裕
      const currentChars = splitTextIntoChars(problems[currentIndex]);
      const fadeOutDuration = Math.min(currentChars.length * 0.05 + 0.6 + 0.2, 2.0); // 最大2秒まで
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % problems.length);
        setTimeout(() => {
          setIsActive(true);
        }, 50);
      }, fadeOutDuration * 1000);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, [currentIndex, problems.length]);

  const firstRow = problems.slice(0, 3);
  const secondRow = problems.slice(3, 5);

  return (
    <section 
      id="problems" 
      className="w-full min-h-screen py-8 px-4 bg-white flex items-center justify-center md:py-16 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center">
        <h2 className="corporate-section-title text-[#2c3e50] mb-0 text-[clamp(14px,3.5vw,48px)] md:text-[clamp(32px,4vw,48px)] whitespace-nowrap overflow-hidden">
          Z世代にこんなお悩みありませんか？
        </h2>
        
        <div className="w-full">
          {/* モバイル版：経営者画像と吹き出し（アニメーション切り替え） */}
          <div className="relative w-full min-h-[600px] md:hidden flex flex-col items-center justify-center gap-0 px-4">
            {/* 吹き出し（上、画像は1つ固定、テキストのみ切り替え） */}
            <div className="relative w-full flex items-center justify-center" style={{ minHeight: '300px' }}>
              <div className="relative">
                {/* 吹き出し画像（固定） */}
                <img 
                  src="/hukidasi.png" 
                  alt="吹き出し" 
                  className="w-auto h-auto"
                  style={{ maxWidth: '90vw', height: 'auto', minWidth: '300px' }}
                />
                {/* テキスト（切り替え、文字単位アニメーション） */}
                {problems.map((problem, index) => {
                  const isVisible = index === currentIndex;
                  const chars = splitTextIntoChars(problem);
                  return (
                    <div
                      key={index}
                      className={`absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] ${isActive && isVisible ? 'is-active' : ''}`}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        pointerEvents: isVisible ? 'auto' : 'none',
                        zIndex: isVisible ? 10 : 0
                      }}
                    >
                      <div className="text-[clamp(18px,4.5vw,22px)] font-medium text-[#2C3E50] text-center leading-relaxed">
                        {chars.map((item, charIdx) => {
                          if (item.isBr) {
                            return <React.Fragment key={`char-${index}-${charIdx}`}>{item.char}</React.Fragment>;
                          }
                          return (
                            <span
                              key={`char-${index}-${charIdx}`}
                              className="char inline-block"
                              style={{
                                '--opacity': isActive && isVisible ? 1 : 0,
                                '--char-index': item.index,
                                opacity: isActive && isVisible ? 1 : 0,
                                transition: 'opacity 0.6s cubic-bezier(0.77, 0, 0.175, 1)',
                                transitionDelay: `calc(0.05s * ${item.index})`
                              } as React.CSSProperties}
                            >
                              {item.char === ' ' ? '\u00A0' : item.char}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* 経営者画像（下、中央揃え） */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img 
                src="/nayami02.png" 
                alt="経営者" 
                className="w-auto h-auto"
                style={{ maxWidth: '90vw', height: 'auto', maxHeight: '400px' }}
              />
            </div>
          </div>

          {/* PC版：経営者画像と吹き出し（すべて表示） */}
          <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:gap-0 md:px-4 2xl:hidden">
            {/* 吹き出し（上） */}
            <div className="flex flex-col gap-4 items-center">
              {/* 吹き出し（1行目：3つ） */}
              <div className="flex flex-col gap-4 items-center">
                {firstRow.map((problem, index) => (
                  <div key={index} className="relative">
                    <img 
                      src="/hukidasi.png" 
                      alt="吹き出し" 
                      className="w-auto h-auto"
                      style={{ minWidth: '350px', maxWidth: '500px' }}
                    />
                    {/* テキスト */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] text-[clamp(15px,1.3vw,18px)] font-medium text-[#2C3E50] text-center leading-relaxed">
                      {problem}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 吹き出し（2行目：2つ） */}
              <div className="flex flex-col gap-4 items-center">
                {secondRow.map((problem, index) => (
                  <div key={index} className="relative">
                    <img 
                      src="/hukidasi.png" 
                      alt="吹き出し" 
                      className="w-auto h-auto"
                      style={{ minWidth: '350px', maxWidth: '500px' }}
                    />
                    {/* テキスト */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] text-[clamp(15px,1.3vw,18px)] font-medium text-[#2C3E50] text-center leading-relaxed">
                      {problem}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 経営者画像（下、中央揃え） */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img 
                src="/nayami02.png" 
                alt="経営者" 
                className="w-auto h-auto max-w-[600px] max-h-[800px]"
              />
            </div>
          </div>

          {/* 広いPC版：経営者画像と吹き出し（すべて1行に） */}
          <div className="hidden 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center 2xl:gap-0 2xl:px-4">
            {/* 吹き出し（上） */}
            <div className="flex flex-col gap-4 items-center">
              {problems.map((problem, index) => (
                <div key={index} className="relative">
                  <img 
                    src="/hukidasi.png" 
                    alt="吹き出し" 
                    className="w-auto h-auto"
                    style={{ minWidth: '400px', maxWidth: '600px' }}
                  />
                  {/* テキスト */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] text-[clamp(14px,1.1vw,16px)] font-medium text-[#2C3E50] text-center leading-relaxed">
                    {problem}
                  </div>
                </div>
              ))}
            </div>
            
            {/* 経営者画像（下、中央揃え） */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img 
                src="/nayami02.png" 
                alt="経営者" 
                className="w-auto h-auto max-w-[700px] max-h-[900px]"
              />
            </div>
          </div>
        </div>
        <div className="mt-0 md:mt-12 text-center flex flex-col items-center gap-4 md:gap-6 w-full">
          <div className="w-[clamp(56px,7vw,80px)] h-[clamp(56px,7vw,80px)] md:w-[clamp(64px,6vw,96px)] md:h-[clamp(64px,6vw,96px)] flex items-center justify-center">
            <img 
              src="/allow.png" 
              alt="矢印" 
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[clamp(32px,8vw,96px)] md:text-[clamp(48px,6vw,120px)] font-bold text-[#517ca2] m-0 w-full whitespace-nowrap">
            Naritaiがすべて解決します
          </p>
        </div>
      </div>
    </section>
  );
}
