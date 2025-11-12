'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './InstructorsSection.module.css';

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
    },
    {
      name: '佐藤 花子',
      role: '組織心理コンサルタント',
      experience: '10年の組織活性化支援経験',
      specialties: ['モチベーション向上', 'チームビルディング', '生産性向上'],
      description: '組織全体の活性化と生産性向上を実現する専門家です。',
      backInfo: '心理学の知見を活かし、チームの結束力と生産性を向上させる独自のメソッドを開発しました。',
    },
    {
      name: '鈴木 一郎',
      role: '人材開発スペシャリスト',
      experience: '12年の人材開発経験',
      specialties: ['研修プログラム設計', 'キャリアパス設計', 'メンタリング'],
      description: '一人ひとりの成長をサポートする個別対応が得意です。',
      backInfo: '個別のキャリア相談を年間200件以上実施し、社員の満足度向上に貢献しています。',
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
    <section id="instructors" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>講師紹介</h2>
        <p className={styles.subtitle}>
          経験豊富な講師陣が、お客様の組織に最適なサポートを提供します。
          <br />
          <span className={styles.hint}>カードをクリックして詳細を確認 / 左右にスワイプして切り替え</span>
        </p>
        <div
          ref={containerRef}
          className={styles.instructorsCarousel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.carouselTrack}>
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
              const baseOffset = relativePosition * 100;
              
              // カードの位置に応じたスタイルを計算
              const cardStyle: React.CSSProperties = {
                left: '50%',
                zIndex: instructors.length - distance,
                transform: isActive
                  ? `translate(-50%, -50%) translateX(calc(${baseOffset}% + ${offsetX}px)) translateZ(0px) scale(1)`
                  : isPrev
                  ? `translate(-50%, -50%) translateX(calc(${baseOffset}% - ${distance * 20}px)) translateZ(-${distance * 50}px) scale(${Math.max(0.65, 1 - distance * 0.2)})`
                  : `translate(-50%, -50%) translateX(calc(${baseOffset}% + ${distance * 20}px)) translateZ(-${distance * 50}px) scale(${Math.max(0.65, 1 - distance * 0.2)})`,
                opacity: isActive ? 1 : Math.max(0.3, 1 - distance * 0.3),
                filter: isActive ? 'none' : `blur(${Math.min(5, distance * 2)}px)`,
                pointerEvents: isActive ? 'auto' : 'none',
                transition: isSwiping ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0.0, 0.2, 1), filter 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)',
              };
              
              return (
                <div
                  key={index}
                  className={styles.cardContainer}
                  style={cardStyle}
                  onClick={(e) => handleCardClick(index, e)}
                >
                  <div
                    className={`${styles.instructorCard} ${isFlipped ? styles.flipped : ''} ${isActive ? styles.active : ''}`}
                  >
                    {/* カードの前面 */}
                    <div className={styles.cardFront}>
                      <div className={styles.instructorImage}>
                        <div className={styles.imagePlaceholder}>
                          {instructor.name.charAt(0)}
                        </div>
                      </div>
                      <div className={styles.instructorInfo}>
                        <h3 className={styles.instructorName}>{instructor.name}</h3>
                        <p className={styles.instructorRole}>{instructor.role}</p>
                        <div className={styles.specialties}>
                          {instructor.specialties.map((specialty, specialtyIndex) => (
                            <span key={specialtyIndex} className={styles.specialtyTag}>
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* カードの背面 */}
                    <div className={styles.cardBack}>
                      <div className={styles.backContent}>
                        <p className={styles.backExperience}>{instructor.experience}</p>
                        <p className={styles.backDescription}>{instructor.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}





