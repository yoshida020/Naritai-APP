'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StrongPointsSection.module.css';

export default function StrongPointsSection() {
  const text = 'Strong Points';
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const points = [
    {
      title: '豊富な実績',
      description: '多数の企業様で実績を積み上げてきました。',
    },
    {
      title: '専門的なサポート',
      description: 'キャリア開発の専門家がサポートします。',
    },
    {
      title: 'カスタマイズ対応',
      description: 'お客様の組織に合わせたプログラムを提供します。',
    },
    {
      title: '継続的な支援',
      description: '単発ではなく、継続的なサポートを提供します。',
    },
  ];

  return (
    <section id="strong-points" className={styles.section}>
      <div className={styles.container} ref={containerRef}>
        <h2 className={styles.title}>
          {text.split('').map((char, i) => (
            <span
              key={i}
              className={`${styles.char} ${isVisible ? styles.animate : ''}`}
              style={{
                animationDelay: `${i * 0.06}s`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>
        <p className={styles.subtitle}>私たちの強み</p>
        <div className={styles.pointsGrid}>
          {points.map((point, index) => (
            <div key={index} className={styles.pointCard}>
              <div className={styles.pointIcon}>✓</div>
              <h3 className={styles.pointTitle}>{point.title}</h3>
              <p className={styles.pointDescription}>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

