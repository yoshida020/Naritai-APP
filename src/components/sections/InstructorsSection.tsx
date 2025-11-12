'use client';

import { useState } from 'react';
import styles from './InstructorsSection.module.css';

export default function InstructorsSection() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

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

  const handleCardClick = (index: number) => {
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

  return (
    <section id="instructors" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>講師紹介</h2>
        <p className={styles.subtitle}>
          経験豊富な講師陣が、お客様の組織に最適なサポートを提供します。
          <br />
          <span className={styles.hint}>カードをクリックして詳細を確認</span>
        </p>
        <div className={styles.instructorsGrid}>
          {instructors.map((instructor, index) => {
            const isFlipped = flippedCards.has(index);
            return (
              <div
                key={index}
                className={styles.cardContainer}
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`${styles.instructorCard} ${isFlipped ? styles.flipped : ''}`}
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
    </section>
  );
}





