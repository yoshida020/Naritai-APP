import styles from './CorporateSection.module.css';

export default function CorporateSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>For Corporate</h2>
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
              <h3 className={styles.featureTitle}>組織成長</h3>
              <p className={styles.featureText}>社員の成長が組織全体の成長につながります。</p>
            </div>
            <div className={styles.feature}>
              <h3 className={styles.featureTitle}>生産性向上</h3>
              <p className={styles.featureText}>モチベーション向上により生産性が向上します。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

