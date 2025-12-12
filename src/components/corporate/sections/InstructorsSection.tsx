'use client';

import { useState, useRef, useEffect } from 'react';
import { SectionTitle } from '../../home/SectionTitle';

export default function InstructorsSection() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeStartX, setSwipeStartX] = useState(0);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [hasSwiped, setHasSwiped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const swipeStartXRef = useRef(0);
  const swipeOffsetRef = useRef(0);

  const instructors = [
    {
      name: '山田 太郎',
      role: 'キャリア開発コンサルタント',
      experience: '15年のキャリア開発支援経験',
      specialties: ['人材育成', '組織開発', '離職防止'],
      description: '多数の企業で若手社員の定着と成長を支援してきました。',
      backInfo: '大手企業での人材育成プロジェクトを多数手がけ、離職率を平均30%削減する実績を持ちます。',
      image: '/human02.jpeg',
    },
    {
      name: '佐藤 花子',
      role: '組織心理コンサルタント',
      experience: '10年の組織活性化支援経験',
      specialties: ['モチベーション向上', 'チームビルディング', '生産性向上'],
      description: '組織全体の活性化と生産性向上を実現する専門家です。',
      backInfo: '心理学の知見を活かし、チームの結束力と生産性を向上させる独自のメソッドを開発しました。',
      image: '/human03.jpeg',
    },
    {
      name: '鈴木 一郎',
      role: '人材開発スペシャリスト',
      experience: '12年の人材開発経験',
      specialties: ['研修プログラム設計', 'キャリアパス設計', 'メンタリング'],
      description: '一人ひとりの成長をサポートする個別対応が得意です。',
      backInfo: '個別のキャリア相談を年間200件以上実施し、社員の満足度向上に貢献しています。',
      image: '/human01.jpeg',
    },
  ];

  const handleCardClick = (index: number, e: React.MouseEvent) => {
    // スワイプ中またはスワイプが発生した場合はクリックイベントを無視
    if (isSwiping || hasSwiped) {
      if (hasSwiped) {
        // スワイプが発生した場合、少し遅延してからフラグをリセット
        setTimeout(() => setHasSwiped(false), 100);
      }
      return;
    }
    e.stopPropagation();
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const startX = e.touches[0].clientX;
    setSwipeStartX(startX);
    swipeStartXRef.current = startX;
    setIsSwiping(true);
    setHasSwiped(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - swipeStartXRef.current;
    setSwipeOffset(diff);
    swipeOffsetRef.current = diff;
  };

  const handleTouchEnd = () => {
    if (!isSwiping) return;
    const threshold = 50; // スワイプの閾値（px）
    const offset = swipeOffsetRef.current;
    
    if (Math.abs(offset) > threshold) {
      setHasSwiped(true);
      if (offset > 0) {
        // 右にスワイプ（前のカードへ）
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else {
          // 左端で右にスワイプしたら右端にループ
          setCurrentIndex(instructors.length - 1);
        }
      } else {
        // 左にスワイプ（次のカードへ）
        if (currentIndex < instructors.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          // 右端で左にスワイプしたら左端にループ
          setCurrentIndex(0);
        }
      }
    }
    
    setIsSwiping(false);
    setSwipeOffset(0);
    swipeOffsetRef.current = 0;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    setSwipeStartX(startX);
    swipeStartXRef.current = startX;
    setIsSwiping(true);
    setHasSwiped(false);
  };

  const handleMouseLeave = () => {
    if (isSwiping) {
      setIsSwiping(false);
      setSwipeOffset(0);
      swipeOffsetRef.current = 0;
      setHasSwiped(false);
    }
  };

  const handleDotClick = (index: number) => {
    if (isSwiping) {
      return;
    }
    // スワイプフラグをリセット
    if (hasSwiped) {
      setHasSwiped(false);
    }
    // 選択中のドットをタップした場合はカードを裏返す
    if (index === currentIndex) {
      setFlippedCards((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      });
    } else {
      // それ以外のドットをタップした場合はカードを切り替え
      setCurrentIndex(index);
    }
  };

  // マウスイベントをグローバルに追加
  useEffect(() => {
    if (!isSwiping) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const diff = currentX - swipeStartXRef.current;
      setSwipeOffset(diff);
      swipeOffsetRef.current = diff;
    };

    const handleGlobalMouseUp = () => {
      const threshold = 50;
      const offset = swipeOffsetRef.current;
      if (Math.abs(offset) > threshold) {
        setHasSwiped(true);
        if (offset > 0) {
          // 右にスワイプ（前のカードへ）
          if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
          } else {
            // 左端で右にスワイプしたら右端にループ
            setCurrentIndex(instructors.length - 1);
          }
        } else {
          // 左にスワイプ（次のカードへ）
          if (currentIndex < instructors.length - 1) {
            setCurrentIndex(currentIndex + 1);
          } else {
            // 右端で左にスワイプしたら左端にループ
            setCurrentIndex(0);
          }
        }
      }
      setIsSwiping(false);
      setSwipeOffset(0);
      swipeOffsetRef.current = 0;
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isSwiping, currentIndex, instructors.length]);

  return (
    <section
      id="instructors"
      className="w-full min-h-screen py-20 px-4 bg-[#F9FCFF] flex items-center justify-center md:py-12 md:px-4"
    >
      <div className="max-w-[1200px] w-full mx-auto text-center flex flex-col items-center">
        <div className="mb-16">
          <SectionTitle enTitle="Instructors" jaTitle="講師紹介" />
        </div>
        <p className="text-lg leading-relaxed text-[#919CB7] mb-12 max-w-[800px] mx-auto text-center md:text-base md:mb-8">
          経験豊富な講師陣が、お客様の組織に最適なサポートを提供します。
          <br />
          <span className="text-sm text-[#517CA2] font-medium inline-block mt-2">
            カードをクリックして詳細を確認 / 左右にスワイプして切り替え
          </span>
        </p>
        <div
          ref={containerRef}
          className="relative w-[80%] md:w-[400px] mx-auto overflow-visible touch-pan-y select-none h-[600px] flex items-center justify-center"
          style={{ perspective: '1200px', perspectiveOrigin: 'center center' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute inset-0 flex items-center justify-center" style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}>
            {instructors.map((instructor, index) => {
              const isFlipped = flippedCards.has(index);
              const isActive = index === currentIndex;
              
              // ループを考慮した相対位置を計算
              let relativePosition = index - currentIndex;
              
              // ループの最短距離を計算
              if (relativePosition > instructors.length / 2) {
                relativePosition = relativePosition - instructors.length;
              } else if (relativePosition < -instructors.length / 2) {
                relativePosition = relativePosition + instructors.length;
              }
              
              const distance = Math.abs(relativePosition);
              const isPrev = relativePosition < 0;
              const isNext = relativePosition > 0;
              
              // スワイプ中のオフセットを考慮
              const offsetX = isActive ? swipeOffset : 0;
              // カードの位置オフセット（中央配置を維持）
              // relativePositionが0の時は中央、±1の時は左右に移動
              const baseOffset = relativePosition * 120; // カード間の距離（px）
              
              // カードの位置に応じたスタイルを計算
              const cardStyle: React.CSSProperties = {
                position: 'absolute',
                left: '50%',
                top: '50%',
                zIndex: instructors.length - distance,
                transform: isActive
                  ? `translate(calc(-50% + ${baseOffset}px + ${offsetX}px), calc(-50% + 0px)) translateZ(0px) scale(1)`
                  : isPrev
                  ? `translate(calc(-50% + ${baseOffset}px - ${distance * 20}px), calc(-50% + 0px)) translateZ(-${distance * 50}px) scale(${Math.max(0.65, 1 - distance * 0.2)})`
                  : `translate(calc(-50% + ${baseOffset}px + ${distance * 20}px), calc(-50% + 0px)) translateZ(-${distance * 50}px) scale(${Math.max(0.65, 1 - distance * 0.2)})`,
                opacity: isActive ? 1 : Math.max(0.3, 1 - distance * 0.3),
                filter: isActive ? 'none' : `blur(${Math.min(5, distance * 2)}px)`,
                pointerEvents: isActive ? 'auto' : 'none',
                transition: isSwiping ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0.0, 0.2, 1), filter 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)',
                height: '550px',
              };
              
              return (
                <div
                  key={index}
                  className="w-full md:w-[400px] box-border"
                  style={{ ...cardStyle, perspective: '1000px', height: '550px', minHeight: '550px', transformStyle: 'preserve-3d' }}
                  onClick={(e) => handleCardClick(index, e)}
                >
                  <div
                    className={`relative w-full h-full min-h-[550px] cursor-pointer transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] md:min-h-[500px] ${
                      isFlipped ? '[transform:rotateY(180deg)]' : ''
                    } ${isActive ? 'cursor-pointer' : ''}`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* カードの前面 */}
                    <div 
                      className={`absolute w-full h-full rounded-2xl shadow-lg bg-[#F9FCFF] flex flex-col overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] z-[2] ${
                        isActive && !isFlipped ? 'hover:-translate-y-1 hover:shadow-xl md:hover:-translate-y-0.5' : ''
                      }`}
                      style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(0deg) translateZ(0)' }}
                    >
                      {/* 画像部分（上部） */}
                      <div className="w-full h-[250px] flex-shrink-0 overflow-hidden">
                        <img 
                          src={instructor.image} 
                          alt={instructor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* 紹介文部分（下部） */}
                      <div className="w-full flex-grow p-6 text-center flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold text-[#2C3E50] mb-3">
                          {instructor.name}
                        </h3>
                        <p className="text-lg font-medium text-[#517CA2] mb-4">
                          {instructor.role}
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                          {instructor.specialties.map((specialty, specialtyIndex) => (
                            <span 
                              key={specialtyIndex} 
                              className="px-3 py-1 bg-[#DCE5F1] text-[#517CA2] rounded-full text-xs font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* カードの背面 */}
                    <div 
                      className={`absolute w-full h-full rounded-2xl shadow-lg p-8 bg-gradient-to-br from-[#517CA2] to-[#6AA5CE] text-white justify-center flex flex-col items-center transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isActive && isFlipped ? 'hover:-translate-y-1 hover:shadow-xl md:hover:-translate-y-0.5' : ''
                      }`}
                      style={{ 
                        backfaceVisibility: 'hidden', 
                        WebkitBackfaceVisibility: 'hidden', 
                        transform: 'rotateY(180deg) translateZ(0)' 
                      }}
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center text-center p-6">
                        <p className="text-lg font-semibold text-white mb-4 md:text-base">
                          {instructor.experience}
                        </p>
                        <p className="text-base leading-relaxed text-white/95 mt-4 max-w-[280px] md:text-sm md:max-w-full">
                          {instructor.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* ページネーション・ドット */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {instructors.map((_, index) => {
            const isActive = index === currentIndex;
            const isFlipped = flippedCards.has(index);
            return (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`rounded-full transition-all duration-300 ease-in-out ${
                  isActive
                    ? isFlipped
                      ? 'w-8 h-8 bg-white border-2 border-[#517CA2] shadow-md hover:border-[#6AA5CE]'
                      : 'w-8 h-8 bg-[#517CA2] shadow-md hover:bg-[#6AA5CE]'
                    : 'w-4 h-4 bg-[#DCE5F1] hover:bg-[#B8C9E0]'
                }`}
                aria-label={isActive ? 'カードを裏返す' : `カード ${index + 1} に切り替え`}
                aria-current={isActive ? 'true' : 'false'}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}





