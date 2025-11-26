'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';

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
  const [isActive, setIsActive] = useState(false); // 初期表示時はfalse、アニメーション開始時にtrue
  const currentIndexRef = useRef(0);

  // テキストを文字単位に分割する関数
  const splitTextIntoChars = useCallback((text: React.ReactNode): Array<{ char: string | React.ReactNode; index: number; isBr: boolean }> => {
    const result: Array<{ char: string | React.ReactNode; index: number; isBr: boolean }> = [];
    let charIndex = 0;

    const processNode = (node: React.ReactNode, keyPrefix: string = '') => {
      if (node === null || node === undefined) {
        return;
      }
      if (typeof node === 'string') {
        node.split('').forEach((char) => {
          result.push({ char, index: charIndex++, isBr: false });
        });
      } else if (typeof node === 'number') {
        String(node).split('').forEach((char) => {
          result.push({ char, index: charIndex++, isBr: false });
        });
      } else if (React.isValidElement(node)) {
        if (node.type === 'br' || (typeof node.type === 'string' && node.type === 'br')) {
          result.push({ char: React.createElement('br', { key: `${keyPrefix}-br-${charIndex}` }), index: charIndex++, isBr: true });
        } else if (node.props && node.props.children !== undefined && node.props.children !== null) {
          const children = Array.isArray(node.props.children) ? node.props.children : [node.props.children];
          React.Children.forEach(children, (child, idx) => {
            if (child !== null && child !== undefined) {
              processNode(child, `${keyPrefix}-${idx}`);
            }
          });
        }
      } else if (Array.isArray(node)) {
        node.forEach((child, idx) => {
          if (child !== null && child !== undefined) {
            processNode(child, `${keyPrefix}-${idx}`);
          }
        });
      }
    };

    processNode(text, 'text');
    return result;
  }, []);

  // モバイル版：初期表示時のアニメーション（少し遅延させて開始）
  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, []);

  // currentIndexをrefに同期
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      // フェードアウト開始
      setIsActive(false);
      
      // 現在表示中のテキストを消すアニメーションが完了するまで待機
      // 文字数 × 0.05秒（遅延） + 0.6秒（アニメーション時間） + 余裕
      const currentProblem = problems[currentIndexRef.current];
      const currentChars = splitTextIntoChars(currentProblem);
      const fadeOutDuration = Math.min(currentChars.length * 0.05 + 0.6 + 0.2, 2.0); // 最大2秒まで
      
      setTimeout(() => {
        // 次のテキストに切り替え
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % problems.length;
          currentIndexRef.current = nextIndex;
          return nextIndex;
        });
        
        // 少し待ってからフェードイン開始
        setTimeout(() => {
          setIsActive(true);
        }, 100);
      }, fadeOutDuration * 1000);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [splitTextIntoChars]);

  const firstRow = problems.slice(0, 3);
  const secondRow = problems.slice(3, 5);

  return (
    <section 
      id="problems" 
      className="w-full min-h-screen py-8 px-4 bg-white flex items-center justify-center md:py-16 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center md:max-w-full">
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
                        {chars.length > 0 ? (
                          chars.map((item, charIdx) => {
                            if (item.isBr) {
                              return <React.Fragment key={`char-${index}-${charIdx}`}>{item.char}</React.Fragment>;
                            }
                            const charStr = typeof item.char === 'string' ? item.char : '';
                            // isVisibleがtrueの時のみ表示、isActiveでアニメーション制御
                            // isActiveがtrue: フェードイン、false: フェードアウト
                            const opacity = isVisible ? (isActive ? 1 : 0) : 0;
                            // フェードイン・フェードアウトともに左から右（順番）
                            const charPosition = item.index;
                            // フェードイン・フェードアウトともに順番（左から右）
                            const transitionDelay = isVisible 
                              ? `calc(0.05s * ${charPosition})` // フェードイン・フェードアウトともに順番
                              : '0s';
                            return (
                              <span
                                key={`char-${index}-${charIdx}`}
                                className="char inline-block"
                                style={{
                                  '--opacity': opacity,
                                  '--char-index': item.index,
                                  opacity: opacity,
                                  transition: opacity === 0 ? 'opacity 0.6s cubic-bezier(0.77, 0, 0.175, 1)' : 'opacity 0.6s cubic-bezier(0.77, 0, 0.175, 1)',
                                  transitionDelay: transitionDelay
                                } as React.CSSProperties}
                              >
                                {charStr === ' ' ? '\u00A0' : item.char}
                              </span>
                            );
                          })
                        ) : (
                          // フォールバック: 文字分割に失敗した場合は元のテキストを表示
                          <div>{problem}</div>
                        )}
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
            {/* 吹き出し（上、横一列） */}
            <div className="flex flex-row gap-4 items-center justify-center flex-nowrap w-full overflow-x-auto">
              {problems.map((problem, index) => (
                <div key={index} className="relative flex-shrink-0" style={{ flexShrink: 0 }}>
                  <img 
                    src="/hukidasi.png" 
                    alt="吹き出し" 
                    className="w-auto h-auto"
                    style={{ minWidth: '280px', maxWidth: '350px', width: 'auto', height: 'auto' }}
                  />
                  {/* テキスト */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] text-[clamp(15px,1.3vw,18px)] font-medium text-[#2C3E50] text-center leading-relaxed">
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
                className="w-auto h-auto max-w-[600px] max-h-[800px]"
              />
            </div>
          </div>

          {/* 広いPC版：経営者画像と吹き出し（すべて1行に） */}
          <div className="hidden 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center 2xl:gap-0 2xl:px-4">
            {/* 吹き出し（上、横一列） */}
            <div className="flex flex-row gap-4 items-center justify-center flex-nowrap w-full">
              {problems.map((problem, index) => (
                <div key={index} className="relative flex-shrink-0" style={{ flexShrink: 0 }}>
                  <img 
                    src="/hukidasi.png" 
                    alt="吹き出し" 
                    className="w-auto h-auto"
                    style={{ minWidth: '300px', maxWidth: '400px', width: 'auto', height: 'auto' }}
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
