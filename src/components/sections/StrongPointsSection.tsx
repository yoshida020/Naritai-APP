import styles from './StrongPointsSection.module.css';

export default function StrongPointsSection() {
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
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Strong Points</h2>
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

