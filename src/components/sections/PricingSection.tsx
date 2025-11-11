import styles from './PricingSection.module.css';

export default function PricingSection() {
  const plans = [
    {
      name: 'スタンダード',
      price: '¥50,000',
      period: '/月',
      features: [
        'キャリア開発支援',
        '月1回の面談',
        'レポート提供',
      ],
    },
    {
      name: 'プレミアム',
      price: '¥100,000',
      period: '/月',
      features: [
        'キャリア開発支援',
        '月2回の面談',
        'レポート提供',
        'カスタマイズ対応',
        '優先サポート',
      ],
    },
    {
      name: 'エンタープライズ',
      price: 'お問い合わせ',
      period: '',
      features: [
        'すべての機能',
        '専任担当者',
        'カスタマイズ対応',
        '24時間サポート',
      ],
    },
  ];

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>料金</h2>
        <div className={styles.plansGrid}>
          {plans.map((plan, index) => (
            <div key={index} className={styles.planCard}>
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.planPrice}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>
              <ul className={styles.featuresList}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={styles.planButton}>お問い合わせ</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





