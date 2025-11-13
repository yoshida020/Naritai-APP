'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CorporateSection.module.css';

export default function CorporateSection() {
  const text = 'For Corporate';
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
  
  const renderAnimatedTitle = (index: number) => {
    return (
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
    );
  };

  return (
    <section id="corporate" className={styles.section}>
      <div className={styles.container} ref={containerRef}>
        {renderAnimatedTitle(2)}
        <p className={styles.subtitle}>実現できること</p>
        <div className={styles.content}>
          <p className={styles.description}>
            企業の成長を支える人材育成ソリューションを提供します。
            <br />
            若手社員の定着と成長を通じて、組織全体の活性化を実現します。
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>人材定着</h3>
              <p className={styles.featureText}>早期離職を防ぎ、優秀な人材を定着させます。</p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>静かな退職防止</h3>
              <p className={styles.featureText}>早期離職を防ぎ、優秀な人材を定着させます。</p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>組織全体の成長</h3>
              <p className={styles.featureText}>社員の成長が組織全体の成長につながります。</p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>生産性向上</h3>
              <p className={styles.featureText}>モチベーション向上により生産性が向上します。</p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>早期離職防止</h3>
              <p className={styles.featureText}>早期離職を防ぎ、優秀な人材を定着させます。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

