'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const text = 'Contact';
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

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.background}>
        <div className={styles.backgroundImage} />
      </div>
      <div className={styles.overlay} />
      <div className={styles.container} ref={containerRef}>
        <div className={styles.content}>
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
          <p className={`${styles.subtitle} ${isVisible ? styles.slideInUp : ''}`}>お問い合わせ</p>
          <p className={`${styles.text} ${isVisible ? styles.slideInUp : ''}`}>
            サービスについてのご相談・ご質問、お見積もり依頼など、
            <br />
            お気軽にお問い合わせください。
          </p>
          <div className={`${styles.buttons} ${isVisible ? styles.slideInUp : ''}`}>
            <button className={styles.button}>資料請求</button>
            <button className={styles.button}>無料相談</button>
          </div>
        </div>
      </div>
    </section>
  );
}

