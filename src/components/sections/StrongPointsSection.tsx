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
      title: 'カルテ化による「再現性ある育成」',
      description: (
        <>
          可視化することで、感覚や属人的な育成に頼らず、
          <br />
          誰でも同じ質で育成できる仕組みを実現。
        </>
      ),
    },
    {
      title: 'Z世代に特化した"共感型コーチング"',
      description: (
        <>
          上から「指導」するのではなく、同じ目線で「伴走」。
          <br />
          Z世代特有の自己理解の浅さや言語化の難しさに寄り添いながら、
          <br />
          自分の「納得感」を軸に成長できるよう支援します。
        </>
      ),
    },
    {
      title: '代弁者',
      description: (
        <>
          若手が「本当は言いたいこと」。
          <br />
          上司が「本当は聞きたいこと」。
          <br />
          その間に立ち、私たちが代弁します。
        </>
      ),
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

