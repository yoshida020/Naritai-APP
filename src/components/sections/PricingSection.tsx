'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './PricingSection.module.css';

export default function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  const plans = [
    {
      name: '3か月',
      price: '150,000円',
      period: '',
      monthlyPrice: '50,000',
    },
    {
      name: '6か月',
      price: '270,000円',
      period: '',
      monthlyPrice: '45,000',
    },
    {
      name: '12か月',
      price: '480,000円',
      period: '',
      monthlyPrice: '40,000',
    },
  ];

  const features = [
    'キャリア開発支援',
    '月1回の面談',
    'レポート提供',
  ];

  return (
    <section id="pricing" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>料金</h2>
        <div className={styles.promotionBox}>
          <div className={`${styles.promotionLine1} ${isVisible ? styles.animate : ''}`}>
            初期費用0
            <span className={styles.underline}></span>
          </div>
          <br />
          <div className={`${styles.promotionLine2} ${isVisible ? styles.animate : ''}`}>
            今だけ毎月5社初回無料
            <span className={styles.underline}></span>
          </div>
        </div>
        
        <div className={styles.contentWrapper}>
          <div className={styles.featuresSection}>
            <h3 className={styles.featuresTitle}>プラン内容</h3>
            <ul className={styles.featuresList}>
              {features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.plansGrid}>
            <div className={styles.planWrapper}>
              <div className={styles.planCard}>
                {plans.map((plan, index) => (
                  <div key={index} className={styles.planItem}>
                    <div className={styles.planPrice}>
                      <span className={styles.planName}>{plan.name}</span>
                      <span className={styles.price}>{plan.price}</span>
                      {plan.period && <span className={styles.period}>{plan.period}</span>}
                      {plan.monthlyPrice && (
                        <div className={styles.tooltip}>
                          ひと月あたり{plan.monthlyPrice}円
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.planButton}>お問い合わせ</button>
        </div>
      </div>
    </section>
  );
}





